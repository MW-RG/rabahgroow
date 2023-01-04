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
    <div className=' w-[15%] pt-14 pb-96 bg-blue-400 text-center'>
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

export function BizMenu({thisPage} : {thisPage: string}) {
  const [isHover, setIsHover] = useState<string>(thisPage);

  return (
    <div className=' w-[15%] pt-14 h-auto pb-72 bg-blue-400 text-center'>
      <ul>
        <li className='text-white font-semibold text-2xl mb-5'>- Company -</li>
        {isHover === '국방/사이버보안'
        ? <SelectLi setIsHover={setIsHover} thisPage={`${thisPage}`} location={'biz-security'}>국방/사이버보안</SelectLi>
        : <Li setIsHover={setIsHover}>국방/사이버보안</Li>}
        {isHover === '건설/안전'
        ? <SelectLi setIsHover={setIsHover} thisPage={`${thisPage}`} location={'biz-safety'}>건설/안전</SelectLi>
        : <Li setIsHover={setIsHover}>건설/안전</Li>}
        {isHover === '데이터'
        ? <SelectLi setIsHover={setIsHover} thisPage={`${thisPage}`} location={'biz-data'}>데이터</SelectLi>
        : <Li setIsHover={setIsHover}>데이터</Li>}
        {isHover === '프로젝트실적'
        ? <SelectLi setIsHover={setIsHover} thisPage={`${thisPage}`} location={'performance'}>프로젝트실적</SelectLi>
        : <Li setIsHover={setIsHover}>프로젝트실적</Li>}
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
      className='text-blue-500 font-semibold lg:text-2xl sm:text-xl mb-5 pt-3 bg-white h-14 w-40 m-auto hover:cursor-pointer'
      onMouseOver={() => { setIsHover(`${children}`) }}
      onMouseOut={() => { setIsHover(`${thisPage}`) }}
      onClick={clickHandler(`${location}`)}
    >{children}</li>
  )
}

const Li = ({setIsHover, thisPage, children} : Props) => {
  return(
    <li
      className='text-white font-semibold lg:text-2xl sm:text-xl mb-5 hover:cursor-pointer'
      onMouseOver={() => { setIsHover(`${children}`) }}
      onMouseOut={() => { setIsHover(`${thisPage}`) }}
    >{children}</li>
  )
}