import { SupportMenu } from '../components/Menu';
import { IoMdSubway } from 'react-icons/io'
import { IoMdBus } from 'react-icons/io'
import NaverMap from '../components/NaverMap';


export default function ComingWay() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <SupportMenu thisPage='오시는길' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-28 pt-10 pl-20 text-3xl font-bold'>{'<'} 오시는길 {'>'}</div>
        <div className='bg-slate-200 lg:h-24 sm:h-28 pt-3 pb-5 pl-20 pr-20 text-xl font-bold'>
          라바그루(주)와 함께라면 <span className='text-red-400'>R&D 경쟁우위를 확보</span>하실 수 있습니다.
        </div>
        <div className='min-[1610px]:flex'>
          <div className='mt-5 ml-20'>
            <p className='text-xl font-semibold mb-5'>Contact</p>
            <p className='text-lg'>TEL<span className='text-base ml-16'>02. 541. 8145 / 010. 9248. 8145(대표이사 홍성삼)</span></p>
            <p className='text-lg'>ADDRESS<span className='text-base ml-3'>서울특별시 강남구 광평로 56길 8-13</span></p>
            <p className='mt-7 mb-5 text-xl font-semibold'>Public transport</p>
            <p className='font-semibold text-lg mb-3'><IoMdSubway className='inline-block text-orange-500' size={25} />수서역(3호선/분당선) 4번 출구</p>
            <p className='ml-6 mb-5'>수서역 4번 출구 하차 투썸플레이스(수서점) 방향으로 도보 1분</p>
            <p className='font-semibold text-lg mb-3'><IoMdBus className='inline-block text-green-500' size={25} />3416번 / 2412번 / 강남06번</p>
            <p className='ml-6 mb-7'>수서역 5번 출구, 수서역 로즈데일빌딩 방면 하차 후 직진 방향으로 도보 1분</p>
          </div>
          <div className='max-[1610px]:ml-20 max-[1610px]:mb-7'>
            <NaverMap />
          </div>
        </div>
      </div>
    </div>
  );
}