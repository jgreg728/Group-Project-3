import axios from 'axios';

export default {
  getUser: function () {
    return axios.get(`/api/user`)
  },
  getUserById: function (userId) {
    return axios.get(`/api/user/${userId}`)
  },
  getMapBox: function (query) {
      return axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/urlLoc.json", {
        params: {
          access_token: "pk.eyJ1Ijoic2ZsZXdpczgyNyIsImEiOiJjam1rbXI5dWYwczlkM3FvZThwZ24xbGV5In0.qPist1fS63LzFlIXIsKb8w"
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
  }
}