import axios from 'axios';
import firebaseConfig from '../api/apiKeys';
import { deleteChart } from './chartData';

const dbUrl = firebaseConfig.databaseURL;

const getCommentsByChartId = (chartId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/comments.json?orderBy="chartId"&equalTo="${chartId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const getSingleComment = (commentId) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/comments/${commentId}.json`)
    .then((response) => resolve(response.data))
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
          getCommentsByChartId(commentObj.chartId).then(resolve);
        });
    })
    .catch(reject);
});

const deleteComment = (firebaseKey, chartId) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbUrl}/comments/${firebaseKey}.json`)
    .then(() => {
      getCommentsByChartId(chartId).then(resolve);
    })
    .catch(reject);
});

const updateComment = (commentObj) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbUrl}/comments/${commentObj.firebaseKey}.json`, commentObj)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteAllComments = (chartId) => new Promise((resolve, reject) => {
  getCommentsByChartId(chartId)
    .then((commentArray) => {
      const deleteComments = commentArray.map((comment) => deleteComment(comment.firebaseKey, chartId));
      Promise.all([...deleteComments]).then(() => resolve(deleteChart(chartId)));
    })
    .catch(reject);
});

export {
  getCommentsByChartId,
  createComment,
  deleteComment,
  updateComment,
  getSingleComment,
  deleteAllComments,
};
