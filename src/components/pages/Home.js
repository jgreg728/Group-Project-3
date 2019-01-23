import React from "react";
import computer from "./image/achievement-agreement-arms-1068523.jpg";

const styles = {
  hero: {
    backgroundImage: `url(${computer})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  }
};

const Home = props => {
  console.log(props);
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid text-center d-flex align-items-center justfy-content-center justify-content-center"
        style={styles.hero}
      >
        <h1>Where do we go from here!</h1>
        
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3>Sumphin here</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
              a recusandae itaque vel accusantium porro. Vitae nostrum ducimus
              corrupti laborum quas accusamus blanditiis earum unde debitis
              veniam! Harum, corporis.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsa
              inventore quam molestiae nobis aperiam expedita repellendus, ut
              incidunt necessitatibus. Sed quam amet id a odit. Neque inventore
              quaerat possimus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
