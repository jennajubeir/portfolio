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
  Image,
  Icon,
} from "semantic-ui-react";
import jenna from "../../src/jenna.jpg";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <Container>
      <h1 className="welcome"> let's get to know each other </h1>
      <div class="ui center aligned container" id="aouter">
        <div className="am">
          <p>
            It is so nice to meet you! My name is Jenna. I am from Washington,
            DC, and I think the most defining characteristic of that is my
            absolute love for the air and space museum.
          </p>
          <p>
            In my free time I love hiking and eating ice cream, with most
            sundays filled with both. Ice cream takes up most of my sweet tooth,
            but I also like to bake, and overfeed my mother with all sorts of
            cakes and cupcakes.
          </p>
          <p></p>
        </div>
        <img id="me" class="ui centered medium image" src={jenna}></img>
      </div>
    </Container>
  );
};
export default AboutMe;
