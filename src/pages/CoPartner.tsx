import React from 'react';
import { CoMenu } from '../components/Menu';

export default function CoPartner() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <CoMenu thisPage='협력기관' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-52 pt-28 pl-20 text-3xl font-bold'>{'<'} 협력기관 {'>'}</div>
        <div className='w-[70%] grid lg:grid-cols-3 sm:grid-cols-2 grid-flow-row lg:gap-10 sm:gap-5 lg:mt-10 sm:mt-5 ml-20'>
          <ImgBox location='https://www.add.re.kr/kps'>add</ImgBox>
          <ImgBox location='https://www.kict.re.kr/'>kict</ImgBox>
          <ImgBox location='http://www.ji-in.co.kr/'>jiin</ImgBox>
          <ImgBox location='http://seoilen.com/'>seoil</ImgBox>
          <ImgBox location='https://gsil.kr/'>gsil</ImgBox>
          <ImgBox location='http://www.aikl.co.kr/?act=main'>aikl</ImgBox>
          <ImgBox location='https://pntbiz.co.kr/'>pnt</ImgBox>
          <ImgBox location='https://www.mmu.ac.kr/main'>mokpo</ImgBox>
          <ImgBox location='https://www.gachon.ac.kr/kor/index.do'>gachon</ImgBox>
        </div>
      </div>
    </div>
  );
}

const ImgBox = ({location, children} : {location: string, children: string}) => {
  const clickHandler = () => { window.open(`${location}`, '_blank') }
  return (
    <div className='border w-72 h-20 mr-7 relative hover:cursor-pointer'
      onClick={clickHandler}>
      <img className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] lg:h-[80%] sm:h-[40%]' alt='logo' src={require(`../assets/images/${children}.png`)} />
    </div>
  )
}