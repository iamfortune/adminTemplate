import React from 'react';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import './chart.css';

function BarChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: [
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
      ],
      datasets: [
        {
          label: 'No Visitors',
          data: [
            6003,
            2401,
            2520,
            3490,
            2530,
            3002,
            2030,
            2100,
            4050,
            5060,
            6000,
            7080,
            1901,
            5040,
          ],
          backgroundColor: ['#f2e7fb'],
          borderWidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <React.Fragment>
      <div className='bar'>
        <div className='bar__title'>
          <p>Visitor Activities</p>
        </div>
        <div className='mt'></div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            legend: {
              display: false,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default BarChart;
