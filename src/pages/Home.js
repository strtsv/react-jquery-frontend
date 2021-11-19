import React from "react";

import Header from "../components/Header";
import About from "../components/Home/About";
import History from "../components/Home/History";
import Features from "../components/Home/Features";
import Awards from "../components/Home/Awards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <About />
      <History />
      <Features />
      <Awards />
      <Footer />
    </div>
  );
};

export default Home;
