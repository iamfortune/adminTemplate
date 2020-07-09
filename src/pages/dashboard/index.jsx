import React from 'react';
import Shortenlink from './components/shortenlink';
import MetaTable from './components/metaTable';
import BarChart from './components/charts/bar';
import DonughtChart from './components/charts/donught';


function Dashboard() {
  return (
    <div> 
      <div className='mt-big'>
        <Shortenlink />
      </div>

      <div className='mt-big'>
        <MetaTable />
      </div>

      <div className='mt-big'>
        <div className='row center mb'>
          <select className='col-2 mb' name="" id="">
            <option value="" selected disabled> Filter Chart</option>
            <option value=""> range 1</option>
            <option value=""> range 2</option>
          </select>
        </div>

        <div className='row space-between'>
          <div className='col-6'>
            <BarChart />
          </div>

          <div className='col-6'>
            <DonughtChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
