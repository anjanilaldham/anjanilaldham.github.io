import React from "react";
import "semantic-ui-css/semantic.min.css";
import Layout from "../../components/Layout";
import BlogRollFull from "../../components/BlogRollFull";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('/img/Parallax_01.jpg')`
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow:
                      "rgb(81, 39, 75, 0.7) 0.5rem 0px 0px, rgb(81, 39, 75, 0.7) -0.5rem 0px 0px",
                    backgroundColor: "rgb(81, 39, 75, 0.7)",
                    color: "white",
                    padding: "1rem"
                  }}
                >
                  Latest Stories
                </h1>
              </div>
            </div>
            <BlogRollFull />
          </div>
        </section>
      </Layout>
    );
  }
}
