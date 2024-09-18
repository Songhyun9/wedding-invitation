import React, { useState } from 'react';
import Image from 'next/image';

export const Information = () => {
  return (
    <div className="pt-10 mb-16 flex flex-col gap-10 font_gowun_dodum">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center">Information</p>
      <p className="font-extrabold text-lg w-full text-center">안내 사항</p>
      <p className="w-full text-center leading-8">
        교회 로비 공간이 협소하여 화환은 정중히 사양합니다. <br />
        신부대기실 옆에 포토부스가 설치될 예정이니
        <br /> 좋은 추억 남기고 가시길 바랍니다
        <div className="w-full flex justify-center mt-10">
          <Image width={100} height={100} src={'/photobooth.webp'} alt="main" />
        </div>
      </p>
    </div>
  );
};
