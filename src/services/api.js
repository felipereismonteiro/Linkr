import axios from "axios";

const BASE_URL = "https://linkr-api-hhbp.onrender.com";

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signInUser(config) {
  const promisse = axios.post(`${BASE_URL}/signin`, config)
  return promisse;
}

function getHashtags() {
  const promise = axios.get(`${BASE_URL}/hashtags`);
  return promise;
}

function getPostsByHashtag(name) {
  const promise = axios.get(`${BASE_URL}/posts/${name}`);
  return promise;
}
const api = {
  getHashtags,
  getPostsByHashtag,
  signInUser
};

export default api;
