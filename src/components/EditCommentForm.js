import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { updateComment } from '../data/commentData';

export default function EditCommentForm({ item = {} }) {
  const [formInput, setFormInput] = useState({});

  const history = useHistory();

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
    updateComment(formInput).then(() => history.push(`/details/${item.chartID}`));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentText">
          Edit comment!
          <input
            type="text"
            id="commentText"
            onChange={handleChange}
            value={formInput.commentText}
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

EditCommentForm.propTypes = {
  item: PropTypes.shape({}),
};

EditCommentForm.defaultProps = {
  item: {},
};
