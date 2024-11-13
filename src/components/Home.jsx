import React from "react";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav/Nav";
import Reviews from "./Reviews";
import WhatWeDo from "./WhatWeDo";
import CallUsNav from "./CallUsNav";

const Home = () => {
  return (
    <div className="relative">
      <CallUsNav />
      <Nav />
      <Header />
      <WhatWeDo />
      <AboutUs />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
