import React from 'react';
import PollTopStage from '../components/topStage';
import PollButtonCard from '../components/pollButtonCard';
import ButtonColored from '../../../components/button/buttonColored';
import './../polls.css'

export default function PollButton() {
  return (
    <div className='pollButton'>
      <PollTopStage />
      <PollButtonCard />
      <div className='mt row space-between'>
        <div></div>
        <div className='set-Btn'>
          <ButtonColored label={'Submit'} />
        </div>
      </div>
    </div>
  );
}
