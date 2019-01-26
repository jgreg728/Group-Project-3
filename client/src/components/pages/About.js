import React from "react";
import firework from "./image/firework.jpg";

const styles = {
  hero: {
    backgroundImage: `url(${firework})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "75vh"
  }
};

const About = (props) => {
  return (
    
    <div>
         <div
        className="jumbotron jumbotron-fluid text-center d-flex align-items-center justfy-content-center justify-content-center"
        style={styles.hero}
      ></div>
      <h2>What's good dog? what About ABOUT PAGE</h2>
     <form>
       
     </form>
    </div>
  )
}

export default About;