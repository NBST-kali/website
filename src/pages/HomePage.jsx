import React from "react";
import Hero from "./../components/module/home/Hero";
import HeroServices from "../components/module/home/HeroServices";
import HeroWorks from "../components/module/home/HeroWorks";
import HomeClients from "../components/module/home/HomeClients";
import HomeTestimonial from "../components/module/home/HomeTestimonial";
import HomeBlog from "../components/module/home/HomeBlog";
import Testimonials from "../components/module/home/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HeroServices />
      <HeroWorks />
      <Testimonials />
      <HomeClients />
      <HomeTestimonial />
      <HomeBlog />
    </div>
  );
};

export default HomePage;
