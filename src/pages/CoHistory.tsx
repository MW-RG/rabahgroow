import React from 'react';
import { CoMenu } from '../components/Menu';

export default function CoHistory() {
  return (
    <div className='mt-5 flex z-10 h-screen'>
      <CoMenu thisPage='회사연혁' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-44 pt-28 pl-20 text-3xl font-bold'>{'<'} 회사연혁 {'>'}</div>
        <div className='bg-slate-200 h-10 pt-3 pl-20 text-xl font-bold'>최고의 <span className='text-red-500'>IT R&D 서비스 전문기업</span>을 위한 발걸음</div>
        <div className='bg-slate-200 h-16 pt-3 pb-5 pl-20 text-xl'>우리는 사이버보안, 국방, 건설안전분야에서 R&D 서비스 및 S/W 개발 전문 기업으로 나아가고 있습니다.</div>
        <div className='flex pt-7 items-center justify-center'>
          <div className='font-bold text-center'>
            <p>1st Generation</p>
            <p>기업성장 기반 구축</p>
          </div>
          <div className=' border-l-2 ml-7 mr-7 border-blue-300 border-dashed h-20' />
          <div>
            <p>2018 <span className='pl-5'>라바그루(주) 설립</span></p>
            <p>2018 <span className='pl-5'>창업선도대학 과제 수행</span></p>
            <p>2022 <span className='pl-5'>중소기업 확인 등록, 프로그램 등록</span></p>
          </div>
        </div>
        <div className='flex pt-7 items-center justify-center'>
          <div className='font-bold text-center'>
            <p>1st Generation</p>
            <p>기업성장 기반 구축</p>
          </div>
          <div className=' border-l-2 ml-7 mr-7 border-blue-300 border-dashed h-20' />
          <div>
            <p>2018 <span className='pl-5'>라바그루(주) 설립</span></p>
            <p>2018 <span className='pl-5'>창업선도대학 과제 수행</span></p>
            <p>2022 <span className='pl-5'>중소기업 확인 등록, 프로그램 등록</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

