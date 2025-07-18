import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/items';

export const getItems = () => axios.get(BASE_URL);
export const getItem = (id) => axios.get(`${BASE_URL}/${id}`);
export const createItem = (data) => axios.post(BASE_URL, data);
export const updateItem = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteItem = (id) => axios.delete(`${BASE_URL}/${id}`);
export const getLowStockItems = () => axios.get(`${BASE_URL}/low-stock`);
