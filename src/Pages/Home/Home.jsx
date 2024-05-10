import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../Components/Titlecards/TitleCards";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="title" className="caption-img" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            beatae libero sapiente, inventore cupiditate voluptatibus,
            voluptatem earum, dolorum amet quo rerum. Delectus perspiciatis cum,
            reprehenderit minus soluta non dolorem eaque.
          </p>
          <div className="hero-btns">
            <button className="btn"><img src={play_icon} alt="" />Player</button>
            <button className="btn dark-btn"><img src={info_icon} alt="" />More info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-card">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top picks for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
