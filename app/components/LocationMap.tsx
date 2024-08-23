import React, { useState, useEffect } from 'react';
import useKakaoLoader from '../hooks/use-kakao-loader';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// Custom Alert component
const Alert = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed z-10 bottom-4 left-1/2 transform -translate-x-1/2 bg-[#444444]/50 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  );
};

export const LocationMap = () => {
  useKakaoLoader();
  const [showAlert, setShowAlert] = useState(false);

  const address = '경기 성남시 분당구 서현로 429번길 37';

  const copyAddress = () => {
    navigator.clipboard.writeText(address).then(() => {
      setShowAlert(true);
    });
  };

  return (
    <div className="mt-10 mb-16 px-10 flex flex-col gap-10">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center ">Location</p>

      <p className="font_gowun_dodum font-extrabold text-lg w-full text-center ">오시는 길</p>

      <hr className="border-t border-dashed " />

      <p className="font_gowun_dodum w-full text-center  ">
        {address} <br />
        분당소망교회
      </p>

      <div className="flex flex-col items-center justify-center">
        <button
          className="p-1.5 text-sm border-solid font_gowun_dodum border-[#e5e5e5] border min-w-24 mb-2 rounded-sm bg-white"
          onClick={copyAddress}
        >
          주소복사
        </button>
      </div>

      <Map
        id="map"
        center={{
          lat: 37.3776936,
          lng: 127.1453257,
        }}
        style={{
          width: '100%',
          height: '350px',
        }}
        level={3}
      >
        <MapMarker
          position={{
            lat: 37.3776936,
            lng: 127.1453257,
          }}
        />
      </Map>

      {showAlert && <Alert message="주소를 복사했습니다." onClose={() => setShowAlert(false)} />}
    </div>
  );
};
