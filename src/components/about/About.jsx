import React from "react";
import "./About.css";
import award from "../../img/award.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            className="about-img"
            src="https://images.unsplash.com/photo-1609607847926-da4702f01fef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          eligendi excepturi quis vero ullam consequuntur aut ut, tempora optio
          soluta quas quisquam tenetur eum asperiores aliquam debitis. Minus,
          officia alias!
        </p>
<div className="about-award">
<img className="about-award-img" src={award} />
<div className="about-award-text">
    <h4 className="about-award-title">International Design</h4>
    <div className="about-award-desc">
        Tempora expedita iste accusantium pariatur laborum fugit dolorem labore in animi.
    </div>
</div>
</div>
        

      </div>
    </div>
  );
}

export default About;
