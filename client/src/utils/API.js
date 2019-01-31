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
          q: query, access_token: "pk.eyJ1Ijoic2ZsZXdpczgyNyIsImEiOiJjam1rbXI5dWYwczlkM3FvZThwZ24xbGV5In0.qPist1fS63LzFlIXIsKb8w"
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
  searchLocation: function (query) {
    return axios.get(`https://api.yelp.com/v3/businesses/search?${query}`, {
      headers: {
        Authorization: `Bearer gTWGvF0Jd3OSGVdue6Er5lbVDihmtZ3-EUpLoH2wVH-RFHjWM7qw-DE2yBbsRc3GaxIig_aB964Ft2nc1gwS-pXj51RASNDZQJT64tFPLEI-MawguXadbVIDXi1BXHYx`
      }
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          console.log(JSON.stringify(jsonResponse));
          return {
            id: business.id,
            imageSRC: business.image_url,
            name: business.name,
            rating: business.rating,
            yelpLink: business.url
          };
        })
      }
    }).catch(error => console.log(error));
  }
}