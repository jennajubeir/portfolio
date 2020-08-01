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
import ex from "../ex.jpg";

const Homepage = () => {
  return (
    <div>
      <h1 className="welcome">Hi, my name is Jenna Jubeir!</h1>
      <p className="introduction">
        I study computer science & chemistry student at Northwestern University
        and am interested in product management and product design.
      </p>
      <div class="ui center aligned container" id="outer">
        <Grid centered id="container">
          <Grid.Column className="column" mobile={16} tablet={8} computer={4}>
            <Card className="card">
              <Image src={ex} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Check out my projects</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="column" mobile={16} tablet={8} computer={4}>
            <Card className="card">
              <Image src={ex} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Take a look at my resume</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="column" mobile={16} tablet={8} computer={4}>
            <Card className="card">
              <Image src={ex} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Learn more about me</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className="column" mobile={16} tablet={8} computer={4}>
            <Card className="card">
              <Image src={ex} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Contact me</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};
export default Homepage;
