'use client';

import Image from 'next/image';
import CircleTop from '../components/CircleTop';
import { useAudio } from '../hooks/useAudio';
import AudioControl from '../components/AudioControl';
import CircleBottom from '../components/CircleBottom';
import Calendar from '../components/Calendar';
import { MasonryGallery } from '../components/MasonryGallery';
import { useState } from 'react';
import ContactModal from '../components/ContactModal';
import { LocationMap } from '../components/LocationMap';

export default function Home() {
  const { isPlaying, handlePlayPause } = useAudio('/music.mp3');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    { src: '/gallery/1.webp', alt: 'wedding1' },
    { src: '/gallery/2.webp', alt: 'wedding2' },
    { src: '/gallery/3.webp', alt: 'wedding3' },
    { src: '/gallery/4.webp', alt: 'wedding4' },
    { src: '/gallery/5.webp', alt: 'wedding5' },
    { src: '/gallery/6.webp', alt: 'wedding6' },
    { src: '/gallery/7.webp', alt: 'wedding7' },
    { src: '/gallery/8.webp', alt: 'wedding8' },
    { src: '/gallery/9.webp', alt: 'wedding9' },
    { src: '/gallery/10.webp', alt: 'wedding10' },
    { src: '/gallery/11.webp', alt: 'wedding11' },
    { src: '/gallery/12.webp', alt: 'wedding12' },
    { src: '/gallery/13.webp', alt: 'wedding13' },
    { src: '/gallery/14.webp', alt: 'wedding14' },
    { src: '/gallery/15.webp', alt: 'wedding15' },
    { src: '/gallery/16.webp', alt: 'wedding16' },
    { src: '/gallery/17.webp', alt: 'wedding17' },
    { src: '/gallery/18.webp', alt: 'wedding18' },
    { src: '/gallery/19.webp', alt: 'wedding19' },
    { src: '/gallery/20.webp', alt: 'wedding20' },
    { src: '/gallery/21.webp', alt: 'wedding21' },
  ];

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
          이등록 <span className="text-xs px-2.5">|</span>유하진
        </p>
        <div className="my-12 w-fit mx-auto relative flex p-4 shadow-[1.5px_2.6px_8.8px_0.2px_rgba(54,54,54,0.15)]">
          <Image width={320} height={400} src={'/main.webp'} alt="main" />
        </div>
        {/* <p className="font_mrs-saint-delafield text-3xl w-full text-center">Deungrok and Hajin</p> */}
        <p className=" leading-8 font_gowun_dodum w-full text-center pt-6 pb-6">
          2024년 10월 26일 토요일 오후 12시
          <br />
          분당소망교회
        </p>
        <CircleTop />
        <div className="bg-[#f9f9f9]">
          <div className=" animate-fade-up animate-once animate-ease-linear py-10 flex flex-col justify-center gap-10">
            {/* <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center">Invites you</p> */}
            <p className="font_gowun_dodum text-center leading-8">
              1년여의 짧은 시간 <br />
              서로의 삶에 대한 태도와 마음가짐,
              <br />
              열정을 보았습니다.
              <br />
              그로인해 함께 이뤄나갈 가정에 대한 기대와 꿈이 생겼습니다.
            </p>

            <p className="font_gowun_dodum text-center leading-8">
              두 사람이 하나가 되는 축복된 이 날,
              <br />
              소중한 여러분들이 자리를 빛내어 주시기를 바랍니다.
            </p>

            <p className="font_gowun_dodum text-center leading-8">
              새 출발하는 저희 부부의 증인이 되어
              <br />
              기쁨과 사랑으로 축복해주시면
              <br />큰 힘이 될 것입니다.
            </p>

            <p className="font_gowun_dodum text-center leading-8">
              <span className="text-black font-semibold">故이일성</span> ·{' '}
              <span className="text-black font-semibold">최재숙</span> 의 <span className="min-w-4">장남</span>{' '}
              <span className="text-black font-semibold">이등록</span>
              <br />
              <span className="text-black font-semibold">유종표</span> ·{' '}
              <span className="text-black font-semibold">송경란</span> 의 <span className="pl-1">차녀</span>{' '}
              <span className="text-black font-semibold">유하진</span>
              <br />
            </p>

            <div className="flex items-center justify-center">
              <button
                className="p-3 text-sm border-solid font_gowun_dodum border-[#e5e5e5] border min-w-36"
                onClick={() => setIsModalOpen(true)}
              >
                연락하기
              </button>
            </div>
          </div>
          <CircleBottom />
        </div>
        <div>
          <Calendar />
        </div>

        <div>
          <MasonryGallery images={images} />
        </div>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div>
          <LocationMap />
        </div>
      </div>
    </main>
  );
}
