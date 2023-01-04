import React from 'react';
import { CoMenu } from '../components/Menu';

export default function CoHistory() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <CoMenu thisPage='회사연혁' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-44 pt-28 pl-20 text-3xl font-bold'>{'<'} 회사연혁 {'>'}</div>
        <div className='bg-slate-200 h-10 pt-3 pl-20 text-xl font-bold'>최고의 <span className='text-red-500'>IT R&D 서비스 전문기업</span>을 위한 발걸음</div>
        <div className='bg-slate-200 h-20 pt-3 pb-10 pl-20 pr-20 text-xl'>우리는 사이버보안, 국방, 건설안전분야에서 R&D 서비스 및 S/W 개발 전문 기업으로 나아가고 있습니다.</div>
        <div className='flex pt-7 lg:pl-20 sm:pl-10 pr-20 items-center pb-3'>
          <div className='font-bold text-center'>
            <p>1st Generation</p>
            <p>기업성장 기반 구축</p>
          </div>
          <div className=' border-l-2 ml-7 mr-7 border-blue-300 border-dashed h-20' />
          <div>
            <p>2018 <span className='pl-5'>라바그루(주) 설립</span></p>
            <p>2018 <span className='pl-5'>창업선도대학 과제 수행</span></p>
            <p>2022 <span className='pl-5'>중소기업 확인 등록, 프로그램 등록</span></p>
          </div>
        </div>
        <div className='flex pt-3 pb-3 pl-20 pr-20 bg-blue-500 text-white items-center'>
          <div className='font-bold text-center'>
            <p>2st Generation</p>
            <p>최고의 IT R&D</p>
            <p>서비스 기업으로 성장</p>
          </div>
          <div className=' border-l-2 ml-7 mr-7 border-white border-dashed h-72' />
          <div>
            <p>2019 <span className='pl-5'>
              Rancidity Analysis Management System Based on Machine Learning Using IoT Rancidity Sensors(Sensors and Materials –SCIE)
            </span></p>
            <p>2020 <span className='pl-5'>특허 – 공격 주체 분류 장치 및 방법 (국방과학연구소)</span></p>
            <p>2020 <span className='pl-5'>
              특허 – 다중 선형 회귀를 이용한 해수욕장 위험도 평가 시스템 및 방법과, 이를 위한 컴퓨터 프로그램 (가천대학교 산학협력단)
            </span></p>
            <p>2021 <span className='pl-5'>
              특허 – 상황인식 및 퍼지이론 기반의 해수욕장 위험도 평가 시스템 및 방법과, 이를 위한 컴퓨터 프로그램 (가천대학교 산학협력단)
            </span></p>
            <p>2021 <span className='pl-5'>
              교량 손상 관리를 위한 딥러닝 기반의 교량이미지 전처리 및 손상객체 자동검출 모델(논문 등)
            </span></p>
            <p>2022 <span className='pl-5'>
              GPU기반 그래프 데이터 병렬처리 프로그램 등록 (C-2022-024334)
            </span></p>
            <p>2022 <span className='pl-5'>
              Deep(심층) 강화 학습을 위한 그래프 분석 모듈 프로그램 등록 (C-2022-025739)
            </span></p>
            <p>2022 <span className='pl-5'>
              Network Security Node-Edge Scoring System Using Attack Graph Based on Vulnerability Correlation(Applied Sciences-SCIE)
            </span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

