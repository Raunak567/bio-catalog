import React from "react";
import "../assets/styles.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <About />
            <Faq />
            <Footer />
        </div>
    )
};
export default Home;
