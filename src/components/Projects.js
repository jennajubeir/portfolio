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
  Card,
  Image,
  Label,
} from "semantic-ui-react";
import "../styles/Projects.css";
import nodi from "../images/NODI.png";
import tunepad from "../images/TUNEPAD.png";
import peerpal from "../images/PEERPAL.png";
import elcare from "../images/ELCARE.png";
import itemshare from "../images/itemshare.png";
import fyf from "../images/fyf.png";
import sw from "../images/safetywatch.png";
const Projects = () => (
  <div>
    <h1 className="title">my projects</h1>
    <div class="ui center aligned container" id="pouter">
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/projects")}
      >
        <img class="ui centered medium image" src={peerpal}></img>
        <h1 className="pdesc">Full Stack Developer</h1>
      </Button>
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/projects")}
      >
        <img class="ui centered medium image" src={nodi}></img>
        <h1 className="pdesc">Co-Founder & Front-End Team Lead</h1>
      </Button>
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/aboutme")}
      >
        <img class="ui centered small image" src={tunepad}></img>
        <h1 className="pdesc">Research Assistant</h1>
      </Button>
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/aboutme")}
      >
        <img class="ui centered small image" src={elcare}></img>
        <h1 className="pdesc">Team Lead</h1>
      </Button>
    </div>
    <div class="ui center aligned container" id="pouter">
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/aboutme")}
      >
        <img class="ui centered medium image" src={fyf}></img>
        <h1 className="pdesc">
          Full Stack Developer & Client Communication Lead
        </h1>
      </Button>
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/aboutme")}
      >
        <img class="ui centered small image" src={itemshare}></img>
        <h1 className="pdesc">Full Stack Developer</h1>
      </Button>
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/aboutme")}
      >
        <img class="ui centered small image" src={sw}></img>
        <h1 className="pdesc">Full Stack Developer</h1>
      </Button>
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/aboutme")}
      >
        <img class="ui centered small image" src={sw}></img>
        <h1 className="pdesc">DTC PROJECT</h1>
      </Button>
    </div>
    <div class="ui center aligned container" id="pouter">
      <Button
        className="pcard"
        onClick={() => (window.location.href = "/aboutme")}
      >
        <img class="ui centered small image" src={sw}></img>
        <h1 className="pdesc">BACKTRACK</h1>
      </Button>
    </div>
  </div>
);

export default Projects;
