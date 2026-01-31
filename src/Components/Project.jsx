import React from "react";
import {NotebookPen} from 'lucide-react'

const Project = () => {
  return (
    <div className="inner-project">
      <h1>Projects</h1>
      <ul>
        <li>E-Comm Website intrigrated with AI chat bot</li>
        <li>Falk - A Social Media App</li>
        <li>Counter App</li>
        <li>User Admin Dashboard for Trading App</li>
        <button type="button">
          <NotebookPen className="icon" />
          Veiw Case Study
        </button>
      </ul>
    </div>
  );
};

export default Project;
