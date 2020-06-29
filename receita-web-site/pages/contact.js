import React from "react";
import Link from "next/link";
import Head from "next/head";
import Container from "../components/Container";

const Contact = () => {
  return (
    <Container>
      <Head>Contatos</Head>
      <section className="row">
        <article className="col-md-6 offset-md-3">
          <h3></h3>
          <form action="https://formspree.io/YOUR_ID" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </Container>
  )
}

export default Contact
