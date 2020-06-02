import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import $ from 'jquery';
import Container from "../components/Container";
import Head from 'next/head';
import Footer from "../components/Footer";
import Post from '../components/Post';
import { client } from '../lib/api';
//import Paginator from '../components/Paginator';
import {Paginator} from 'primereact/paginator';

const calculateRange = (length) => Array.from({ length }, (v, k) => k + 1);

const  Index = (props) => {

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const posts = props.receitas.length ? props.receitas : [];
  const total = props.total;
  const limit = props.limit;
  const rangeLimit = Math.ceil(total / limit);
  const range = calculateRange(rangeLimit);
  
  const [currentPage, setCurrentPage] = useState(!!props.page ? props.page : 1);

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
 
  let pag = (first/rows) + 1;
  useEffect(() => {
    void router.push({ pathname: '/', query: { page: pag, postsPerPage: rows, skip: first} });
  }, [first, rows]);

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
                 <Paginator first={first} rows={rows} totalRecords={total} rowsPerPageOptions={[3,6,9,12]} onPageChange={onPageChange}></Paginator>   
              </div>
          </Container>
          <Footer/>
        </>
  )
};

Index.getInitialProps = async ({ query }) => {
  let page = 1;
  if (query.skip) {
    page = parseInt(query.skip + '');
  }

  let postsPerPage = 6;
  if (query.postsPerPage) {
    postsPerPage = parseInt(query.postsPerPage + '');
  }  

  let dados = await client.getEntries({
    content_type: "receitaPost",
    limit: postsPerPage,
    skip: page 
  });
  return {page, receitas: dados.items, skip: dados.skip, total: dados.total, limit: dados.limit };
};

export default Index;
