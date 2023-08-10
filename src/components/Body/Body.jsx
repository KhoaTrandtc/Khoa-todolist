import "./Body.css";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import video1 from "../../assets/video/1.mp4";
import video2 from "../../assets/video/2.mp4";
import video3 from "../../assets/video/3.mp4";
import video4 from "../../assets/video/4.mp4";
import video5 from "../../assets/video/5.mp4";
import Container from "../Container/Container";
const Body = () => {
  const [activeStates, setActiveStates] = useState(0);

  const handleElementClick = (index) => {
    // Only toggle if the clicked index is different from the current activeStates value
    if (index !== activeStates) {
      setActiveStates(index);
    }
  };

  return (
    <main className="home">
      <video
        className={`video-slide ${activeStates === 0 ? "active" : ""}`}
        src={video1}
        autoPlay
        muted
        loop
      ></video>
      <video
        className={`video-slide ${activeStates === 1 ? "active" : ""}`}
        src={video2}
        autoPlay
        muted
        loop
      ></video>
      <video
        className={`video-slide ${activeStates === 2 ? "active" : ""}`}
        src={video3}
        autoPlay
        muted
        loop
      ></video>
      <video
        className={`video-slide ${activeStates === 3 ? "active" : ""}`}
        src={video4}
        autoPlay
        muted
        loop
      ></video>
      <video
        className={`video-slide ${activeStates === 4 ? "active" : ""}`}
        src={video5}
        autoPlay
        muted
        loop
      ></video>

      <div className="media-icons">
        <a href="https://www.facebook.com/trankhoatckt">
          {" "}
          <FaFacebookF />{" "}
        </a>
        <a href="https://www.instagram.com/khoatrandtc/?hl=vi">
          {" "}
          <FaInstagram />{" "}
        </a>
        <a href="https://twitter.com/Trankhoatckt">
          {" "}
          <FaTwitter />{" "}
        </a>
      </div>

      <div className="Word-icon">
        <div className="large-word">Todolist~</div>
      </div>

      

      <Container
        activeStates={activeStates}
        handleElementClick={handleElementClick}
      />
    </main>
  );
};

export default Body;
