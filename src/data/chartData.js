import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCharts = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/charts.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleChart = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/charts/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createChart = (chartObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/charts.json`, chartObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/charts/${response.data.name}.json`, {
          firebaseKey,
        })
        .then(resolve);
    })
    .catch(reject);
});

const deleteChart = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/charts/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const updateChart = (chartObject) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/charts/${chartObject.firebaseKey}.json`, chartObject)
    .then((response) => resolve(response.data))
    .catch(reject);
});

export {
  getCharts, createChart, getSingleChart, deleteChart, updateChart,
};
