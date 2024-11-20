// src/services/api.js
import axios from 'axios';

const BASE_URL = "http://localhost:5000"; // Replace with your backend URL

export const fetchTransactions = (month, search, page = 1, perPage = 10) =>
  axios.get(`${BASE_URL}/transactions`, {
    params: { month, search, page, perPage },
  });

export const fetchStatistics = (month) =>
  axios.get(`${BASE_URL}/statistics`, { params: { month } });

export const fetchBarChart = (month) =>
  axios.get(`${BASE_URL}/bar-chart`, { params: { month } });

export const fetchPieChart = (month) =>
  axios.get(`${BASE_URL}/pie-chart`, { params: { month } });
