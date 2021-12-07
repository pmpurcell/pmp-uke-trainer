import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { getSingleChart } from '../data/chartData';

export default function ChartDetails({ user }) {
  const [singleChart, setSingleChart] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleChart(firebaseKey).then(setSingleChart);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const handleEdit = () => {
    console.warn(`Editing ${singleChart.firebaseKey}`);
  };

  const handleDelete = () => {
    console.warn(`Deleting ${singleChart.firebaseKey}`);
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
