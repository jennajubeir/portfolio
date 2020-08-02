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
import ex from "../ex.jpg";
const Projects = () => (
  <div>
    <h1 className="title">my projects</h1>
    <div class="ui center aligned container" id="outer">
      <Grid centered id="container">
        <Grid.Column className="column" mobile={16} tablet={8} computer={5}>
          <Card className="card">
            <Image src={ex} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Project name</Card.Header>
              <Card.Meta>date</Card.Meta>
              <Card.Description> description </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>boxes with skills</a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="column" mobile={16} tablet={8} computer={5}>
          <Card className="card">
            <Image src={ex} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Project name</Card.Header>
              <Card.Meta>date</Card.Meta>
              <Card.Description>brief description </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>boxes with skills</a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="column" mobile={16} tablet={8} computer={5}>
          <Card className="card">
            <Image src={ex} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Project name</Card.Header>
              <Card.Meta>date</Card.Meta>
              <Card.Description>brief description </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>boxes with skills</a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="column" mobile={16} tablet={8} computer={5}>
          <Card className="card">
            <Image src={ex} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Project name</Card.Header>
              <Card.Meta>date</Card.Meta>
              <Card.Description>brief description </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>boxes with skills</a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="column" mobile={16} tablet={8} computer={5}>
          <Card className="card">
            <Image src={ex} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Project name</Card.Header>
              <Card.Meta>date</Card.Meta>
              <Card.Description>brief description </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>boxes with skills</a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="column" mobile={16} tablet={8} computer={5}>
          <Card className="card">
            <Image src={ex} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Project name</Card.Header>
              <Card.Meta>date</Card.Meta>
              <Card.Description>brief description </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>boxes with skills</a>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column className="column" mobile={16} tablet={8} computer={5}>
          <Card className="card">
            <Image src={ex} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Project name</Card.Header>
              <Card.Meta>date</Card.Meta>
              <Card.Description>brief description </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>boxes with skills</a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  </div>
);

export default Projects;
