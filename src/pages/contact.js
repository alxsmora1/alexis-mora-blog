import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = event => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form =  document.getElementById("contact-form");
    let  formData = new FormData(form);

    if (formData.get("bot-field")) {
      alert("Bot detected!");
      return;
    }

    if (!formData.get("name") || !formData.get("email")) {
      alert("Por favor llena todos los campos requeridos.");
      return;
    }
    if (!formData.get("message")) {
      alert("Por favor llena el mensaje.");
      return;
    }
    if (!formData.get("subject")) {
      alert("Por favor llena el asunto.");
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() =>
        alert("Gracias, me pondre en contacto lo más pronto posible!")
      )
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"Contact page of " + site.siteMetadata.description}
        />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/markus-winkler-Lp4jsVg8gpY-unsplash.jpg')`,
            marginBottom: 0
          }}
        >
          <h1 className="post-title">Escribeme</h1>
          <p>Dejame ayudarte a iniciar tu siguiente proyecto &rarr;</p>
        </div>
        <div>
          <form
            className="form-container"
            name="contact"
            id="contact-form"
            action="/contact"
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="name-form" value="contact" />
            <input type="hidden" name="bot-field" />
            <div>
              <label htmlFor="name">Nombre<span className="text-danger">*</span></label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-100"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email<span className="text-danger">*</span></label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                className="w-100"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="subject">Asunto<span className="text-danger">*</span></label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="w-100"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="message">Mensaje<span className="text-danger">*</span></label>
              <textarea
                name="message"
                id="message"
                className="w-100"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="justify-content-end d-flex">
              <input
                type="submit"
                className="button btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
