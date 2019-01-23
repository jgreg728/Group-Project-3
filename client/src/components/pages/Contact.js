import React from "react";
import { link, Route } from "react-router-dom";
import adult from "./image/adult-business-chill-450271.jpg";
//import Learn from "./Learn";

const styles = {
  hero: {
    backgroundImage: `url(${adult})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "75vh"
  }
};

const Contact = props => {
  console.log(props);
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid text-center d-flex align-items-center justfy-content-center justify-content-center"
        style={styles.hero}
      ></div>
      <h1>Contact Page</h1>
      <p>
        what in the hell is happing to me!...jdspijcbadsihnacdh
        ojrfvnvflnsdvfncd show me  what to do when I do ....WHAT???? I do
      </p>
    </div>
  );
};

export default Contact;
