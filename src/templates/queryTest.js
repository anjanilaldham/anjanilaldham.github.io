import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { Container, Card, Reveal, Image, CardHeader } from "semantic-ui-react";
// import testImg from "../img/Slide_01_Ram_Mandir.jpg";
// import testImgBW from "../img/Slide_01_Ram_MandirBW.jpg";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import "semantic-ui-css/semantic.min.css";
// import RamMandir from "../img/Slide_01_Ram_Mandir.jpg";
// import RamMandirBW from "../static/img/Slide_01_Ram_MandirBW.jpg";

const CardTemplate = ({ imageC, imageBW, heading }) => (
  <Card
    style={{ minHeight: "0em", margin: "60" }} //"url(" + RamMandir + ")"
  >
    <Reveal animated="fade">
      <Reveal.Content visible>
        <Image
          src={imageC}
          style={{
            //   display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            height: "70vh",
            width: "100vw",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </Reveal.Content>
      <Reveal.Content hidden>
        <Image
          src={imageBW}
          style={{
            //   display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            height: "70vh",
            width: "100vw",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </Reveal.Content>
    </Reveal>
    <CardHeader
      style={{
        fontWeight: "800",
        fontSize: "20px",
        backgroundColor: "white",
        textAlign: "center",
        paddingBottom: "10px",
        marginTop: "-10px"
      }}
    >
      {heading}
    </CardHeader>
  </Card>
);

const headings = [
  "भगवान श्री राम मन्दिर",
  "निर्माणाधीन भगवान श्री अंजनीलाल मंदिर",
  "भगवान व्दादशज्योतिर्लिगेश्वर महादेव मन्दिर"
];

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div
        style={{
          display: "flex",
          // height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(81, 39, 75, 0.7) 0.5rem 0px 0px, rgb(81, 39, 75, 0.7) -0.5rem 0px 0px",
            backgroundColor: "rgb(81, 39, 75, 0.7)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          ।। जय श्री राम ।। जय श्री अंजनीलाल ।। ॐ नमः शिवाय ।।
        </h3>
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              "rgb(81, 39, 75, 0.7) 0.5rem 0px 0px, rgb(81, 39, 75, 0.7) -0.5rem 0px 0px",
            backgroundColor: "rgb(81, 39, 75, 0.7)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              "rgb(81, 39, 75, 0.7) 0.5rem 0px 0px, rgb(81, 39, 75, 0.7) -0.5rem 0px 0px",
            backgroundColor: "rgb(81, 39, 75, 0.7)",
            color: "white",
            lineHeight: "1",
            padding: "0.25em"
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Container fluid>
      <Card.Group stackable itemsPerRow={3}>
        <CardTemplate
          // imageC={testImg}
          // imageBW={testImgBW}
          heading={headings[0]}
        />
      </Card.Group>
    </Container>
  </div>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
