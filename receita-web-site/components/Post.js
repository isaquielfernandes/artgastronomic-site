import Router from 'next/router';
import Link from 'next/link';

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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 px-2 clearfix grid" >
            { posts.map((p) => (
                <article key={p.sys.id} className="col mb-3 px-sm-2 grid-item">
                    <div id={p.fields.categoria} className="card rounded-0 h-100 img-container" >
                        <img src={p.fields.image.fields.file.url} className="card-img-top img-fluid rounded-0" alt="receita-img" />
                        <button className="rounded-left btn-ver-receita" onClick={() => Router.push(`/post/[id]`, `/post/${p.sys.id}`)}>
                            Ver Receita <i className="fa fa-cutlery" aria-hidden="true"></i>
                        </button>
                        <div className="card-body p-2">
                            <h5 className="card-title text-truncate">{p.fields.nome}</h5>
                        </div>
                    </div>
                </article>
            ))}
        </div>
)};

export default Post;
