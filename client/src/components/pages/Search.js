import React, { Component } from "react";
import SearchForm from "../pages/SearchForm";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Search extends Component {
  state = {
    searchTerm: "",
    location: [],
    activities: []
  };
  // method to handle on change
  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  //handle form submit
  handleSubmit = event => {
    event.preventDefault();

    if (!this.state.searchTerm) {
      return false;
    }
    API.searchLocation(this.state.searchTerm)
      .then(({ data: { items } }) => {
        const activities = items.map(activity => {
          return {
            id: activity.id,
            imageSRC: activity.image_url,
            name: activity.name,
            rating: activity.rating,
            yelpLink: activity.url
          };
        });

        this.setState({ activities });
      })

      .catch(err => console.log(err));
  };

  render() {
    return <h2>Back again SEACH SEARCH SEARCH</h2>;
  }
}
export default Search;