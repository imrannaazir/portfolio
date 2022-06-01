import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Home;
