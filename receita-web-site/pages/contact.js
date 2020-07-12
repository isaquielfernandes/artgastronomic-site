import React from "react";
import Link from "next/link";
import Head from "next/head";
import { GMap } from 'primereact/gmap';
import GoogleMaps from "../components/GoogleMaps";
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
                <label className="sr-only" id="name">Name</label>
                <input
                  for="name"
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control mb-1"
                  aria-labelledby="name"
                />
                <label className="sr-only" id="email">Email</label>
                <input
                  for="email"
                  type="email"
                  placeholder="email"
                  name="email"
                  className="form-control mb-1"
                  aria-labelledby="email"
                />
                <label className="sr-only" id="message">Message</label>
                <textarea
                  for="message"
                  name="message"
                  rows="6"
                  placeholder="message"
                  className="form-control"
                  aria-labelledby="message"
                ></textarea>
              </div>
              <button type="submit" style={{background: '#1C1C1C'}} className="btn btn-outline-success mb-3">
                Enviar<i className="fas fa-paper-plane ml-1"></i>
              </button>
            </form>
          </article>
          <div className="col-md-8">
              
          </div>
        </section>
      </div>
    </Container>
  )
}

export default Contact
