import React from 'react';
import { PropTypes } from 'prop-types';
import ChartForm from '../components/ChartForm';

export default function Create({ user }) {
  return (
    <div className="chartFormDiv">
      <h1>Add a new chart!</h1>
      <ChartForm user={user} />
    </div>
  );
}

Create.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    isAdmin: PropTypes.bool,
  }).isRequired,
};
