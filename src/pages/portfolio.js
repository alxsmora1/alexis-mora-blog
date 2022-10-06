import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Masthead from "../components/portfolio/Masthead";
import "../styles/portfolio.css"
import AboutMe from "../components/portfolio/AboutMe";
import PortfolioBoard from "../components/portfolio/PortfolioBoard";

const PortfolioPage = ({data: { site }}) => {

  return (
    <Layout>
      <Helmet>
        <title>Portfolio — {site.siteMetadata.title}</title>
        <meta
          name="Portfolio of Alexis Mora"
          content={"Portfolio of " + site.siteMetadata.description}
        />
      </Helmet>
      <Masthead />
      <AboutMe />
      <PortfolioBoard />
    </Layout>
  )
}

export default PortfolioPage;
export const pageQuery = graphql`
  query PortfolioPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
