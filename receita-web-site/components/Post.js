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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 clearfix" itemtype ="http://schema.org/Receita">
            { posts.map((p) => (
                <article key={p.sys.id} className="col mx-auto mb-3 px-sm-2">
                    <div id={p.fields.categoria} className="card rounded-0 h-100 img-container" >
                        <img src={p.fields.image.fields.file.url} className="card-img-top img-fluid rounded-0" alt={p.fields.nome}/>
                        <div className="card-body p-2">
                            <h5 className="font-weight-lighter text-truncate">{p.fields.nome}</h5>
                             <Link className=" my-2" href="/post/[id]" as={`/post/${p.sys.id}`}>
                                <a className="btn btn-outline-warning">Ver Receita <i className="fa fa-cutlery" aria-hidden="true"></i></a>
                             </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
)};

export default Post;
