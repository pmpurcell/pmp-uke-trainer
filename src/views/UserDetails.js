import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getChartsByUserName } from '../data/chartData';

export default function UserDetails() {
  const { userName } = useParams();
  const [userChartArray, setUserChartArray] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getChartsByUserName(userName).then(setUserChartArray);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div id="userDiv">
      <h1>{userName}</h1>
      {userChartArray.map((userChart) => (
        <div className="chart-card" key={userChart.firebaseKey}>
          <h3> {userChart.chartName} </h3>
          <h5>
            Uploaded by <i>{userChart.userName}</i>
          </h5>
          <Link
            type="button"
            className="btn btn-primary"
            to={`/details/${userChart.firebaseKey}`}
          >
            Details
          </Link>
        </div>
      ))}
      <Link to="/charts">
        <div className="nav-column">
          <p>Go to Charts</p>
        </div>
      </Link>
    </div>
  );
}
