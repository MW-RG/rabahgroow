import React from 'react';
import { CoMenu } from '../components/Menu';
import img from '../assets/images/CoVision.png'

export default function CoVision() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <CoMenu thisPage='회사비전' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-44 pt-28 pl-20 text-3xl font-bold'>{'<'} 회사비전 {'>'}</div>
        <div className='bg-slate-200 h-10 pt-3 pl-20 text-red-500 text-3xl font-bold'>VISION 2025</div>
        <div className='bg-slate-200 h-36 pt-7 pl-20 pr-20 text-xl pb-5'>
          사이버보안/안전 및 인공지능 전문기업으로 탁월한 R&D 능력과 SW개발능력을 바탕으로 필요한 모든 영역에서 우리의 기술을 적용하여 고객분들께 더 나은 가치를 제공하겠습니다. 
        </div>
        <div className='bg-white pt-7 text-center'>
          <img alt='img' src={img} className='inline-block animate-bannerImg' />
        </div>
      </div>
    </div>
  );
}
