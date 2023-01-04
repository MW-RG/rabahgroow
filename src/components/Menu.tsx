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
    <div className='w-[15%] h-auto pt-14 pb-72 bg-blue-400 text-center'>
      <div>
        <div className='text-white font-semibold text-2xl mb-10 max-lg:hidden'>- Company -</div>
        <div className='text-white font-semibold text-2xl mb-10 lg:hidden'>Company</div>
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
      </div>
    </div>
  );
}

export function BizMenu({thisPage} : {thisPage: string}) {
  const [isHover, setIsHover] = useState<string>(thisPage);

  return (
    <div className=' w-[15%] h-auto pt-14 pb-72 bg-blue-400 text-center'>
      <div>
        <div className='text-white font-semibold text-2xl mb-10 max-lg:hidden'>- Business {<br/>}& AI Tech -</div>
        <div className='text-white font-semibold text-2xl mb-10 lg:hidden'>Business {<br/>}& AI Tech</div>
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
      </div>
    </div>
  );
}

const SelectLi = ({setIsHover, location, thisPage, children} : Props) => {
  const clickHandler = (param : string) => () => {
    window.location.href = param;
  }
  return(
    <div
      onMouseOver={() => { setIsHover(`${children}`) }}
      onMouseOut={() => { setIsHover(`${thisPage}`) }}
    >
      <button
        className='text-white outline outline-offset-8 outline-white rounded-sm font-semibold lg:text-2xl sm:text-[1rem] mb-8'
        onClick={clickHandler(`${location}`)}
      >{children}</button>
    </div>
  )
}

const Li = ({setIsHover, thisPage, children} : Props) => {
  return(
    <div
      onMouseOver={() => { setIsHover(`${children}`) }}
      onMouseOut={() => { setIsHover(`${thisPage}`) }}
    >
      <button
        className='text-white font-semibold lg:text-2xl sm:text-[1rem] mb-8'
      >{children}</button>
    </div>
  )
}