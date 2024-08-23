'use client';

import React from 'react';
import useKakaoLoader from '../hooks/use-kakao-loader';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export const LocationMap = () => {
  useKakaoLoader();

  return (
    <div className="mt-10 mb-16 px-10">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center pb-10">Location</p>

      <p className="font_gowun_dodum font-extrabold text-lg w-full text-center pb-10">오시는 길</p>

      <hr className="border-t border-dashed pb-10" />

      <p className="font_gowun_dodum w-full text-center pb-10 ">
        경기 성남시 분당구 서현로 429번길 37
        <br /> 분당소망교회
      </p>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.3776936,
          lng: 127.1453257,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '350px',
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: 37.3776936,
            lng: 127.1453257,
          }}
        />
      </Map>
    </div>
  );
};
