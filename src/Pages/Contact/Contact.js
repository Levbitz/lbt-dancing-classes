import React from "react";
import MyForm from "../../Components/Form/MyForm";
import PageTops from "../../Components/PageTops/PageTops";
import "./Contact.css";
import Showcase from "../../Components/Showcase/Showcase";

function Contact() {
  return (
    <>
      <PageTops
        title="Contact Us"
        subtitle=" Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
      />
      <div
        style={{
          background: "#e8eaf6",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <MyForm />
      </div>
      <Showcase
        style={{ width: "100%" }}
        fluid={false}
        className="row  "
        title="Dance With Me Now"
        highLight="Learning To Dance Has Never been Easy Before"
      />
    </>
  );
}

export default Contact;
