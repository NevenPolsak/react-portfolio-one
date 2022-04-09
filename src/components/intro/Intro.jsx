import React from "react";
import "./Intro.css";
import Img from "../../img/intro-img.png";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-text">Hello, My name is</h2>
          <h1 className="intro-name">John Doe</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Photographer</div>
              <div className="intro-title-item">Writer</div>
              <div className="intro-title-item">Content Creator</div>
            </div>
          </div>
          <p className="intro-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem
            doloribus, ullam, deleniti rem necessitatibus quisquam ad iste enim
            natus soluta voluptatum inventore? Quod, repellendus expedita?
            Repudiandae ducimus maxime itaque?
          </p>
        </div>
   
      </div>
      <div className="intro-right">
        <div className="intro-bg"></div>
        <img src={Img} alt="" className="intro-img" />
      </div>
    </div>
  );
}

export default Intro;
