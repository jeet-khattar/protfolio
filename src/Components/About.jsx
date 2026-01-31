import React from "react";
import {GraduationCap, LaptopMinimalCheck, Briefcase} from 'lucide-react'

const About = () => {
  return (
    <div className="inner-about">
      <h1>About Me</h1>
      <ul>
        <li>
          <GraduationCap className="icon" />
          Computer engineering Diploma
        </li>
        <li>
          <LaptopMinimalCheck className="icon" />
          Freelancer for 1.5 years
        </li>
        <li>
          <Briefcase className="icon" />
          Past works with startups & e-commerce
        </li>
        <button type="button">View Resume</button>
      </ul>
    </div>
  );
};

export default About;
