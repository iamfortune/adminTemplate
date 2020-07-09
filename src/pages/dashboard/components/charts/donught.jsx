import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { useState } from 'react';
import { useEffect } from 'react';
import fb from './../../../../assets/social/fb.svg';
import user from './../../../../assets/social/user.svg';
import pinterest from './../../../../assets/pinterest.svg';
import twitter from './../../../../assets/twitter.svg';
import './chart.css';

function DonughtChart() {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ['All Visitors', 'Total Clicks'],
      datasets: [
        {
          label: 'No of Sales',
          data: [220, 20],
          backgroundColor: ['#f2e7fb', '#7300da'],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className='donught'>
      <div className='donught__title '>
        <p>Traffic Report</p>
      </div>
      <div className=' row space-between'>
        <div className='col-8'>
          <div className='mt'></div>
          <Doughnut
            data={chartData}
            options={{
              responsive: true,
              legend: {
                display: false,
              },
            }}
          />

          <div className='mt'></div>

          <div className='donught__click row space-evenly'>
            <div className='click row'>
              <span>All Visitors</span>
              <div className='click__data'>187</div>
            </div>

            <div className='click row'>
              <span>Total Clicks</span>
              <div className='click__data'>187</div>
            </div>
          </div>
        </div>

        <div className='col-4'>
          <div className='donught__social center-text uppercase'>
            <div className='donught__lead'>
              <p>New lead</p>
              <div className='lead-data row'>
                <p>800+</p> <p> last 30 days</p>
              </div>
            </div>

            <div className='row set-margin small-text space-between'>
              <div className='donught-facebook'>
                <img src={fb} width='16px' alt='' />
                <p>facebook</p>
                <div className='donught__social-data'>
                  <p>183</p>
                </div>
              </div>
              <div className='donught-pintrest'>
                <img src={pinterest} width='16px' alt='' />
                <p>pinterest</p>
                <div className='donught__social-data reverse'>
                  <p>183</p>
                </div>
              </div>
            </div>

            <div className='row small-text space-between'>
              <div className='donught-twitter'>
                <img src={twitter} width='16px' alt='' />
                <p>twitter</p>
                <div className='donught__social-data'>
                  <p>183</p>
                </div>
              </div>
              <div className='donught-others'>
                <img src={user} width='16px' alt='' />
                <p>others</p>
                <div className='donught__social-data reverse'>
                  <p>183</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonughtChart;
