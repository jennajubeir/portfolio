import React, { useState, useEffect, useContext } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Search,
  Grid,
  Header,
  Segment,
  Icon,
  Divider,
  Accordion,
  List,
  Form,
  Input,
  Menu,
  Button,
  Card,
  Image,
} from "semantic-ui-react";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <h1 className="welcome">Hi, my name is Jenna Jubeir!</h1>
      <p className="introduction">
        I study computer science & chemistry at Northwestern University and am
        interested in product management and product design.
      </p>
      <div class="ui center aligned container" id="outer">
        <Button className="card">
          <h1 className="desc">check out my projects</h1>
        </Button>
        <Button className="card">
          <h1 className="desc">take a look at my resume</h1>
        </Button>
        <Button className="card">
          <h1 className="desc">learn more about me</h1>
        </Button>

        <Button className="card">
          <h1 className="desc">contact me</h1>
        </Button>
      </div>
    </div>
  );
};
export default Homepage;
