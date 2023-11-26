import axios from "axios";

const API = "http://localhost:4000/api";

export const loginUserRequest = (user) => axios.post(`${API}/login`, user);

export const registerUserRequest = (user) =>
  axios.post(`${API}/register`, user);

export const loginAdminRequest = (user) =>
  axios.post(`${API}/admin/login`, user);

export const registerAdminRequest = (user) =>
  axios.post(`${API}/admin/register`, user);

export const getAllProductsRequest = () => axios.get(`${API}/products`);
