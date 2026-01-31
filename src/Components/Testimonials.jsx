import React from "react";
import {ChevronDown} from 'lucide-react'

const Testimonials = () => {
  return (
    <div className="inner-testimonals">
      <h1>Testimonials</h1>
      <ul>
        <li>
          Jeet delivers clean UI with attention to detail. His layouts are
          structured and easy to understand.
        </li>
        <li>-Ammy Patel (Ceo, Startup)</li>
        <button type="button">
          <ChevronDown className="icon" />
          Read More Reviews
        </button>
      </ul>
    </div>
  );
};

export default Testimonials;
