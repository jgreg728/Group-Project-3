import axios from 'axios';

export default {
  getUser: function () {
    return axios.get(`/api/user`)
  },
  getUserById: function (userId) {
    return axios.get(`/api/user/${userId}`)
  },
  getLocation: function (query) {
      return axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/urlLoc.json", {
        params: {
          access_token: process.env.MAPBOX_ID
        }
      })
  },
  getLocationById: function (locationId) {
    return axios.get(`/api/location/${locationId}`)
  },
  getActivity: function () {
    return axios.get(`/api/location`)
  },
  getActivityById: function (locationId) {
    return axios.get(`/api/location/${locationId}`)
  },
  searchLocation: function (searchData) {
    return axios.post(`/api/location/${searchData}`)
  },
  saveFavorite: function (favoriteSearch) {
    return axios.post(`/api/location/${favoriteSearch}`)
  },
  deleteUser: function (userId) {
    return axios.delete(`/api/user/${userId}`)
  },
  deleteFavorite: function (favoriteSearch) {
    return axios.delete(`/api/location/${favoriteSearch}`)
  },
  searchLocation: function(query) {
    return axios.get(`https://api.yelp.com/v3/businesses/search?${query}`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`
      }
      }).then(response => {
        return response.json()
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
           return jsonResponse.busienss.map(business => {
            console.log(JSON.stringify(jsonResponse));
            return {
              id: business.id,
              imageSRC: business.image_url,
              name: business.name,
              rating: business.rating
            };
          })
        }
      }).catch(error => console.log(error));
  }
}