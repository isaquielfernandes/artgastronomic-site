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
                    <div className="card rounded-0 h-100 img-container shadow-sm" >
                        <div className="card-header p-0 m-0">
                           <img src={p.fields.image.fields.file.url} className="card-img-top img-fluid rounded-0" alt={`img-${p.fields.nome}`} />
                        </div>
                        <div className="card-body p-2">
                            <h3 className="text-truncate my-3">{p.fields.nome}</h3>
                             
                        </div>
                        <div className="card-footer">
                            <Link href="/post/[id]" as={`/post/${p.sys.id}`}>
                                <a className="btn btn-outline-warning p-button-raised my-2" style={{color: '#2E2E2E'}}>Ver Receita <i className="fa fa-cutlery" ></i></a>
                             </Link>
                        </div>
                    </div>
                </article>
            ))}
        </div>
)};

export default Post;
