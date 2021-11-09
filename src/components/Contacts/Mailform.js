import React from "react";

class Mailform extends React.Component {
  render() {
    return (
      <section className="section bg-white section-custom section-collapse">
        <div className="container">
          <div className="box-contact-info">
            <h2>Get in touch</h2>
            <h5>4765 Bartlett Avenue, Westland, MI</h5>
            <div className="contact-info-phone">
              <a href="tel:#">+1(256)10 87 000</a>
            </div>
            <a className="button button-link button-link-sm" href="mailto:#">
              <span>info@demolink.org</span>
            </a>
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
      </section>
    );
  }
}

export default Mailform;
