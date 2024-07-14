'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      router.push('/main');
    }, 2000);
  }, []);

  return (
    <div className="w-full h-full">
      <div className="pixel-animation-container w-full">
        <div className="love"></div>
        <div className="groom"></div>
        <div className="bride"></div>
      </div>
    </div>
  );
};

export default HomePage;
