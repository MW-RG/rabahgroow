import React, { useEffect, useState } from 'react';
import { MdArrowBackIos } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'

export default function Main() {
  return (
    <div className='mt-5'>      
      <Banner />
    </div>
  );
}

const Banner = () => {
  const [buttonDisplay, setButtonDisplay] = useState<boolean>(false);
  const [img, setImg] = useState<number>(1);
  const [imgClass, setImgClass] = useState<string>('w-full h-full');
  const imgLeftHandler = () => { img === 1 ? setImg(5) : setImg(img - 1) }
  const imgRightHandler = () => { img === 5 ? setImg(1) : setImg(img + 1) }
  // const slide = useEffect(() => {
  //   setTimeout(imgRightHandler, 1000 * 30);
  // }, [img]);
  const imgAni = useEffect(() => {
    setImgClass('w-full h-full animate-bannerImg')
    setTimeout(() => setImgClass('w-full h-full'), 1000)
  }, [img])
  

  return(
    <div
      onMouseOver={ () => setButtonDisplay(true) }
      onMouseOut={ () => setButtonDisplay(false) }
      className='relative'
    >
      <img alt="banner" src={require(`../assets/images/banner${img}.png`)} className={imgClass} />
      {buttonDisplay
        ? <div>
            <div className='absolute top-48 left-5 animate-buttonDisplay hover:cursor-pointer'>
              <MdArrowBackIos className='text-[#E5DFDF]' size="110" onClick={imgLeftHandler}/>
            </div>
            <div className='absolute top-48 right-5 animate-buttonDisplay hover:cursor-pointer'>
              <MdArrowForwardIos className='text-[#E5DFDF]' size="110" onClick={imgRightHandler}/>            
            </div>
          </div>
        : null
      }
    </div>
  )
}