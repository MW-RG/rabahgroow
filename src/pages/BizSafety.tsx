import React from 'react';
import { BizMenu } from '../components/Menu';
import img1 from '../assets/images/BizSafety1.png'
import img2 from '../assets/images/BizSafety2.png'
import img3 from '../assets/images/BizSafety3.png'
import img4 from '../assets/images/BizSafety4.png'
import img5 from '../assets/images/BizSafety5.png'
import img6 from '../assets/images/BizSafety6.png'

export default function BizSafety() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <BizMenu thisPage='건설/안전' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-20 pt-10 pl-20 text-3xl font-bold'>{'<'} 건설/안전 사업 {'>'}</div>
        <div className='bg-slate-200 lg:h-10 sm:h-20 pt-3 pl-20 pr-20 text-xl font-bold'>라바그루는 건설/안전 분야의 사업에서 인공지능 기술을 사용하여 높은 품질의 산출물을 만들고 있습니다.</div>
        <div className='bg-slate-200 lg:h-24 sm:h-28 pt-3 pb-5 pl-20 pr-20 text-xl'>
          딥러닝을 이용한 객체 인식 기술, AI 기반 안전 분석 기술, 안전 상황에 대한 이미지 또는 영상을 사용한 객체 segmentation 기술 등을 사용하여 건설/안전 분야의 사업에 인공지능 기술을 도입하는 것을 힘쓰고 있습니다.
        </div>
        <div className='relative h-full overflow-y-scroll'>
          <img alt='img' src={img1} className='w-full object-cover' />
          <div className=' border-b-4 border-dotted' />
          <img alt='img' src={img2} className='w-full object-cover' />
          <div className=' border-b-4 border-dotted' />
          <img alt='img' src={img3} className='w-full object-cover' />
          <div className=' border-b-4 border-dotted' />
          <img alt='img' src={img4} className='w-full object-cover' />
          <div className=' border-b-4 border-dotted' />
          <img alt='img' src={img5} className='w-full object-cover' />
          <div className=' border-b-4 border-dotted' />
          <img alt='img' src={img6} className='w-full object-cover' />
        </div>
      </div>
    </div>
  );
}