import React from "react";

import Header from "../components/Header";
import Mailform from "../components/Contacts/Mailform";
import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div className="page animated">
      <Header />
      <Mailform />
      <Footer />
    </div>
  );
};

export default Contacts;
