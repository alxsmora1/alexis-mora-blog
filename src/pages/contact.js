import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {
  useFloating,
  useDismiss,
  useRole,
  useInteractions,
  FloatingOverlay,
  FloatingFocusManager,
} from "@floating-ui/react";

const ResultDialog = ({ isOpen, onClose, success, message }) => {
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: open => { if (!open) onClose(); },
  });
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
  const role = useRole(context);
  const { getFloatingProps } = useInteractions([dismiss, role]);

  if (!isOpen) return null;

  return (
    <FloatingOverlay className="dialog-overlay" lockScroll>
      <FloatingFocusManager context={context}>
        <div
          ref={refs.setFloating}
          className="dialog"
          {...getFloatingProps()}
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <h2 id="dialog-title">{success ? "¡Mensaje enviado!" : "Error al enviar"}</h2>
          <p id="dialog-description">{message}</p>
          <div className="dialog-footer">
            <button className="button -primary" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </FloatingFocusManager>
    </FloatingOverlay>
  );
};

const ContactPage = ({ data: { site } }) => {
  const [datos, setDatos] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [dialog, setDialog] = useState({ open: false, success: false, message: "" });

  const handleInputChange = event => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = document.getElementById("contact-form");
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() =>
        setDialog({
          open: true,
          success: true,
          message: "Gracias, me pondré en contacto lo más pronto posible!"
        })
      )
      .catch(error =>
        setDialog({
          open: true,
          success: false,
          message: String(error)
        })
      );
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
      <ResultDialog
        isOpen={dialog.open}
        success={dialog.success}
        message={dialog.message}
        onClose={() => setDialog(d => ({ ...d, open: false }))}
      />
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
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out if you’re human:{" "}
                <input name="bot-field" type="text" />
              </label>
            </p>
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="message">Mensaje</label>
              <textarea
                name="message"
                id="message"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                className="button -primary"
                style={{ marginRight: 0 }}
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
