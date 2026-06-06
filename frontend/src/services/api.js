import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true, // this is required to send cookies with every request, which is necessary for cookie-based authentication
});

export default API;
