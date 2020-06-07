import { useRouter } from 'next/router';
import { client, getOnePostByID } from '../../lib/api';
import ErrorPage from 'next/error';
import $ from 'jquery';
import Layout from '../../components/Layout';


const Receita = ( { receita } ) => {
    const router = useRouter();
    const { id } = router.query;
    return (
      <Layout>
          <div className="row">
            <div className="col-md-9 offset-md-0">
            { receita.map((p) => (
              <div key={p.sys.id} className="card">
                  <div className="card-header">
                    <h3>
                      {p.fields.nome}
                    </h3>
                  </div>
                  <img
                      src={p.fields.image.fields.file.url}
                      alt={p.fields.nome}
                      className="card-img-top rounded-0" alt={p.fields.nome}
                    />
                  <div className="card-body">
                    <p>{p.fields.descricao}</p>
                  </div>
                  <div className="card-footer text-muted">
                      <Date dateString={p.sys.updatedAt} />
                  </div>
              </div>
              ))}
            </div>
          </div>
      </Layout>
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
