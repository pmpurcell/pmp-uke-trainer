import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { deleteChart, getSingleChart } from '../data/chartData';
import { getCommentsByChartId } from '../data/commentData';
import CommentForm from '../components/CommentForm';
import { signInUser } from '../api/auth';
import CommentCard from '../components/CommentCard';

export default function ChartDetails({ user }) {
  const [singleChart, setSingleChart] = useState({});
  const [commentArray, setCommentArray] = useState([]);
  const [editItem, setEditItem] = useState({});
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
      <div id="commentDiv">
        {commentArray.map((comment) => (
          <CommentCard
            chartID={singleChart.firebaseKey}
            comment={comment}
            user={user}
            setCommentArray={setCommentArray}
            setEditItem={setEditItem}
          />
        ))}
      </div>
      {user ? (
        <CommentForm
          user={user}
          chartId={firebaseKey}
          setCommentArray={setCommentArray}
          item={editItem}
        />
      ) : (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={signInUser}
        >
          Sign In To Comment
        </button>
      )}
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
