import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Header, Container } from "semantic-ui-react";

const PageHero = ({ imagePath, heading }) => {
  imagePath = JSON.stringify(imagePath);
  imagePath = JSON.parse(imagePath);
  console.log(imagePath);
  return (
    <Container fluid>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('` + imagePath + `')`,
          textAlign: "center"
        }}
      >
        <Header
          as="h1"
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow:
              "rgb(81, 39, 75, 0.7) 0.5rem 0px 0px, rgb(81, 39, 75, 0.7) -0.5rem 0px 0px",
            backgroundColor: "rgb(81, 39, 75, 0.7)",
            color: "white",
            padding: "1rem"
          }}
        >
          {heading}
        </Header>
      </div>
    </Container>
  );
};

export default PageHero;
