import React from 'react';
import { SupportMenu } from '../components/Menu';

export default function Alliance() {
  
  const emailForm = document.getElementById('emailForm');
  const onSubmit = (e: any) => {
    e.preventDefault();
    
    fetch("https://script.google.com/macros/s/AKfycbwQquFtKiciBnLcxh_7fyLVHXVnBZPDnndVsuANDS_5wJuW_SG08oAvLzd1MrxXkJ4h/exec", {
      method: "POST",
      body: new FormData(emailForm as HTMLFormElement)
    })
    .then((r) => {
      console.log(r)
      window.location.reload();
    })
  }

  return (
    <div className='mt-5 flex z-10 h-auto'>
      <SupportMenu thisPage='제휴문의' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-28 pt-10 pl-20 text-3xl font-bold'>{'<'} 제휴문의 {'>'}</div>
        <div className='bg-slate-200 lg:h-24 sm:h-28 pt-3 pb-5 pl-20 pr-20 text-xl'>
          끊임없는 연구와 신속한 대응으로 <span className='text-blue-400'>시스템 요구사항을 100% 달성</span>하고 있습니다.
        </div>
        <form id="emailForm" onSubmit={onSubmit}>
          <div className=' min-[1248px]:flex'>
            <div>
              <div className='mt-10'>
                <label className='ml-20 mr-14'>제 목</label>
                <input className='w-80 h-10 border border-black rounded-sm pl-2' type="text" name="title" />
              </div>
              <div className='mt-5'>
                <label className='ml-20 mr-12'>Email</label>
                <input className='w-80 h-10 border border-black rounded-sm pl-2' type="email" name="email" />
              </div>
            </div>
            <div>
              <div className='mt-10'>
                <div className='ml-20 mb-5'>제휴방식 및 개요</div>
                <textarea className='ml-20 w-[30rem] border border-black rounded-sm pl-2 pt-2' rows={12} name="message" />
              </div>
              <div className='mt-5 mb-7 ml-72 min-[1248px]:mr-auto'><input className='outline outline-1 outline-offset-4 rounded-sm' type="submit" value="Send" /></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}