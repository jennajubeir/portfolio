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
} from "semantic-ui-react";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <h1 className="welcome">hi, my name is Jenna Jubeir!</h1>
      <p className="introduction">
        I study computer science & chemistry student at Northwestern University
        and am interested in product management and product design.
      </p>
    </div>
  );
};
export default Homepage;
