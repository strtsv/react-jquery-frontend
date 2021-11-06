import React from "react";
import $ from "jquery";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/tmstickup.js";

import i1 from "../assets/images/logo-default-76x22.svg";
import i2 from "../assets/images/logo-default-76x22.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
    });
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    console.log("handleToggle");
    $(".rd-navbar-toggle").toggleClass("active");
    $(".toggle-original-elements").toggleClass("active");
  }
  componentDidMount(){
    console.log("did mount")
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            // className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-mode" !!!!!!!
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-mode"
            data-xs-layout="rd-navbar-mode"
            data-sm-layout="rd-navbar-mode"
            data-md-layout="rd-navbar-mode"
            data-md-device-layout="rd-navbar-mode"
            data-lg-layout="rd-navbar-mode"
            data-lg-device-layout="rd-navbar-mode"
            data-xl-layout="rd-navbar-mode"
            data-xxl-layout="rd-navbar-mode"
            data-xl-device-layout="rd-navbar-mode"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <div className="rd-navbar-brand">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i1}
                        alt
                        width={76}
                        height={22}
                      />
                      <img
                        className="brand-logo-light"
                        src={i2}
                        alt
                        width={76}
                        height={22}
                      />
                    </a>
                  </div>
                  <div className="rd-navbar-center">
                    <p>Available for new projects</p>
                  </div>
                  {}
                  <button
                    onClick={this.handleToggle}
                    className="rd-navbar-toggle toggle-original"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  <div className="rd-navbar-nav-wrap toggle-original-elements">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about-me.html">
                          About me
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="works.html">
                          Works
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="single-project.html"
                            >
                              Single Project
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
