import React from "react";
import "semantic-ui-css/semantic.min.css";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import { graphql } from "gatsby";
import {
  Header,
  Container,
  Grid,
  Image,
  Reveal,
  Card
} from "semantic-ui-react";

const IndexPage = ({ data, image }) => {
  const { frontmatter } = data.markdownRemark;
  image = frontmatter.image;

  return (
    <Layout>
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
          className="columns is-desktop"
          style={{
            display: "flex",
            // height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
            textAlign: "center",
            minWidth: "75vw"
          }}
        >
          <div
            className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                "rgb(81, 39, 75, 0.7) 0.5rem 0px 0px, rgb(81, 39, 75, 0.7) -0.5rem 0px 0px",
              backgroundColor: "rgb(81, 39, 75, 0.7)",
              color: "white",
              lineHeight: "1",
              paddingTop: "1em",
              paddingBottom: "1em"
            }}
          >
            <div className="column">
              <img
                src="/img/logow.png"
                alt="Logo"
                style={{
                  width: "5em",
                  height: "auto"
                }}
              />
            </div>
            <div className="column">
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
                {frontmatter.title}
              </Header>
              <Header
                as="h4"
                style={{
                  paddingLeft: "2em",
                  paddingRight: "2em",
                  color: "white"
                }}
              >
                म.प्र. शासन द्वारा पंजीकृत ट्रस्ट (धर्मिक, सामाजिक, राष्ट्रीय
                एवं मानव हितार्थ कार्यो में अग्रणी संस्था)
              </Header>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <div
          class="service-Main service-Card"
          style={{
            padding: "1.5em",
            margin: "0.5em 0 0.5em 0"
          }}
        >
          {/* <div class="card-Content"> */}
          {/* <img
              class="service-Img"
              src="../img/coffee.png"
              alt=""
              width="130em"
            /> */}
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header
                  as="h2"
                  color="teal"
                  className="title"
                  style={{
                    padding: "0.5em 0em 0.5em 0em"
                  }}
                >
                  <span>{frontmatter.mainpitch.title}</span>
                </Header>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" color="brown" className="subtitle">
                  {frontmatter.mainpitch.description}
                </Header>
                <div class="card-Buttons">
                  <a class="cfa-Button cfa-Button-G" href="/mandir">
                    Know More
                  </a>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          {/* </div> */}
        </div>
      </Container>
      <Container fluid>
        <Grid divided="vertically">
          <Grid.Row columns={3}>
            <Grid.Column
              style={{
                padding: "0px",
                border: "solid 5px",
                transform: "skew(-5deg, 0)",
                marginLeft: "-20px",
                borderColor: "white"
              }}
            >
              <Card
                href="/blog/2015-04-15-rammandir/"
                style={{ width: "100%" }}
              >
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <Image
                      src={
                        !!frontmatter.hero.image1.image.childImageSharp
                          ? frontmatter.hero.image1.image.childImageSharp.fluid
                              .src
                          : frontmatter.hero.image1.image
                      }
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "50vh",
                        width: "100vw",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={
                        !!frontmatter.hero.image1.imageb.childImageSharp
                          ? frontmatter.hero.image1.imageb.childImageSharp.fluid
                              .src
                          : frontmatter.hero.image1.imageb
                      }
                      style={{
                        //   display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "50vh",
                        width: "100vw",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </Reveal.Content>
                </Reveal>
              </Card>
            </Grid.Column>
            <Grid.Column
              style={{
                padding: "0px",
                border: "solid 5px",
                transform: "skew(-5deg, 0)",
                borderColor: "white"
              }}
            >
              <Card
                href="/blog/2015-04-15-anjanilalmandir/"
                style={{ width: "100%" }}
              >
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <Image
                      src={
                        !!frontmatter.hero.image2.image.childImageSharp
                          ? frontmatter.hero.image2.image.childImageSharp.fluid
                              .src
                          : frontmatter.hero.image2.image
                      }
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "50vh",
                        width: "100vw",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={
                        !!frontmatter.hero.image2.imageb.childImageSharp
                          ? frontmatter.hero.image2.imageb.childImageSharp.fluid
                              .src
                          : frontmatter.hero.image2.imageb
                      }
                      style={{
                        //   display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "50vh",
                        width: "100vw",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </Reveal.Content>
                </Reveal>
              </Card>
            </Grid.Column>
            <Grid.Column
              style={{
                padding: "0px",
                border: "solid 5px",
                transform: "skew(-5deg, 0)",
                marginRight: "-20px",
                borderColor: "white"
              }}
            >
              <Card
                href="/blog/2015-04-15-shivmandir/"
                style={{ width: "100%" }}
              >
                <Reveal animated="fade">
                  <Reveal.Content visible>
                    <Image
                      src={
                        !!frontmatter.hero.image3.image.childImageSharp
                          ? frontmatter.hero.image3.image.childImageSharp.fluid
                              .src
                          : frontmatter.hero.image3.image
                      }
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "50vh",
                        width: "100vw",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      src={
                        !!frontmatter.hero.image3.imageb.childImageSharp
                          ? frontmatter.hero.image3.imageb.childImageSharp.fluid
                              .src
                          : frontmatter.hero.image3.imageb
                      }
                      style={{
                        //   display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        height: "50vh",
                        width: "100vw",
                        objectFit: "cover",
                        objectPosition: "center"
                      }}
                    />
                  </Reveal.Content>
                </Reveal>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row
            columns={3}
            style={{
              textAlign: "center",
              marginTop: "-30px"
            }}
          >
            <Grid.Column style={{ padding: "0px 20px 10px 20px" }}>
              <Header as="h4">{frontmatter.hero.image1.alt}</Header>
            </Grid.Column>
            <Grid.Column style={{ padding: "0px 20px 10px 20px" }}>
              <Header as="h4">{frontmatter.hero.image2.alt}</Header>
            </Grid.Column>
            <Grid.Column style={{ padding: "0px 20px 10px 20px" }}>
              <Header as="h4">{frontmatter.hero.image3.alt}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container
        fluid
        style={{
          // backgroundColor: "rgb(245, 243, 242)"
          padding: "1em"
        }}
      >
        <hr />
        <Header as="h3" className="has-text-weight-semibold is-size-2">
          नवीन लेख
        </Header>
        <BlogRoll />
        <div className="column is-12 has-text-centered">
          <div class="card-Buttons">
            <a class="cfa-Button cfa-Button-G" href="/blog">
              Read More
            </a>
          </div>
        </div>
      </Container>
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
  query IndexPageTemp {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              src
            }
          }
        }
        cover_image {
          childImageSharp {
            fluid(maxWidth: 240, quality: 64) {
              src
            }
          }
        }
        mainpitch {
          title
          description
        }
        hero {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  src
                }
              }
            }
            imageb {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  src
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  src
                }
              }
            }
            imageb {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  src
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  src
                }
              }
            }
            imageb {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
