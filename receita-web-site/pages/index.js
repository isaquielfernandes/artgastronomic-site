import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Container from "../components/Container";
import Head from 'next/head';
import Footer from "../components/Footer";
import Post from '../components/Post';
import { client } from '../lib/api';
import { categorias } from '../lib/constante';
import {Dropdown} from 'primereact/dropdown';
import {ListBox} from 'primereact/listbox';
import {Panel} from 'primereact/panel';
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
    void router.push({ pathname: '/', query: { page: pag, limit: rows, skip: first, categoria: categoria} });
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
                    <div className="card-header">
                      <header className="p-fluid">
                        <h5 className="">Receitas</h5>
                        <hr/>
                        <Dropdown pageLinkSize={3} value={categoria} options={categorias} onChange={onCategoriaChange} className="mb-3 d-lg-none" editable={false} placeholder="Selecione uma Categoria" />
                        
                      </header>                      
                    </div>
                    <div className="card-body p-2">
                      <Post posts = { posts } loading={ loading } />
                    </div>
                    <div className="card-footer">
                      <Paginator first={first} rows={rows} totalRecords={total} rowsPerPageOptions={[3,6,9,12]} onPageChange={onPageChange}></Paginator>   
                    </div>           
                    </div>
                  </section>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-3 mb-2">
                  <aside id="categoria-section" className="categoria-section d-none d-lg-block">    
                    <Panel id="categoria-panel" header="Categorias" className="p-0 p-fluid">
                      <ListBox value={categoria} options={categorias} onChange={ onCategoriaChange } />
                    </Panel>   
                  </aside>
              </div>
          </Container>
          <Footer/>
        </>
  )
};

Index.getInitialProps = async ({ query }) => {
  let page;
  if (query.skip) {
    page = parseInt(query.skip + '');
  }

  let postsPerPage;
  if (query.postsPerPage) {
    postsPerPage = parseInt(query.postsPerPage + '');
  }  

  let dados = await client.getEntries({
    content_type: "receitaPost",
    'fields.categoria[in]': !(query.categoria === '*' ) ? query.categoria : categorias.map((cat) => (cat.value)).toString(),
    limit: postsPerPage,
    skip: page 
  });
  return {page, receitas: dados.items, skip: dados.skip, total: dados.total, limit: dados.limit };
};

export default Index;
