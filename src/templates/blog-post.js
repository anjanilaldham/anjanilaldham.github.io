import React from "react";
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Container, Header, Card, Grid } from "semantic-ui-react";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  author,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <Container
      id="blog-wapper"
      fluid
      style={{
        padding: "2em 0em 0em 0em",
        backgroundColor: "rgb(253, 253, 253, 0.7)",
        letterSpacing: "0.03em",
        textShadow: "white 0px 0px 2px",
        fontWeight: "500"
      }}
    >
      <Container
        fluid
        style={{
          // minHeight: "100px",
          backgroundColor: "rgba(81, 39, 75, 0.7)",
          padding: "1em 0em 0em 0em"
        }}
      >
        <Header
          as="h1"
          textAlign="center"
          style={{
            padding: "1em 0 1em 0",
            color: "white"
          }}
          className="title is-size-2 has-text-weight-bold is-bold-light"
        >
          {title}
        </Header>
      </Container>
      <section>
        {helmet || ""}

        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column textAlign="left">
                    <Card.Meta>प्रकाशित: {date}</Card.Meta>
                  </Grid.Column>
                  <Grid.Column textAlign="right">
                    <Card.Meta>लेखक: {author}</Card.Meta>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              {/* <p>{description}</p> */}
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        author
      }
    }
  }
`;
