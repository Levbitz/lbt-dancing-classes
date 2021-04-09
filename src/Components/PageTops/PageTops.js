import React from "react";
import "./PageTops.css";

function PageTops({ title, subtitle }) {
  return (
    <div className="tops_wrapper">
      <h2 className="tops_title">{title}</h2>
      <p className="tops_paragraphs">{subtitle}</p>
    </div>
  );
}

export default PageTops;
