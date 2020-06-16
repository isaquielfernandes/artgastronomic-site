import { useRouter } from 'next/router';
import Head from 'next/head';
import { client } from '../../lib/api';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Date from '../../components/Data';


const Receita = ( { receita } ) => {

    const router = useRouter();
    const { id } = router.query;

    return (
      <Container>
            <Head>
               <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,700&display=swap" rel="stylesheet">
            </Head>
        
            { receita.map((p) => (
              <div key={p.sys.id} className="container mt-1 py-5">
                  <div className="row">
                      <div className="col-10 mx-auto text-center my-5 text-info">
                        <h1 className="font-weight-bold">
                          {p.fields.nome}
                        </h1>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={p.fields.image.fields.file.url} alt={p.fields.nome}
                            className="card-img-top rounded-0" alt={p.fields.nome}
                        />
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <p className="text-muted lead">{p.fields.descricao}</p>
                      <div className="text-muted">
                          <hr/>
                          <Date dateString={p.sys.createdAt} />
                      </div>
                    </div>
                  </div>
              </div>
              ))}
      </Container>
    );
};

Receita.getInitialProps = async (ctx) => {
        let dado = await client.getEntries({
          content_type: "receitaPost",
          'sys.id[in]': ctx.query.id
        });
        return {receita: dado.items};
};

export default Receita;
