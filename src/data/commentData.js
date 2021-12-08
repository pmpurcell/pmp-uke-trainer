import axios from 'axios';
import firebaseConfig from '../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCommentsByChartId = (chartID) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/comments.json?orderBy="chartID"&equalTo="${chartID}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createComment = (commentObj) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/comments.json`, commentObj)
    .then((response) => {
      const firebaseKey = response.data.name;
      axios
        .patch(`${dbUrl}/comments/${firebaseKey}.json`, { firebaseKey })
        .then(() => {
          getCommentsByChartId(commentObj.chartID).then(resolve);
        });
    })
    .catch(reject);
});

const deleteComment = (firebaseKey, chartID) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/comments/${firebaseKey}.json`)
    .then(() => {
      getCommentsByChartId(chartID).then(resolve);
    })
    .catch(reject);
});

export { getCommentsByChartId, createComment, deleteComment };
