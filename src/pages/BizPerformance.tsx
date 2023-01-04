import React from 'react';
import { BizMenu } from '../components/Menu';

export default function BizData() {
  return (
    <div className='mt-5 flex z-10 h-auto'>
      <BizMenu thisPage='프로젝트실적' />
      <div className='w-full'>
        <div className='bg-slate-200 text-blue-500 h-28 pt-10 pl-20 text-3xl font-bold'>{'<'} 프로젝트 주요 실적 {'>'}</div>
        <div className='bg-slate-200 lg:h-24 sm:h-28 pt-3 pb-5 pl-20 pr-20 text-xl'>
          끊임없는 연구와 신속한 대응으로 <span className='text-blue-400'>시스템 요구사항을 100% 달성</span>하고 있습니다.
        </div>
        <Table />
      </div>
    </div>
  );
}

const Table = () => {
  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className="divide-y divide-gray-500 ">
              <thead className="bg-blue-400">
                <tr>
                  <th className="px-6 py-2 text-xl text-white">
                    구분
                  </th>
                  <th className="px-6 py-2 text-xl text-white">
                    사업명
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                <tr className="whitespace-nowrap">
                  <Category>국방</Category><Project>사이버지휘통제 방책분석 알고리즘 성능 분석 및 개선</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>국방</Category><Project>사이버 지휘통제 실시간 의사결정지원 기술 - 알고리즘 연구</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>국방</Category><Project>공격경로기반 공격분석을 위한 머신러닝 모델 개발</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>국방</Category><Project>AI 기반 사이버 모의훈련  및 공격 시나리오 분석 기술 개발</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>AI</Category><Project>뉴럴 네트웤크 이미지 프로세싱을 위한 데이터셋 구축</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>AI</Category><Project>도로 시설물 객체 인식을 위한 딥러닝 모델 설계 및 S/W개발</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>안전</Category><Project>스마트 동적 위험 예측 시스템 개발</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>AI</Category><Project>GPU기반 병렬처리를 기반한 상황분석용 딥러닝 모델 개발</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>AI</Category><Project>인공지능 머신러닝 기반 실시간 영상 처리 모듈 개발</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>국방</Category><Project>공세적 대응방책 추천 및 공세적도구 관련 기술 조사 및 분석</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>안전</Category><Project>해수욕장 안전지식 플랫폼 및 웹서비스</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>AI</Category><Project>덴디 : 치과 파노라마 방사선 분석 AI</Project>
                </tr>
                <tr className="whitespace-nowrap">
                  <Category>안전</Category><Project>수집 데이터 분석 알고리즘 개발 및 데이터 서버 구축</Project>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const Category = ({ children }: { children: string }) => {
  return (
    <td className="px-14 py-4 text-lg text-gray-500">
      {children}
    </td>
  )
}

const Project = ({ children }: { children: string }) => {
  return (
    <td className="px-24 py-4 text-lg text-gray-900">
      {children}
    </td>
  )
}