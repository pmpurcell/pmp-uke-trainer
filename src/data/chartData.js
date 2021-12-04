import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCharts = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/charts.json`)
    .then((response) => resolve(Object.values(response.data)))
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

export { getCharts, createChart };
