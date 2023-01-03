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
  const imgLeftHandler = () => { img === 1 ? setImg(4) : setImg(img - 1) }
  const imgRightHandler = () => { img === 4 ? setImg(1) : setImg(img + 1) }
  useEffect(() => {
    setTimeout(imgRightHandler, 1000 * 30);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [img]);
  useEffect(() => {
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
            <div className='absolute top-[40%] left-5 animate-buttonDisplay hover:cursor-pointer'>
              <MdArrowBackIos className='text-[#E5DFDF]' size="80" onClick={imgLeftHandler}/>
            </div>
            <div className='absolute top-[40%] right-5 animate-buttonDisplay hover:cursor-pointer'>
              <MdArrowForwardIos className='text-[#E5DFDF]' size="80" onClick={imgRightHandler}/>            
            </div>
          </div>
        : null
      }
    </div>
  )
}