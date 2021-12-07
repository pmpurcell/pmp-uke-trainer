import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChartForm from '../components/ChartForm';
import { getSingleChart } from '../data/chartData';

export default function Edit() {
  const [chartItem, setchartItem] = useState({});
  const { firebaseKey } = useParams();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getSingleChart(firebaseKey).then(setchartItem);
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <h1> Edit {chartItem.chartName} </h1>
      <ChartForm item={chartItem} />
    </div>
  );
}
