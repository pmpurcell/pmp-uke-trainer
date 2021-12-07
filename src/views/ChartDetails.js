import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { deleteChart, getSingleChart } from '../data/chartData';
import getCommentsByChartId from '../data/commentData';

export default function ChartDetails({ user }) {
  const [singleChart, setSingleChart] = useState({});
  const [commentArray, setCommentArray] = useState([]);
  const { firebaseKey } = useParams();
  const history = useHistory();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleChart(firebaseKey).then(setSingleChart);
      getCommentsByChartId(firebaseKey).then(setCommentArray);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const handleEdit = () => {
    console.warn(`Editing ${singleChart.firebaseKey}`);
    history.push(`/edit/${singleChart.firebaseKey}`);
  };

  const handleDelete = (e) => {
    console.warn(`Deleting ${singleChart.firebaseKey}`);
    e.preventDefault();
    deleteChart(firebaseKey).then(() => history.push('/charts'));
  };

  const chartUser = singleChart.uid;

  return (
    <div>
      <h1>{singleChart.chartName}</h1>
      <h5> Uploaded by {singleChart.userName} </h5>
      <p>{singleChart.chartDescription}</p>
      {(user?.uid === chartUser || user?.isAdmin) && (
        <>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
          <button type="button" onClick={handleEdit}>
            Edit
          </button>
        </>
      )}
      {commentArray.map((comment) => (
        <div key={comment.firebaseKey}>
          <h6>{comment.userName}</h6>
          <p>{comment.commentText}</p>
        </div>
      ))}
    </div>
  );
}

ChartDetails.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};

ChartDetails.defaultProps = {
  user: {},
};
