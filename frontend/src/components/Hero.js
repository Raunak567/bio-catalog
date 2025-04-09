import React from 'react';
import "../assets/styles.css";
import NavBar from './NavBar';
import { AiOutlineGithub } from "react-icons/ai";
import image1 from "../assets/img/mint-punk.png";
function Hero() {
    return (
        <section className='hero'>
            <NavBar />
            
            <div className="caption">
  <div className="caption-inner">
  <p className="text-center" style={{ color: "#fff", fontSize: "20px" }}>   
                <img src={image1} className="mint-img" alt="" />        
              Mint, Stake And Earn Rewards With Your SuperCrypto
            </p>
    <button className="btn btn-danger" style={{ color: "#000" }}>
      Generate Token
    </button>
    <a href="/mint-page">
      <button className="btn btn-danger" style={{ color: "#000" }}>
        Mint Now
      </button>
    </a>
  </div>

</div>

        </section>
    )
}

export default Hero
