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
        <div className="card-columns clearfix grid" >
            { posts.map((p) => (
                <article id={p.fields.categoria} className="card img-container grid-item" key={p.sys.id}>
                    <img src={p.fields.image.fields.file.url} className="card-img-top img-fluid rounded-0" alt="receita-img" />
                    <button className="rounded-left btn-ver-receita" onClick={() => Router.push(`/post/[id]`, `/post/${p.sys.id}`)}>
                        Ver Receita <i className="fa fa-cutlery" aria-hidden="true"></i>
                    </button>
                    <div className="card-header p-2">
                        <h5 className="card-title mt-1 text-truncate">{p.fields.nome}</h5>
                    </div>
                </article>
            ))}
        </div>
)};

export default Post;
