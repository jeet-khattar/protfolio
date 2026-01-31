import React from "react";
import {
  LayoutTemplate,
  FingerprintPattern,
  Gauge,
  GraduationCap,
  LaptopMinimalCheck,
  Briefcase,
  Linkedin,
  ChevronDown,
  NotebookPen,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import Intro from "../Components/Intro";
import Project from "../Components/Project";
import Services from "../Components/Services";
import About from "../Components/About";
import Testimonials from "../Components/Testimonials";
import Contactme from "../Components/Contactme";
import Social from "../Components/Social";
const Grid = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="intro">
         <Intro/>
        </div>
        <div className="project">
          <Project/>
        </div>
        <div className="service">
          <Services/>
        </div>
        <div className="about">
         <About/>
        </div>
        <div className="testimonials">
         <Testimonials/>
        </div>
        <div className="contactme">
          <Contactme/>
        </div>
        <div className="social">
         <Social/>
        </div>
      </div>
    </div>
  );
};

export default Grid;
