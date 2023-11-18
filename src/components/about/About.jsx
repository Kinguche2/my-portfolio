import React from "react";
import "./about.css";
import Award from "../../img/award.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.pinimg.com/originals/c3/e0/68/c3e068b8563f1cdf9fe830a02539fee2.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a web developer with in-depth experience in UI/UX design and
          back-end web development.
        </p>
        <p className="a-desc">
          I create websites that help organizations address business challenges
          and meet their needs. I manage everything from website navigation and
          layout to a company’s web hosting and security architecture. My
          expertise lies within back-end architecture, front-end web apps, and
          the main languages in my tech stack are JavaScript, React, Python and
          of course HTML/CSS. I am a lifelong learner (currently taking a course
          on building AI chatbots with Python!) and love to read, run, and write
          poems.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Outstanding young leaders award</h4>
            <p className="a-award-desc">
              An award given by the Grafen Oil Integrated Enterprise to young
              and innovative achievers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
