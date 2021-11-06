import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic section-collapse">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9 col-xl-7 col-xl-6">
              <p>
                Let's start a project together, do not hesitate to{" "}
                <a className="button button-link" href="contacts.html">
                  <span>Contact me</span>
                </a>
              </p>
              <ul className="social-icon-list">
                <li>
                  <a className="soc-icon fa-facebook-f" href="#" />
                </li>
                <li>
                  <a className="soc-icon fa-instagram" href="#" />
                </li>
                <li>
                  <a className="soc-icon fa-behance" href="#" />
                </li>
                <li>
                  <a className="soc-icon fa-dribbble" href="#" />
                </li>
                <li>
                  <a className="soc-icon fa-whatsapp" href="#" />
                </li>
              </ul>
            </div>
          </div>
          <p className="rights">
            <span>©  </span>
            <span className="copyright-year" />
            <span> </span>
            <span>HawkDev</span>
            <span>. </span>
            <a href="privacy-policy.html">Privacy Policy</a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
