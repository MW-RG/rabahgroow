import React from 'react';
import { CoMenu } from '../components/Menu';

export default function CoPartner() {
  return (
    <div className='mt-5 flex'>
      <CoMenu thisPage='협력기관' />
      <div className='w-full'>
        <div className='bg-white h-20 pt-5 ml-7 text-3xl font-bold'>Company Overview</div>
        <div className='bg-slate-200 h-20'>dd</div>
      </div>
    </div>
  );
}

