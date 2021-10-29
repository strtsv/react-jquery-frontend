import React from "react";

import Header from "../components/Header";
import Content from "../components/About/Content";
import FewWords from "../components/About/FewWords";
import Team from "../components/About/Team";
import Qualified from "../components/About/Qualified";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="page animated">
      <Header />
      <Content />
      <FewWords />
      <Team />
      <Qualified />
      <Footer />
    </div>
  );
};

export default About;
