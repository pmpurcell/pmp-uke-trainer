import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCharts = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/charts.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getCharts;
