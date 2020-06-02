import Router from 'next/router';
import Link from 'next/link';
import { client } from '../lib/api';

const  Post = ({ posts, loading }) => {

    if(loading){
        return (
            <div className="d-flex align-items-center">
                <strong>Loading...</strong>
                <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
            </div>
        )
    }
   
    return (
        <div className="card-columns grid">
            { posts.map((p) => (
                <article id={p.fields.categoria} className="col-sm-6 col-md-4 col-lg-4 p-2 mb-0 grid-item " key={p.sys.id}>
                   <div className="card img-container">
                        <img src={p.fields.image.fields.file.url} className="card-img-top img-fluid" alt="receita-img" />
                        <button className="rounded-left btn-ver-receita" onClick={() => Router.push(`/post/[id]`, `/post/${p.sys.id}`)}>
                                 Ver Receita <i className="fa fa-cutlery" aria-hidden="true"></i>
                        </button>
                        <div className="card-header p-2">
                             <h5 className="card-title mt-1 text-truncate">{p.fields.nome}</h5>
                        </div>
                    </div>
                </article>
            ))}
            {/* onClick={() => Router.push(`/blog/[id]`, `/blog/${p.sys.id}`)}*/}
            <div className="modal fade" id="post-receita" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                                    .........
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)};

Post.getInitialProps = async (ctx) => {
    const { id } = ctx.query
        let dado = await client.getEntries({
          content_type: "receitaPost",
          'sys.id[in]': id
        });
        return {receita: dado.items};
  };

export default Post;
