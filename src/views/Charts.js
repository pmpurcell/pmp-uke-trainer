import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { signInUser } from '../api/auth';

export default function Charts({ user }) {
  return (
    <div>
      <h1>Charts</h1>
      {user ? (
        <Link type="button" className="btn btn-secondary" to="/create">
          {' '}
          Add New Chart{' '}
        </Link>
      ) : (
        <button
          type="button"
          className="btn btn-secondary"
          onClick={signInUser}
        >
          Sign In To Upload
        </button>
      )}
    </div>
  );
}

Charts.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

Charts.defaultProps = {
  user: {},
};
