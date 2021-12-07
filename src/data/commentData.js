import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCommentsByChartId = (chartID) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/comments.json?orderBy="chartID"&equalTo="${chartID}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

export default getCommentsByChartId;
