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
      <h2>
        <p>
        YourTour is an app to allow people who visit other towns or cities to find fun, interesting and exciting outings, activities and landmarks to let them make the most out of the location they’re in. Your search results will always contain places to go that have a certain fun factor or interesting twist added to them.
        </p>

        <p>
          More than just normal restaurants and bars to just sit down and eat/drink.
          </p>
        </h2>
      <form>

      </form>
    </div>
  )
}

export default About;