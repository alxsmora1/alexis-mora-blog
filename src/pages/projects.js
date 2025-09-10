import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/portfolio.css"
import Projects from "../components/Projects";

const ProjectsPage = ({data: { site }}) => {

  return (
    <Layout>
      <Helmet>
        <title>Projects — {site.siteMetadata.title}</title>
        <meta
          name="Public projects and freelance"
          content={"Projects of " + site.siteMetadata.description}
        />
      </Helmet>
      <Projects />
    </Layout>
  )
}

export default ProjectsPage;
export const pageQuery = graphql`
  query ProjectsPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
