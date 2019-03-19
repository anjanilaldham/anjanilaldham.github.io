import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";
import "semantic-ui-css/semantic.min.css";
import { Header } from "semantic-ui-react";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-light"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container is-fluid">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Header as="h4">श्री अंजनी लाल मंदिर धाम</Header>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/mandir">
                <Header as="h4">मंदिर</Header>
              </Link>
              {/* <Link className="navbar-item" to="/">
                <Header as="h4">उपलब्धिया</Header>
              </Link> */}
              <Link className="navbar-item" to="/blog">
                <Header as="h4">लेख</Header>
              </Link>
              <Link
                className="navbar-item"
                to="/blog/2015-04-20-mandir-history"
              >
                <Header as="h4">इतिहास</Header>
              </Link>
              <Link className="navbar-item" to="/about">
                <Header as="h4">सदस्य गड़</Header>
              </Link>
              <Link className="navbar-item" to="/contact">
                <Header as="h4">संपर्क सूत्र</Header>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
