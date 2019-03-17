import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";
import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";

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
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: "88px" }} /> */}
              <Menu.Item header>श्री अंजनी लाल मंदिर धाम</Menu.Item>
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
            <div className="navbar-start has-text-centered">
              {/* <Dropdown
                item
                text="मंदिर"
                className="navbar-item"
                style={{ top: "0px" }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item>श्री अंजनीलाल मंदिर</Dropdown.Item>
                  <Dropdown.Item>श्री राम मंदिर</Dropdown.Item>
                  <Dropdown.Item>
                    श्री व्दादशज्योतिर्लिगेश्वर महादेव मंदिर
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <Link className="navbar-item" to="/about">
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
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  {/* <img src={github} alt="Github" /> */}
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
