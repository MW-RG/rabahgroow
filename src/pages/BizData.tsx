import React from 'react';
import { BizMenu } from '../components/Menu';
import img from '../assets/images/BizData.png'

export default function BizData() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <BizMenu thisPage='데이터' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-20 pt-10 pl-20 text-3xl font-bold'>{'<'} 데이터 관련 사업 {'>'}</div>
        <div className='bg-slate-200 lg:h-10 sm:h-20 pt-3 pl-20 pr-20 text-xl font-bold'>라바그루는 빅데이터를 다루는 기술을 사용하여 꾸준히 데이터 관련 사업에서 고객들의 신뢰를 얻고 있습니다.</div>
        <div className='bg-slate-200 lg:h-24 sm:h-28 pt-3 pb-5 pl-20 pr-20 text-xl'>
          인공지능 학습용 데이터 구축 사업, AI 기반 영상 데이터, 이미지 데이터 분석 사업, 빅데이터 분석 플랫폼 구축 및 시각화 사업 등 데이터 관련 사업에 참여하고 있습니다.
        </div>
        <div className='relative h-full overflow-y-scroll'>
          <img alt='img' src={img} className='w-full object-cover' />
        </div>
      </div>
    </div>
  );
}