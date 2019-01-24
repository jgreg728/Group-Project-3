
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Search from "./Components/pages/Search";
import Contact from "./Components/pages/Contact";



//const App = () =>{}

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} />
       
   
       
      </div>
    </Router>
  );
}

export default App;