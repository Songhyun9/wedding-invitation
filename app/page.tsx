'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [showClick, setShowClick] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      router.push('/main');
    }, 7000);

    setTimeout(() => {
      setShowClick(true);
    }, 3500);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="pixel-animation-container w-full">
        <div className="love"></div>
        <div className="groom"></div>
        <div className="bride"></div>
        <div
          onClick={() => {
            router.push('/main');
          }}
          className="absolute w-[200px] h-[140px] mb-28 cursor-pointer"
        ></div>
        {showClick && <p className="absolute text-2xl font-bold font_pixelify_sans mb-24 ml-44">{'< click!'}</p>}
        <p className="absolute text-7xl font-bold font_pixelify_sans mb-[400px]">10.26</p>
      </div>
    </div>
  );
};

export default HomePage;
