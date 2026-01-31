import React from "react";
import {LayoutTemplate, FingerprintPattern, Gauge} from 'lucide-react'

const Services = () => {
  return (
    <div className="inner-services">
      <h1>Service I Offer</h1>
      <ul>
        <li>
          <LayoutTemplate className="icon" />
          Frontend UI Implementation
        </li>
        <li>
          <FingerprintPattern className="icon" />
          Authentication & Firebase Integration
        </li>
        <li>
          <Gauge className="icon" />
          Website Performance & Clean Code
        </li>
      </ul>
    </div>
  );
};

export default Services;
