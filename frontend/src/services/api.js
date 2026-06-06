import axios from "axios";

const API = axios.create({
  baseURL: "https://taskly-1-m7ev.onrender.com/api",
  withCredentials: true, // this is required to send cookies with every request, which is necessary for cookie-based authentication
});

export default API;
