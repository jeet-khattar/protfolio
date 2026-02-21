import React from "react";
import {GraduationCap, LaptopMinimalCheck, Briefcase} from 'lucide-react'

const About = () => {
  return (
    <div className="inner-about">
      <h1>About Me</h1>
      <ul>
        <li>
          <GraduationCap className="icon me-1" />
          Computer engineering Diploma
        </li>
        <li>
          <LaptopMinimalCheck className="icon me-1" />
          Frontend Development Course
        </li>
        <li>
          <Briefcase className="icon me-1" />
          Build Real Projects
        </li>
        {/* <button type="button">View Resume</button> */}
      </ul>
    </div>
  );
};

export default About;
