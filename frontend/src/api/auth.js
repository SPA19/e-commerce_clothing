import axios from "axios";

export const API = "http://localhost:4000/api";

export const loginUserRequest = async (user) =>
  axios.post(`${API}/login`, user);

export const registerUserRequest = (user) =>
  axios.post(`${API}/register`, user);

export const loginAdminRequest = (user) =>
  axios.post(`${API}/admin/login`, user);

export const registerAdminRequest = (user) =>
  axios.post(`${API}/admin/register`, user);

export const logoutRequest = () => axios.post(`${API}/admin/logout`);

export const getAllProductsRequest = () => axios.get(`${API}/products`);

export const getProductByid = (product) => axios.get(`${API}/products/${product}`);

export const createProductRequest = (product) => axios.post(`${API}/products`, product)