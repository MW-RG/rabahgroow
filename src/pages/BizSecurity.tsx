import React from 'react';
import { BizMenu } from '../components/Menu';
import img from '../assets/images/BizSecurity.png'

export default function BizSecurity() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <BizMenu thisPage='국방/사이버보안' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-16 pt-5 pl-20 text-3xl font-bold'>{'<'} 국방/사이버보안 사업 {'>'}</div>
        <div className='relative bg-slate-200 pt-7'>
          <img alt='img' src={img} className='absolute w-full' />
        </div>
      </div>
    </div>
  );
}