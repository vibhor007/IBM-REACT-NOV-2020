import axios from "axios";

const endpoint = "http://localhost:3030/categories/";

function getAll() {
  return axios.get(endpoint).then((response) => response.data);
}

function save(categoryData) {
  if (categoryData.id === 0) {
    return axios.post(endpoint, categoryData).then((response) => response.data);
  } else {
    return axios
      .put(`${endpoint}/${categoryData.id}`, categoryData)
      .then((response) => response.data);
  }
}

export default {
  getAll,
  save,
};
