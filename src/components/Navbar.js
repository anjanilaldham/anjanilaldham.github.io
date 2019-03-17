import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";
import "semantic-ui-css/semantic.min.css";

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
              श्री अंजनी लाल मंदिर धाम
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
              <Link className="navbar-item" to="#">
                मंदिर
              </Link>
              <Link className="navbar-item" to="/about">
                उपलब्धिया
              </Link>
              <Link className="navbar-item" to="/products">
                गतिविधिया
              </Link>
              <Link className="navbar-item" to="/blog">
                इतिहास
              </Link>
              <Link className="navbar-item" to="/contact">
                सदस्य गड़
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                संपर्क सूत्र
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
