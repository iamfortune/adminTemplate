import React from 'react';
import TopSect from '../components/topSect';
import Filter from '../components/filter';
import './../campaign.css';
import img1 from './../../../assets/web/1.jpg';
import img2 from './../../../assets/web/2.jpg';
import img3 from './../../../assets/web/3.jpg';
import img4 from './../../../assets/web/4.jpg';
import img5 from './../../../assets/web/5.jpg';
import img6 from './../../../assets/web/6.jpg';
import Camp2Card from '../components/camp2Card';




const style = {
  marginBottom: 20,
  marginTop: 20,
};


export default function CampaignStage2() {
  const arr1 = [img1, img2, img3];
  const arr2 = [img4, img5, img6];

  return (
    <div className='campaign-2'>
      <div className='row space-between' style={style}>
        <div>
          <TopSect />
        </div>
        <div className='col-5'>
          <Filter />
        </div>
      </div>

      <div className='row space-between'>
        {arr1.map((item) => (
          <div className='col-4'>
            <Camp2Card img={item} />
          </div>
        ))}
      </div>
      <div className='row mt space-between'>
        {arr2.map((item) => (
          <div className='col-4'>
            <Camp2Card img={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
