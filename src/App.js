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
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollTop/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigationbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/about-us" component={About} />

        <Route path="/contact-us" component={Contact} />

        <Route path="/my-account" component={Account} />

        <Route path="/our-history" component={OurHistory} />

        <Route path="/our-team" component={OurTeam} />
        <Route component={OurTeam} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
