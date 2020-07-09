import React from 'react';
import LeadTableData from './components/labelTableData';
import LeadTableHead from './components/labelTableHead';
import LeadsHeader from './components/leadsHeader';

function Leads() {
  return (
    <div>
      <div className='col-12'>
        <LeadsHeader />
      </div>
      <LeadTableHead>
        <LeadTableData
          sync={'sync'}
          name={'Austin Ejem '}
          date={'04-04-2020'}
          email={'jemzaustin@gmail.com'}
          idNum={'1'}
        />

        <LeadTableData
          sync={'sync'}
          name={'Austin Ejem '}
          date={'04-04-2020'}
          email={'jemzaustin@gmail.com'}
          idNum={'2'}
        />

        <LeadTableData
          sync={'shuffle'}
          name={'Austin Ejem '}
          date={'04-04-2020'}
          email={'jemzaustin@gmail.com'}
          idNum={'3'}
        />
      </LeadTableHead>
    </div>
  );
}

export default Leads;
