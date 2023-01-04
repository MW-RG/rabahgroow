import React from 'react';
import { CoMenu } from '../components/Menu';
import img from '../assets/images/CoOverview.png'
import { BsCircleFill } from 'react-icons/bs'

export default function CoOverview() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <CoMenu thisPage='회사개요' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-20 pt-10 pl-20 text-3xl font-bold'>{'<'} 회사개요 {'>'}</div>
        <div className='bg-slate-200 h-10 pt-3 pl-20 text-xl font-bold'>라바그루(주)는 R&D 및 AI 전문기업입니다.</div>
        <div className='bg-slate-200 h-24 pt-3 pb-5 pl-20 pr-20 text-xl'>사이버보안, 국방, 건설안전 분야에 데이터분석 플랫폼, AI 모델 연구개발, 보안 알고리즘 연구개발을 진행하고 있습니다.</div>
        <div className='relative'>
          <img alt='img' src={img} className='absolute w-full sm:h-[30rem] object-cover' />
          <BsCircleFill className='absolute text-white mt-[7.7rem] ml-20' size={7} /><p className='absolute mt-28 ml-28 text-xl text-white font-medium'>회사명<span className='pl-20 font-bold'>라바그루(주)</span></p>
          <BsCircleFill className='absolute text-white mt-[11.1rem] ml-20' size={7} /><p className='absolute mt-[10.5rem] ml-28 text-xl text-white font-medium'>설립일<span className='pl-20 font-bold'>2018. 04. 26</span></p>
          <BsCircleFill className='absolute text-white mt-[14.7rem] ml-20' size={7} /><p className='absolute mt-56 ml-28 text-xl text-white font-medium'>대표이사<span className='pl-16 font-bold'>홍성삼</span></p>
          <BsCircleFill className='absolute text-white mt-[18.7rem] ml-20' size={7} />
            <p className='absolute mt-72 ml-28 text-xl text-white font-medium'>본사<span className='pl-24 font-bold'>경기도 성남시 분당구 성남대로926번길 10, R547호</span></p>
        </div>
      </div>
    </div>
  );
}