import React from "react";
import Navigationbar from "./Components/NavigationBar/Navigationbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Account from "./Pages/Account/Account";
import OurHistory from "./Pages/OurHistory/OurHistory";
import OurTeam from "./Pages/OurTeam/OurTeam";

function App() {
  return (
    <Router>
      <Navigationbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/contact-us">
          <Contact />
        </Route>
        <Route path="/my-account">
          <Account />
        </Route>
        <Route path="/our-history">
          <OurHistory />
        </Route>
        <Route path="/our-team">
          <OurTeam />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
