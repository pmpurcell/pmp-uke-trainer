import React, { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getSingleChart } from '../data/chartData';
import { deleteAllComments, getCommentsByChartId } from '../data/commentData';
import CommentForm from '../components/CommentForm';
import { signInUser } from '../api/auth';
import CommentCard from '../components/CommentCard';

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
    history.push(`/edit/${singleChart.firebaseKey}`);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteAllComments(firebaseKey).then(() => history.push('/charts'));
  };

  const chartUser = singleChart.uid;

  return (
    <div id="detailsDiv">
      <h1>{singleChart.chartName}</h1>
      <h5>
        {' '}
        Uploaded by{' '}
        <Link to={`/userDetails/${singleChart.userName}`}>
          {singleChart.userName}
        </Link>
      </h5>
      <img
        id="chartImg"
        src={singleChart.chartFile}
        alt={singleChart.chartName}
      />
      <div id="controlDiv">
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
      </div>
      <div id="commentDiv">
        <h4>Comments</h4>
        {commentArray.map((comment) => (
          <CommentCard
            key={comment.firebaseKey}
            chartId={singleChart.firebaseKey}
            comment={comment}
            user={user}
            setCommentArray={setCommentArray}
          />
        ))}
      </div>
      {user ? (
        <CommentForm
          user={user}
          chartId={firebaseKey}
          setCommentArray={setCommentArray}
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
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => history.goBack()}
      >
        Go back
      </button>
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
