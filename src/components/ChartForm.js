import React from 'react';

export default function ChartForm() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="chartName" className="form-label">
            Chart Name
            <input type="text" className="form-control" id="chartName" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="chartDescription" className="form-label">
            Chart Description
            <input type="text" className="form-control" id="chartDescription" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="chartFile" className="form-label">
            File
            <input type="text" className="form-control" id="chartFile" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
