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
    searchTerm: "",
    location: '',
    activities: [],
    locations: []
  };

  handleOnChange = e => {
    this.setState({location: e.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault();
    // this.setState({location: [1,2,3]})
    // search for nearby locations
    API.getLocation(this.state.location)
    .then(nearbyLocations => {
      //search for activities
      API.searchLocation(this.state.location).then(activities => {
        let nearby = nearbyLocations.data.features;
        console.log(nearby)
        console.log(activities)
        this.setState({
          locations: nearby,
          // activities: activities
      })
      });
    });

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
              <input type="text bg-success" onChange={this.handleOnChange} name="seacrh" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <h1>Where do we go from here!</h1>
          <form onSubmit={this.handleOnSubmit}>
            <label>
              <span className="text-success search-location">
                {" "}
                Search Activities:
              </span>
              <input type="text" name="search" value={this.state.location} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>

        <div className="container my-5">
          <div className="row">
            <div className="col-12">
            {!this.state.activities.length ? 
               <h3>What do you want to do?</h3>
               :

              this.state.activities.map(activity => {
                return (
                <div className='card' key={activity.id}>
                {activity.id}
                {activity.imageSRC}
                {activity.name}
                {activity.rating}
                {activity.yelpLink}
                </div>
                )})}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            {!this.state.locations.length ? 
               <h3>What do you want to do?</h3>
               :

              this.state.locations.map(activity => {
                return (
                <div className='card' key={activity.id}>
                {activity.id}
                {activity.imageSRC}
                {activity.name}
                {activity.rating}
                {activity.yelpLink}
                </div>
                )})}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;