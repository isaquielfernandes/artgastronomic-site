import { useRouter } from "next/router";
import { getOnePostByID } from '../../lib/api'
import ErrorPage from 'next/error'
import Layout from "../../components/Layout";

const Receita = ({ post }) => {
    
    const router = useRouter()
    let { id } = router.query;
    post = getOnePostByID(id)
    if (!router.isFallback && !post) {
      return <ErrorPage statusCode={404} />
    }

    return (
        <Layout>
            <div className="card ">
                <img src={post.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{post.nome}</h5>
                    <p className="card-text">{post.descricao}.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </Layout>
    );
};

export default Receita;