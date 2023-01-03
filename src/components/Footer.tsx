import React from 'react';
import logo from '../assets/images/logo-black.png'

export default function Footer() {
  const clickHandler = () => { window.location.href = '/' }

  return (
    <div className='w-full h-20 bg-[#f8f8f8] absolute z-0 flex items-center border bottom-0'>  
      <div onClick={clickHandler}><img alt="logo" src={logo} className='w-28 h-14 ml-80 hover:cursor-pointer' /></div>
      <div className='text-[#737373] text-sm ml-32'>
        <p>경기도 성남시 분당구 성남대로 926번길 10, 5층 R547호</p>
        <p>Copyright 2022. Rabah Groow. All rights reserved. </p>
      </div>
    </div>
  );
}

