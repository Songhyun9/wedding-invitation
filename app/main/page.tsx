'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CircleTop from '../components/CircleTop';
import { useAudio } from '../hooks/useAudio';
import AudioControl from '../components/AudioControl';
import CircleBottom from '../components/CircleBottom';
import Calendar from '../components/Calendar';

export default function Home() {
  const { isPlaying, handlePlayPause } = useAudio('/music.mp3');

  return (
    <main className="min-h-screen bg-[#333]">
      <div className="z-10 relative w-full max-w-[440px] py-10 bg-white items-center mx-auto justify-between h-full text-[#222222] ">
        <AudioControl isPlaying={isPlaying} handlePlayPause={handlePlayPause} />
        <p className="text-[6px] w-full text-center justify-center flex gap-1.5 font_cormorant">
          {'WEDDING INVITATION'.split('').map((char, index) => (
            <span key={char + index}>{char}</span>
          ))}
        </p>
        <p className="font_gowun_dodum text-center mt-3 tracking-[.15em] flex justify-center items-center">
          유하진 <span className="text-xs px-2.5">|</span> 이등록
        </p>
        <div className="my-12 w-fit mx-auto relative flex p-4 shadow-[1.5px_2.6px_8.8px_0.2px_rgba(54,54,54,0.15)]">
          <Image width={320} height={400} src={'/main.webp'} alt="main" />
        </div>
        <p className="font_mrs-saint-delafield text-3xl w-full text-center">Deungrok and Hajin</p>
        <p className=" leading-8 font_gowun_dodum w-full text-center pt-6 pb-6">
          2024년 10월 26일 토요일 오후 0시 00분
          <br />
          위치와 장소
        </p>
        <CircleTop />
        <div className="bg-[#f9f9f9]">
          <div className=" animate-fade-up animate-once animate-ease-linear py-10 flex flex-col justify-center gap-10">
            <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center">Invites you</p>
            <p className="font_gowun_dodum text-center leading-8">
              사랑하는 두 사람이 같은 곳을 바라보며
              <br />
              평생 함께 걷고자 합니다.
            </p>

            <p className="font_gowun_dodum text-center leading-8">
              저희 동행의 첫걸음에 함께 하시어
              <br />
              아름답고 행복한 가정을 가꾸어 나갈 수 있도록
              <br />
              축복해 주십시오.
            </p>

            <p className="font_gowun_dodum text-center leading-8">
              <span className="text-black font-semibold">아버지</span> ·{' '}
              <span className="text-black font-semibold">어머니</span> 의 <span className="min-w-4">아들</span>{' '}
              <span className="text-black font-semibold">등록</span>
              <br />
              <span className="text-black font-semibold">아버지</span> ·{' '}
              <span className="text-black font-semibold">어머니</span> 의 <span className="pl-1">딸</span>{' '}
              <span className="text-black font-semibold">하진</span>
              <br />
            </p>
          </div>
          <CircleBottom />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </main>
  );
}
