import React from 'react';
import { PropTypes } from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import { deleteComment } from '../data/commentData';

export default function CommentCard({
  chartId,
  comment,
  user,
  setCommentArray,
}) {
  const history = useHistory();
  const handleCommentDelete = (e) => {
    e.preventDefault();
    deleteComment(comment.firebaseKey, chartId).then(setCommentArray);
  };

  const handleCommentEdit = () => {
    history.push(`/editComment/${comment.firebaseKey}`);
  };
  return (
    <div className="comment-card">
      <Link to={`/userDetails/${comment.userName}`}>
        <h6>{comment.userName}</h6>
      </Link>
      <p>{comment.commentText}</p>
      {(user?.uid === comment.uid || user?.isAdmin) && (
        <>
          <button type="button" onClick={handleCommentDelete}>
            Delete
          </button>
          <button type="button" onClick={handleCommentEdit}>
            Edit
          </button>
        </>
      )}
    </div>
  );
}

CommentCard.propTypes = {
  chartId: PropTypes.string.isRequired,
  comment: PropTypes.shape({
    userName: PropTypes.string,
    commentText: PropTypes.string,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    uid: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
  setCommentArray: PropTypes.func.isRequired,
};

CommentCard.defaultProps = {
  user: {},
};
