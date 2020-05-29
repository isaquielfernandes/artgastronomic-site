import { useRouter } from 'next/router';
import { getOnePostByID } from '../../lib/api';
import ErrorPage from 'next/error';

const Receita = ( props ) => {

    Receita.getInitialProps = async (ctx) => {
        const { id } = ctx.query
        let dado = await client.getEntries({
          content_type: "receitaPost",
          'sys.id[in]': id
        });
        return {receita: dado.items};
    };

    const { post } = this.props.receita;
    return (
        
        <div className="modal fade" id="post-receita" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    ...
                    </div>
                    <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default Receita;