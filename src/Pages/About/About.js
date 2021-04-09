import React from "react";

import PageTops from "../../Components/PageTops/PageTops";

import Showcase from "../../Components/Showcase/Showcase";
import Aboutus from "../../Sections/About/About";

function About() {
  return (
    <>
      <PageTops
        title="About Us"
        subtitle="survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      />
      <Aboutus />
      <Showcase
        style={{ width: "100%" }}
        fluid={true}
        className="row flex-row-reverse  "
        title="We Will Rock You Every Day"
        highLight=""
      />
    </>
  );
}

export default About;
