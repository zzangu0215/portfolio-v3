import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Logo from "./Logo/Logo";
import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

export default function PortfolioContainer() {
  return (
    <Router>
      <Logo />
      <Menu />
      <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
