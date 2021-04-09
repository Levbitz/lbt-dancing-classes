import React from "react";
import Accodion from "../../Components/Accodion/Accodion";

function Faqs() {
  return (
    <div
      style={{
        background: "#e8eaf6",
        paddingTop: "30px",
        paddingBottom: "30px",
      }}
    >
      <h2 className="text-center">Frequently Asked Questions</h2>
      <Accodion
        title="What is Rock-Up?
"
      />
      <Accodion
        title="How much does Rock-Up cost?
"
      />
      <Accodion title="How to join Rock-Up?" />
      <Accodion title="Benifits of joining Rock-Up" />
      <Accodion title="How to donate to Rock-Up" />
    </div>
  );
}

export default Faqs;
