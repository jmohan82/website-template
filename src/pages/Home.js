import React from "react";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Services from "../components/Services";
import PlayBook from "../components/Playbook/PlayBook";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <PlayBook />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
