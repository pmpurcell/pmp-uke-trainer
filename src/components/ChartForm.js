import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { createChart } from '../data/chartData';

const initialState = {
  chartName: '',
  chartDescription: '',
  chartFile: '',
  firebaseKey: '',
  uid: '',
  userName: '',
};

export default function ChartForm({ user }) {
  const [formInput, setFormInput] = useState(initialState);

  const history = useHistory();

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createChart({ ...formInput, uid: user.uid, userName: user.fullName }).then(
      () => history.push('/charts'),
    );
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
};
