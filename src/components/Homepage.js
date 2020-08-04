import React, { useState, useEffect, useContext } from "react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import "../styles/Homepage.css";
import Pdf from "../images/JJ_Resume.pdf";
const Homepage = () => {
  return (
    <div>
      <h1 className="welcome">Hi, my name is Jenna Jubeir!</h1>
      <p className="introduction">
        I study computer science & chemistry at Northwestern University and am
        interested in product management and product design.
      </p>
      <div class="ui center aligned container" id="outer">
        <Button
          className="card"
          onClick={() => (window.location.href = "/projects")}
        >
          <h1 className="desc">check out my projects</h1>
        </Button>
        <Button className="card" onClick={() => window.open(Pdf)}>
          <h1 className="desc">take a look at my resume</h1>
        </Button>
        <Button
          className="card"
          onClick={() => (window.location.href = "/aboutme")}
        >
          <h1 className="desc">learn more about me</h1>
        </Button>
      </div>
    </div>
  );
};
export default Homepage;
