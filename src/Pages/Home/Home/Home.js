import React from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import DentalCare from "../DentalCare/DentalCare";
import Doctors from "../Doctors/Doctors";
import FooterContact from "../FooterContact/FooterContact";
import Services from "../Services/Services";
import Navigation from "../Shared/Navigation/Navigation";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navigation></Navigation>
      <Banner></Banner>
      <Contact></Contact>
      <Services></Services>
      <DentalCare></DentalCare>
      <AppointmentBanner></AppointmentBanner>
      <Doctors></Doctors>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <FooterContact></FooterContact>
    </div>
  );
};

export default Home;
