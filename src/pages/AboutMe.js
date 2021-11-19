import React from "react";

import Header from "../components/Header";
import About from "../components/AboutMe/About";
import Content from "../components/AboutMe/Content";
import Work from "../components/AboutMe/Work";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="page animated">
      <Header />
      <About />
      <Content />
      <Work />
      <Footer />
    </div>
  );
};

export default AboutMe;
