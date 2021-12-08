import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { createComment } from '../data/commentData';

const initialState = {
  chartID: '',
  commentText: '',
  firebaseKey: '',
  uid: '',
  userName: '',
};

export default function CommentForm({
  user,
  chartId,
  setCommentArray,
  item = {},
}) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (item.firebaseKey) {
      setFormInput({
        chartID: item.chartID,
        commentText: item.commentText,
        firebaseKey: item.firebaseKey,
        uid: item.uid,
        userName: item.userName,
      });
    }
  }, [item]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createComment({
      ...formInput,
      uid: user.uid,
      userName: user.fullName,
      chartID: chartId,
    }).then(setCommentArray);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentText">
          Leave a comment!
          <input
            type="text"
            id="commentText"
            onChange={handleChange}
            value={formInput.commentText || ''}
            size="40"
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

CommentForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    fullName: PropTypes.string,
    isAdmin: PropTypes.bool,
  }).isRequired,
  chartId: PropTypes.string.isRequired,
  setCommentArray: PropTypes.func.isRequired,
  item: PropTypes.shape({}),
};

CommentForm.defaultProps = {
  item: {},
};
