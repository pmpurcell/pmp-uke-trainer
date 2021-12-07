import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { createChart, updateChart } from '../data/chartData';

const initialState = {
  chartName: '',
  chartDescription: '',
  chartFile: '',
  firebaseKey: '',
  uid: '',
  userName: '',
};

export default function ChartForm({ user, item = {} }) {
  const [formInput, setFormInput] = useState(initialState);

  const history = useHistory();

  useEffect(() => {
    if (item.firebaseKey) {
      setFormInput({
        chartName: item.chartName,
        chartDescription: item.chartDescription,
        chartFile: item.chartFile,
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
    if (item.firebaseKey) {
      updateChart(formInput).then(() => history.push('/charts'));
    } else {
      createChart({
        ...formInput,
        uid: user.uid,
        userName: user.fullName,
      }).then(() => history.push('/charts'));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="chartName" className="form-label">
            Chart Name
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={formInput.chartName || ''}
              id="chartName"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="chartDescription" className="form-label">
            Chart Description
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={formInput.chartDescription || ''}
              id="chartDescription"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="chartFile" className="form-label">
            File
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              value={formInput.chartFile || ''}
              id="chartFile"
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

ChartForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string,
    fullName: PropTypes.string,
    isAdmin: PropTypes.bool,
  }).isRequired,
  item: PropTypes.shape({}).isRequired,
};
