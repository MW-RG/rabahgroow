import React, { SetStateAction, useState } from 'react';
import logo from '../assets/images/logo512.png'

interface Props {
  setIsHover : React.Dispatch<SetStateAction<boolean>>;
}

export default function Navbar() {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div>
      {isHover? <NavbarOn setIsHover={setIsHover} /> : <NavbarOff setIsHover={setIsHover} />}
    </div>
  );
}

const NavbarOff = ({setIsHover} : Props) => {
  const titleCo = 'mr-14 text-2xl font-semibold text-blue-500 hover:cursor-pointe';
  const titleBiz = 'mr-14 text-2xl font-semibold text-blue-500 hover:cursor-pointer';
  const titleSupport = 'mr-28 text-2xl font-semibold text-blue-500 hover:cursor-pointer';
  const clickHandler = () => { window.location.href = '/' }

  return (
    <div className='h-20 flex justify-between items-center mt-5'>
      <div onClick={clickHandler}><img alt="logo" src={logo} className='w-40 h-20 ml-6 hover:cursor-pointer' /></div>
      <div
        onMouseOver={() => setIsHover(true) }
        onMouseOut={() => setIsHover(false) }
        className='flex'
      >
        <p className={titleCo}>Company</p>
        <p className={titleBiz}>Business & AI Tech</p>
        <p className={titleSupport}>Support</p>
      </div>
    </div>
  )
}

const NavbarOn = ({setIsHover} : Props) => {
  const titleCo = 'mr-14 text-2xl font-semibold text-blue-500 hover:cursor-pointer';
  const titleBiz = 'mr-14 text-2xl font-semibold text-blue-500 hover:cursor-pointer';
  const titleSupport = 'mr-28 text-2xl font-semibold text-blue-500 hover:cursor-pointer';
  const clickHandler = () => { window.location.href = '/' }

  return (
    <div>
      <div className='h-20 flex justify-between items-center mt-5 mb-5'>
        <div onClick={clickHandler}><img alt="logo" src={logo} className='w-40 h-20 ml-6 hover:cursor-pointer' /></div>
        <div className='flex h-[100%] items-center'
          onMouseOver={() => setIsHover(true) }
          onMouseOut={() => setIsHover(false) }
        >
          <p className={titleCo}>Company</p>
          <p className={titleBiz}>Business & AI Tech</p>
          <p className={titleSupport}>Support</p>
        </div>
      </div>
      <div
        className='flex bg-white text-center right-11 absolute z-20 animate-navbar'
        onMouseOver={() => setIsHover(true) }
        onMouseOut={() => setIsHover(false) }
      >
        <div className='mr-20 pl-5'>
          <Button location={'overview'}>????????????</Button>
          <Button location={'history'}>????????????</Button>
          <Button location={'vision'}>????????????</Button>
          <Button location={'partner'}>????????????</Button>
        </div>
        <div className='mr-20'>
          <Button location={'biz-security'}>??????/??????????????? ??????</Button>
          <Button location={'biz-safety'}>??????/?????? ??????</Button>
          <Button location={'biz-data'}>????????? ?????? ??????</Button>
          <Button location={'performance'}>???????????? ??????</Button>
        </div>
        <div className='mr-16'>
          <Button location={'alliance'}>????????????</Button>
          <Button location={'coming-way'}>????????????</Button>
        </div>
      </div>
    </div>
  )
}

function Button({children, location} : {children : string, location : string}) {
  const clickHandler = (param : string) => () => {
    param !== 'home' ? window.location.href = param : window.location.href = '/'
  }
  return (
    <div>
      <button className='text-blue-500 font-normal hover:text-blue-700 hover:font-semibold py-2 px-4 rounded"' onClick={clickHandler(`${location}`)}>{children}</button>
    </div>
  )
}