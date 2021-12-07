import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { signInUser } from '../api/auth';
import { getCharts } from '../data/chartData';

export default function Charts({ user }) {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    getCharts().then((chartsArray) => {
      if (isMounted) {
        setCharts(chartsArray);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <h1>Charts</h1>
      {charts.map((chart) => (
        <div className="chart-card">
          <h3> {chart.chartName} </h3>
          <Link
            type="button"
            className="btn btn-primary"
            to={`/details/${chart.firebaseKey}`}
          >
            Details
          </Link>
        </div>
      ))}
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
