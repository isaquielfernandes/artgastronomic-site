import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import Container from "../components/Container";
import Head from 'next/head';
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Album from "../components/Album";
import MainSection from "../components/MainSection";
import Post from '../components/Post';
import PanelCategoria from '../components/PanelCategoria';
import CardHeaderPost from '../components/CardHeaderPost';
import { client } from '../lib/api';
import { categorias } from '../lib/constante';
import { Dropdown } from 'primereact/dropdown';
import { ListBox } from 'primereact/listbox';
import { Paginator } from 'primereact/paginator';

import { motion } from "framer-motion";

// Our custom easing
let easing = [0.6, -0.05, 0.01, 0.99];

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const  Index = (props) => {

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const posts = props.receitas.length ? props.receitas : [];
  const total = props.total;
  const limit = props.limit;

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(6);
  const [categoria, setCategoria] = useState('*');

  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const onCategoriaChange = (event) => {
    setCategoria(event.value);
  };
 
  let pag = (first/rows) + 1;
  useEffect(() => {
       router.push({ pathname: '/', query: { page: pag, limit: rows, skip: first, categoria: categoria}, shallow: true });
    }, [pag, rows, first, categoria]);

  return (
          <Container>
              <Head>
                  <title>Receita blog - Art Gastronomic</title>
              </Head>
              <Banner/>
              <MainSection>
              <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} className="col-sm-12 col-md-12 col-lg-9 mt-5 mb-2">
                  <section className="receita-section">
                    <div className="px-0">
                      <CardHeaderPost>
                          <Dropdown pageLinkSize={3} value={categoria} options={categorias} onChange={onCategoriaChange} className="mb-3 d-lg-none" editable={false} placeholder="Selecione uma Categoria" />
                      </CardHeaderPost>
                      <div className="">
                        <Post posts = { posts } loading={ loading } />
                      </div>
                      
                        { posts.length > 0 ? (
                            <Paginator first={first} rows={rows} totalRecords={total}  onPageChange={onPageChange} className="p-align-center"/>   
                        ) : null}
                            
                    </div>
                  </section>
              </motion.div>
           
              <PanelCategoria>
                  <ListBox value={categoria} options={categorias} onChange={ onCategoriaChange } />
              </PanelCategoria>
              
              </MainSection>
              <Album/>
          </Container>
  )
};

Index.getInitialProps = async ({ query }) => {
  let skip = 1;
  if (query.skip) {
    skip = parseInt(query.skip + '');
  }

  let postsPerPage = 6;
  if (query.postsPerPage) {
    postsPerPage = parseInt(query.postsPerPage + '');
  }  

  let dados = await client.getEntries({
    content_type: "receitaPost",
    'fields.categoria[in]': !(query.categoria === '*' ) ? query.categoria : categorias.map((cat) => (cat.value)).toString(),
    limit: postsPerPage,
    skip: skip 
  });
  return {receitas: dados.items, skip: dados.skip, total: dados.total, limit: dados.limit };
};

export default Index;
