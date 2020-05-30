import React, { useState, useEffect } from 'react';
import Container from "../components/Container";
import Head from 'next/head';
import Footer from "../components/Footer";
import Post from '../components/Post'
import { client } from '../lib/api'

const  Index = (props) => (
    <div className="">
      <Container>
          <Head>
              <title>Home - Art Gastronomic</title>
          </Head>
          <div>
             <Post posts = { props.receitas }/>
          </div>
      </Container>
      
      <Footer/>

      <style jsx>{`

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

useEffect(() => {
Index.getInitialProps = async (ctx) => {
  setLoading(true);
  let dados = await client.getEntries({
    content_type: "receitaPost"
  });
  setPosts(dados.items);
  return {receitas: dados.items};
}; 
 
}, []);

export default Index;
