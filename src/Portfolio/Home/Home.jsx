import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contacts from "./Contacts";
import Divider from "./Divider";
import Portfolio from "./PortfolioSec/Portfolio";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Divider />
      <About />
      <Services />
      <Portfolio />
      <Contacts />
    </div>
  );
};

export default Home;
