import React from "react";

//component imports
import Homepage from "./components/Homepage";
import Banner from "../src/components/Banner";
import Projects from "../src/components/Projects";
import AboutMe from "../src/components/AboutMe";
import ContactMe from "../src/components/ContactMe";

//firebase imports

//react + css

//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Banner></Banner>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contactme" exact component={ContactMe} />
        <Route path="/aboutme" exact component={AboutMe} />
      </Switch>
    </Router>
  );
};

export default App;
