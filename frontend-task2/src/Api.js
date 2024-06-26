import axios from "axios";

const API_URL = "http://localhost:4000";

export const registerUser = async userData => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async userData => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const readAllRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipe-read-all`, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const readOwnRecipes = async userData => {
  try {
    const response = await axios.post(`${API_URL}/recipe-read-own`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createRecipe = async recipeData => {
  try {
    const response = await axios.post(`${API_URL}/recipe-create`, recipeData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateRecipe = async recipeData => {
  try {
    const response = await axios.patch(`${API_URL}/recipe-update-queried`, recipeData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteRecipe = async recipeData => {
  try {
    const response = await axios.delete(`${API_URL}/recipe-delete-queried`, { data: recipeData, withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const searchRecipe = async userData => {
  try {
    const response = await axios.post(`${API_URL}/recipe-read-queried`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const searchUser = async userData => {
  try {
    const response = await axios.post(`${API_URL}/recipe-read-other`, userData, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

