import React from "react";
import "../Resume.css";
import Education from "./Education";
import Certifications from "./Certifications";
import Skills from "./Skills";
import Languages from "./Languages";
import Military from "./Military";

const Description = () => {
  return (
    <div className="description">
      <Education />
      <Military />
      <Certifications />
      <Skills />
      <Languages />
    </div>
  );
};
export default Description;
