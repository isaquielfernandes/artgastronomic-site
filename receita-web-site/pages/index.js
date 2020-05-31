import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from "../components/Container";
import Head from 'next/head';
import Footer from "../components/Footer";
import Post from '../components/Post'
import { client } from '../lib/api'
import Pagination from '../components/Pagination';
import Paginator from '../components/Paginator';

const calculateRange = (length) => Array.from({ length }, (v, k) => k + 1);

const  Index = (props) => {

  const router = useRouter();
  const posts = props.receitas.length ? props.receitas : [];
  const total = props.total;
  const limit = props.limit;
  const rangeLimit = Math.ceil(total / limit);
  const range = calculateRange(rangeLimit);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(!!props.page ? props.page : 1);
  const [postsPerPage] = useState(limit);

  useEffect(() => {
    void router.push({ pathname: '/', query: { page: currentPage } });
  }, [currentPage]);

  //const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
        <>
          <Container>
              <Head>
                  <title>Home - Art Gastronomic</title>
              </Head>
              <div className="card-body p-2">
                <Post posts = { posts } loading={ loading } />
              </div>
              <div className="card-footer">
              <Paginator
                   handlePaginationChange={(event) => setCurrentPage(event)}
                   range={range}
                   skip={currentPage}/>
                {/*<Pagination skip={currentPage} postsPerPage={postsPerPage} totalPosts={total} paginate={paginate} />*/}
              </div>
          </Container>
          
          <Footer/>
        </>
  )
};

Index.getInitialProps = async ({ query }) => {
  let page = 1;
  if (query.page) {
    page = parseInt(query.page + '');
  }
  let dados = await client.getEntries({
    content_type: "receitaPost",
    limit: 6,
    skip: (page - 1) * 6
  });
  return {page, receitas: dados.items, skip: dados.skip, total: dados.total, limit: dados.limit };
};

export default Index;
