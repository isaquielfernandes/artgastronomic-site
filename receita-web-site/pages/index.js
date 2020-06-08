import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from "../components/Container";
import Head from 'next/head';
import Footer from "../components/Footer";
import Post from '../components/Post';
import PanelCategoria from '../components/PanelCategoria';
import CardHeaderPost from '../components/CardHeaderPost';
import { client } from '../lib/api';
import { categorias } from '../lib/constante';
import {Dropdown} from 'primereact/dropdown';
import {ListBox} from 'primereact/listbox';
import {Paginator} from 'primereact/paginator';


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

  const onCategoriaChange = (e) => {
    setCategoria(e.value);
  };
 
  let pag = (first/rows) + 1;
  useEffect(() => {
    router.push({ pathname: '/', query: { page: pag, limit: rows, skip: first, categoria: categoria} });
  }, [first, rows, categoria]);

  return (
        <>
          <Container>
              <Head>
                  <title>Home - Art Gastronomic</title>
              </Head>

              <div className="col-sm-12 col-md-12 col-lg-9 mb-2">
                  <section className="receita-section">
                    <div className="card">
                      <CardHeaderPost>
                          <Dropdown pageLinkSize={3} value={categoria} options={categorias} onChange={onCategoriaChange} className="mb-3 d-lg-none" editable={false} placeholder="Selecione uma Categoria" />
                      </CardHeaderPost>
                      <div className="card-body p-2">
                        <Post posts = { posts } loading={ loading } />
                      </div>
                      <div className="card-footer">
                        <Paginator first={first} rows={rows} totalRecords={total}  onPageChange={onPageChange}></Paginator>   
                      </div>           
                    </div>
                  </section>
              </div>
              <PanelCategoria>
                  <ListBox value={categoria} options={categorias} onChange={ onCategoriaChange } />
              </PanelCategoria>
              
          </Container>
          <Footer/>
        </>
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
