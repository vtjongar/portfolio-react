import React from "react";
import LandingPage from "./landingpage";
import { Switch, Route } from "react-router";
import About from "./about";
import Contact from "./contact";
import Work from "./work";


const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/work" component={Work} />
     
    </Switch>
  );
};

export default Main;
