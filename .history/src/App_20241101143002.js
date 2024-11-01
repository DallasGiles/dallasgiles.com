import "./App.css";
import Header from "./Components/Nav/Header";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ReactGA from "react-ga";

function App() {
  // useEffect(() => {
  //   ReactGA.initialize("UA-204992447-1");
  // }, []);

  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Header />
          <Landing />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Route>
      </Router>
    </div>
  );
}

export default App;