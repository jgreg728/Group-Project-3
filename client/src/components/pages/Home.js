import React from "react";
import computer from "./image/rock-climbing.jpg";
import API from "../../utils/API.js";

// handle search sub
  
const styles = {
  hero: {
    backgroundImage: `url(${computer})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh"
  }
};

class Home extends React.Component {
  state = {
    location: [56]
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.API.setState({location: [1,2,3]})
  };
  
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid text-center d-flex align-items-center justfy-content-center justify-content-center"
          style={styles.hero}
        >
          <form onSubmit={this.handleOnSubmit}>
            <label>
              <span className="text-success search-location">
                {" "}
                Search location:
              </span>
              <input type="text bg-success" name="seacrh" />
            </label>
            <input type="submit" value="Submit" />
          </form >
          <h1>Where do we go from here!</h1>
          <form>
            <label>
              <span className="text-success search-location">
                {" "}
                Search Activities:
              </span>
              <input type="text" name="search" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12">
              <h3></h3>
              {this.state.location.map((item,index) => {
                return <div className='card'>{item}</div>
              })}
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
