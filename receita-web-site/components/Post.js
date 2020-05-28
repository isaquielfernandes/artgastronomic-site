import Router from 'next/router'
import { useRouter } from "next/router"
import { client } from '../lib/api'
import Receita from '../pages/receita/[id]';

const  Post = (props) => {
    const router = useRouter();
    const { id } = router.query;
   
    return (
        <div className="card-group grid">
            { props.posts.map((p) => (
                <div id={p.fields.categoria} className="col-xs-12 col-sm-6 col-md-4 col-lg-4 p-2 mb-0 grid-item " key={p.sys.id}>
                    <article className={p.fields.categoria}>
                        <div className="card img-container">
                            <img src={p.fields.image.fields.file.url} className="card-img-top img-fluid" alt="receita-img" />
                            <button type="button" className="btn-ver-receita" data-id={p.sys.id} data-toggle="modal" data-target="#post-receita" >
                                 Ver Receita <i className="fa fa-cutlery" aria-hidden="true"></i>
                            </button>
                            <div className="card-header p-2">
                                    <h5 className="card-title mt-1">{p.fields.nome}</h5>
                            </div>
                        </div>
                    </article>
                </div>
            ))}
            {/* onClick={() => Router.push(`/receita/[id]`, `/receita/${p.sys.id}`)}*/}
             
        </div>
)};

export default Post;