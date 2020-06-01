import { useRouter } from 'next/router';
import { client, getOnePostByID } from '../../lib/api';
import ErrorPage from 'next/error';

const Receita = ( { receita } ) => {
    const router = useRouter();
    const { id } = router.query;

    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={receita.fields.image.fields.file.url}
                alt={receita.fields.nome}
                style={{ borderRadius: "4%" }}
              />
            </div>
            <div className="card-body text-center">
              <h3>
                {receita.fields.nome}
              </h3>
              <p>{receita.fields.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

Receita.getInitialProps = async (ctx) => {
        
        let dado = await client.getEntries({
          content_type: "receitaPost",
          'sys.id': ctx.query.sys.id
        });
        return {receita: dado.items};
};

export default Receita;
