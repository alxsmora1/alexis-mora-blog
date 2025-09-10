import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Masthead from "../components/portfolio/Masthead";
import "../styles/portfolio.css"
import AboutMe from "../components/portfolio/AboutMe";

const ResumePage = ({data: { site }}) => {

  return (
    <Layout>
      <Helmet>
        <title>Resume — {site.siteMetadata.title}</title>
        <meta
          name="Resume of Alexis Mora"
          content={"Resume of " + site.siteMetadata.description}
        />
      </Helmet>
      <Masthead />
      <AboutMe />
    </Layout>
  )
}

export default ResumePage;
export const pageQuery = graphql`
  query ResumePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
