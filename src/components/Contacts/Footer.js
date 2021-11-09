import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section section-xl bg-white section-collapse text-center">
        <div className="container">
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
