import React from "react";
// import {NotebookPen} from 'lucide-react'
import { ExternalLink } from "lucide-react";

const Project = () => {
  return (
    <div className="inner-project">
      <h1>Projects</h1>
      <ul>
        <li>
          <a href="https://jeet-khattar.github.io/Animated-website/">GSAP + Locomotive Scroll Animated Webpage<ExternalLink className="icon"/></a>
        </li>
        <li>
          <a href="https://jeet-khattar.github.io/the-w-y-cafe/index.html">Multi-Page Website UI (HTML, CSS)<ExternalLink className="icon"/></a>
        </li>
        <li>
          <a href="">Personal Portfolio Website (React)</a>
        </li>
        {/* <button type="button">
          <NotebookPen className="icon" />
          Veiw Case Study
        </button> */}
      </ul>
    </div>
  );
};

export default Project;
