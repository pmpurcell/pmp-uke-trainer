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
      <div id="chartsDiv">
        {user ? (
          <Link
            type="button"
            id="signInButton"
            className="btn btn-primary"
            to={`/userDetails/${user.fullName}`}
          >
            My Charts{' '}
          </Link>
        ) : (
          <button
            type="button"
            id="signInButton"
            className="btn btn-secondary create-btn"
            onClick={signInUser}
          >
            Sign In
          </button>
        )}
        <h1>Charts</h1>
        {charts.map((chart) => (
          <div className="chart-card" key={chart.firebaseKey}>
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
          <Link
            type="button"
            id="addButton"
            className="btn btn-secondary"
            to="/create"
          >
            {' '}
            Add New Chart{' '}
          </Link>
        ) : (
          <button
            type="button"
            id="signInButton"
            className="btn btn-secondary create-btn"
            onClick={signInUser}
          >
            Sign In To Upload
          </button>
        )}
      </div>
    </div>
  );
}

Charts.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
    fullName: PropTypes.string,
  }),
};

Charts.defaultProps = {
  user: {},
};
