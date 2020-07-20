import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { client } from '../../lib/api';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Date from '../../components/Data';
import ReactMarkdown from 'react-markdown';

import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
};


const Receita = ( { receita } ) => {

    const router = useRouter();
    const { id } = router.query;

    return (
      <Container>
            <Head>
                <title>Receita</title>
            </Head>
            { receita.map((p) => (
              <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }} key={p.sys.id} className="container mt-0">
                  <div className="row">
                      <div className="col-12 mx-auto text-center mt-5 mt-2 text-info">
                        <h1 className="font-weight-bold">
                          {p.fields.nome}
                        </h1>
                      </div>
                  </div>
                  <motion.div variants={stagger} className="row">
                    <div className="col-12 mx-auto col-md-6 my-3">
                        <img src={p.fields.image.fields.file.url} alt={p.fields.nome}
                            className="card-img-top rounded-0" alt={p.fields.nome}
                        />
                    </div>
                    <div className="col-12 mx-auto col-md-6 my-3 text-capitalize">
                      {/*<p className="lead">{p.fields.descricao}</p>*/}
                      <div className="mt-4">
                         <ReactMarkdown source={p.fields.descricao} />
                      </div> 
                      <div className="my-1 text-right" style={{color: '#4A4A4A'}}>
                          <hr/>
                          <Date dateString={p.sys.createdAt} />
                      </div>
                      <div className="float-right my-3">
                          <Link href="/">
                              <a className="btn btn-outline-danger border-2 my-2" style={{background: '#141414'}}>Voltar<i class="fas fa-arrow-circle-left ml-1" ></i></a>
                          </Link>
                      </div>
                    </div>
                  </motion.div>
              </motion.div>
              ))}
      </Container>
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
