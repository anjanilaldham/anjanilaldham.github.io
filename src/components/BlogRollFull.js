import React from "react";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";
import { Link, graphql, StaticQuery } from "gatsby";
import { Card, Grid, Button, Image } from "semantic-ui-react";

class BlogRollFull extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Grid
        columns={2}
        divided="vertically"
        stackable
        // className="columns is-multiline"
      >
        {posts &&
          posts.map(({ node: post }) => (
            <Grid.Column>
              <Card
                // className="is-parent column is-6"
                // className="service-Main service-Card"
                key={post.id}
                style={{
                  // boxShadow: "0 0px 0px 0 #D4D4D2, 0 0 0 0px #d4d4d5"
                  // marginLeft: "2px",
                  // marginRight: "2px"
                  // minHeight: "30vh",
                  padding: "2.5em",
                  minWidth: "40vw",
                  borderRadius: "4px",
                  boxShadow:
                    "0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)",
                  width: "100%"
                }}
              >
                <Image
                  src={
                    !!post.frontmatter.image.childImageSharp
                      ? post.frontmatter.image.childImageSharp.fluid.src
                      : post.frontmatter.image
                  }
                />
                <Card.Content className="">
                  <Card.Header>
                    <Link
                      className="title is-size-4"
                      to={post.fields.slug}
                      style={{
                        color: "rgba(139, 4, 119, 0.8)",
                        textDecoration: "none"
                      }}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span>:</span>
                    <Card.Meta
                      className="subtitle"
                      style={{
                        padding: "0.3em 0 0em 0",
                        fontSize: "0.7em"
                      }}
                    >
                      {post.frontmatter.date}
                    </Card.Meta>
                    <Card.Meta
                      className="subtitle"
                      style={{
                        padding: "0.0em 0 0em 0",
                        fontSize: "0.7em",
                        fontWeight: "800"
                      }}
                    >
                      {post.frontmatter.author}
                    </Card.Meta>
                  </Card.Header>
                  <Card.Description>
                    {post.frontmatter.description}
                    <br />
                    <br />
                    <Button
                      basic
                      content="blue"
                      color="blue"
                      href={post.fields.slug}
                      style={
                        {
                          // padding: "0.3em 0 0.5em 0"
                        }
                      }
                    >
                      Keep Reading →
                    </Button>
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
      </Grid>
    );
  }
}

BlogRollFull.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollFullQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                image {
                  childImageSharp {
                    fluid(maxWidth: 526, quality: 92) {
                      src
                    }
                  }
                }
                title
                description
                templateKey
                date(formatString: "MMMM DD, YYYY")
                author
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRollFull data={data} count={count} />}
  />
);
