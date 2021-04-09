import React from "react";

import Showcase from "../../Components/Showcase/Showcase";

import Underline from "../../Components/Underline/Underline";

import "./Home.css";
import About from "../../Sections/About/About";
import Faqs from "../../Sections/Faqs/Faqs";
import Subscription from "../../Components/Subscription/Subscription";

function Home() {
  return (
    <>
      <Showcase
        style={{ width: "100%" }}
        fluid={true}
        className="row flex-row-reverse  "
        title="We Will Rock You Every Day"
        highLight=""
      />

      <About />
      <Faqs />

      <Showcase
        style={{ width: "100%" }}
        fluid={false}
        className="row  "
        title="Dance With Me Now"
        highLight="Learning To Dance Has Never been Easy Before"
      />
      <Underline />
      <Subscription />
    </>
  );
}

export default Home;
