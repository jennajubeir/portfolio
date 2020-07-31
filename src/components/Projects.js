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
} from "semantic-ui-react";
import "../styles/Projects.css";

const Projects = () => (
  <div>
    <h1 className="title">my projects</h1>
    <Grid container id="container">
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Project name</Card.Header>
            <Card.Meta>date</Card.Meta>
            <Card.Description>brief description </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              boxes with skills
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Project name</Card.Header>
            <Card.Meta>date</Card.Meta>
            <Card.Description>brief description </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              boxes with skills
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={8} computer={5}>
        <Card>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Project name</Card.Header>
            <Card.Meta>date</Card.Meta>
            <Card.Description>brief description </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              boxes with skills
            </a>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  </div>
);

export default Projects;
