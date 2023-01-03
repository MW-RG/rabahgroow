import React, { SetStateAction, useState } from 'react';

interface Props {
  setIsHover: React.Dispatch<SetStateAction<string>>;
  location?: string;
  thisPage?: string;
  children: string;
}

export function CoMenu({thisPage} : {thisPage: string}) {
  const [isHover, setIsHover] = useState<string>(thisPage);

  return (
    <div className=' w-[15%] pt-14 bg-blue-400 text-center'>
      <ul>
        <li className='text-white font-semibold text-2xl mb-5'>- Company -</li>
        {isHover === '회사개요'
        ? <SelectLi setIsHover={setIsHover} thisPage={`${thisPage}`} location={'overview'}>회사개요</SelectLi>
        : <Li setIsHover={setIsHover}>회사개요</Li>}
        {isHover === '회사연혁'
        ? <SelectLi setIsHover={setIsHover} thisPage={`${thisPage}`} location={'history'}>회사연혁</SelectLi>
        : <Li setIsHover={setIsHover}>회사연혁</Li>}
        {isHover === '회사비전'
        ? <SelectLi setIsHover={setIsHover} thisPage={`${thisPage}`} location={'vision'}>회사비전</SelectLi>
        : <Li setIsHover={setIsHover}>회사비전</Li>}
        {isHover === '협력기관'
        ? <SelectLi setIsHover={setIsHover} thisPage={`${thisPage}`} location={'partner'}>협력기관</SelectLi>
        : <Li setIsHover={setIsHover}>협력기관</Li>}
      </ul>
    </div>
  );
}

const SelectLi = ({setIsHover, location, thisPage, children} : Props) => {
  const clickHandler = (param : string) => () => {
    window.location.href = param;
  }
  return(
    <li
      className='text-blue-500 font-semibold text-2xl mb-5 pt-3 bg-white h-14 w-36 m-auto hover:cursor-pointer'
      onMouseOver={() => { setIsHover(`${children}`) }}
      onMouseOut={() => { setIsHover(`${thisPage}`) }}
      onClick={clickHandler(`${location}`)}
    >{children}</li>
  )
}

const Li = ({setIsHover, thisPage, children} : Props) => {
  return(
    <li
      className='text-white font-semibold text-2xl mb-5 hover:cursor-pointer'
      onMouseOver={() => { setIsHover(`${children}`) }}
      onMouseOut={() => { setIsHover(`${thisPage}`) }}
    >{children}</li>
  )
}