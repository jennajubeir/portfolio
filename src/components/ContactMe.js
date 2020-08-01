import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "../styles/Banner.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Row,
  Button,
  Icon,
} from "semantic-ui-react";
import "../styles/ContactMe.css";

const ContactMe = () => {
  return (
    <div>
      <h1 className="welcome"> let's connect </h1>
      <p className="introduction">
        Please send me an email or check out Linkedin or Github to see more of
        my work!
      </p>
      <div id="icons">
        <Icon
          className="i"
          size="large"
          link
          name="linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/jenna-jubeir-1a3b69185/")
          }
        ></Icon>
        <Icon
          size="large"
          className="i"
          onClick={() => window.open("https://github.com/jennajubeir")}
          link
          name="github"
        ></Icon>
        <Icon
          size="large"
          className="i"
          onClick={() =>
            window.open("mailto:jennajubeir2021@u.northwestern.edu")
          }
          link
          name="mail"
        ></Icon>
      </div>
    </div>
  );
};
export default ContactMe;
