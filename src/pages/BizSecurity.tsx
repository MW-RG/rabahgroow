import React from 'react';
import { BizMenu } from '../components/Menu';
import img from '../assets/images/BizSecurity.png'

export default function BizSecurity() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <BizMenu thisPage='국방/사이버보안' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-20 pt-10 pl-20 text-3xl font-bold'>{'<'} 국방/사이버보안 사업 {'>'}</div>
        <div className='bg-slate-200 lg:h-10 sm:h-20 pt-3 pl-20 pr-20 text-xl font-bold'>라바그루가 보유한 사이버보안 기술들을 이용한 국방 및 사이버보안 관련 사업에서 확실한 성과를 보이고 있습니다.</div>
        <div className='bg-slate-200 lg:h-24 sm:h-28 pt-3 pb-5 pl-20 pr-20 text-xl'>
          지휘통제/통신, 감시 및 정찰, 사이버 무기체계 사업 보안 평가, GPU 기반 고속/병렬처리 프레임워크 등 다양한 기술을 사용하여 AI 및 머신러닝 기반의 보안 모델 연구개발 사업, 과학화 훈련, 워게임 등의 M&S 사업 등에 참여하고 있습니다.
        </div>
        <div className='relative h-full overflow-y-scroll'>
          <img alt='img' src={img} className='w-full object-cover' />
        </div>
      </div>
    </div>
  );
}