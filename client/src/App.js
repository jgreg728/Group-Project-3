
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Contact from "./components/pages/Contact";
import Form from "./components/pages/Form";




//const App = () =>{}


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/contact" component={Contact} 
        />
         <Route exact path="/form" component={Form} />
        </switch>
       
        
   
       
      </div>
    </Router>
  );
}

export default App;