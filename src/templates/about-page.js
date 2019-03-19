import React from "react";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Header } from "semantic-ui-react";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div
        className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
        style={{
          boxShadow:
            "rgb(81, 39, 75, 0.7) 0.5rem 0px 0px, rgb(81, 39, 75, 0.7) -0.5rem 0px 0px",
          backgroundColor: "rgb(81, 39, 75, 0.7)",
          color: "white",
          lineHeight: "1",
          paddingTop: "1em",
          paddingBottom: "1em",
          textAlign: "center"
        }}
      >
        <Header
          as="h5"
          style={{
            paddingLeft: "1em",
            paddingRight: "1em",
            color: "white"
          }}
        >
          ।। जय श्री राम ।। जय श्री अंजनीलाल ।। ॐ नमः शिवाय ।।
        </Header>
        <Header
          as="h1"
          style={{
            paddingLeft: "1em",
            paddingRight: "1em",
            color: "white"
          }}
        >
          श्री अंजनीलाल मंदिर ट्रस्ट ब्यावरा, राजगढ़, मध्य प्रदेश
        </Header>
        <Header
          as="h4"
          style={{
            paddingLeft: "2em",
            paddingRight: "2em",
            color: "white"
          }}
        >
          म.प्र. शासन द्वारा पंजीकृत ट्रस्ट (धर्मिक, सामाजिक, राष्ट्रीय एवं मानव
          हितार्थ कार्यो में अग्रणी संस्था)
        </Header>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
