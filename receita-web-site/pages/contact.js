import React from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "../components/Container";

const Contact = () => {
  return (
    <Container>
      <Head>Contatos</Head>
      <div className="container">
        <section className="row py-5">
          <article className="col-md-4">
            <h1 className="mb-3">Contato</h1>
            <form action="https://formspree.io/mrgyarbl" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control mb-1"
                />
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="form-control mb-1"
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-success">
                Enviar<i class="fas fa-paper-plane ml-1"></i>
              </button>
            </form>
          </article>
        </section>
      </div>
    </Container>
  )
}

export default Contact
