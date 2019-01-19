import axios from 'axios';

export default {
  getUser: function() {
    return axios.get(`/api/user`)
  },
  getUserById: function(userId) {
    return axios.get(`/api/user/${userId}`)
  },
  getLocation: function() {
    return axios.get(`/api/location`)
  },
  getLocationById: function(locationId) {
    return axios.get(`/api/location/${locationId}`)
  },
  getActivity: function() {
    return axios.get(`/api/location`)
  },
  getActivityById: function(locationId) {
    return axios.get(`/api/location/${locationId}`)
  },
  searchLocation: function(searchData) {
    return axios.post(`/api/location/${searchData}`)
  },
  saveFavorite: function(favoriteSearch) {
    return axios.post(`/api/location/${favoriteSearch}`)
  },
  deleteUser: function(userId) {
    return axios.delete(`/api/user/${userId}`)
  },
  deleteFavorite: function(favoriteSearch) {
    return axios.delete(`/api/location/${favoriteSearch}`)
  }
}