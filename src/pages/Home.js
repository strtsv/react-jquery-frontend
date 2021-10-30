import React from "react";

import Header from "../components/Header";
import Slider from "../components/Home/Slider";
import Testimonials from "../components/Home/Testimonials";
import HowWorks from "../components/Home/HowWorks";
import Divider from "../components/Home/Divider";
import Services from "../components/Home/Services";
import Massage from "../components/Home/Massage";
import Price from "../components/Home/Price";
import FAQ from "../components/Home/FAQ";
import Gift from "../components/Home/Gift";
import Vacancy from "../components/Home/Vacancy";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <Slider />
      <Testimonials />
      <HowWorks />
      <Divider />
      <Services />
      <Divider />
      <Massage />
      <Price />
      <FAQ />
      <Gift />
      <Vacancy />
      <Footer />
    </div>
  );
};

export default Home;
