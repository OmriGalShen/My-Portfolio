import React from "react";
import "./Resume.css";
import Education from "./description/Education";
import Certifications from "./description/Certifications";
import Skills from "./description/Skills";
import Languages from "./description/Languages";
import Military from "./description/Military";

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
