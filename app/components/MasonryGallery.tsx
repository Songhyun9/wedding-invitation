import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  src: string;
  alt: string;
}

interface MasonryGalleryProps {
  images: Image[];
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const groupedImages = images.reduce((acc, image, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(image);
    return acc;
  }, [] as Image[][]);

  const openCarousel = (groupIndex: number, imageIndex: number) => {
    setSelectedImageIndex(groupIndex * 3 + imageIndex);
  };

  const closeCarousel = () => {
    setSelectedImageIndex(null);
  };

  const navigateCarousel = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    const newIndex =
      direction === 'prev'
        ? (selectedImageIndex - 1 + images.length) % images.length
        : (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <div className="mt-10 mb-16">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center pb-10">Gallery</p>
      <div className="relative h-[500px] overflow-x-auto overflow-y-hidden">
        <div className="flex gap-4 p-4">
          {groupedImages.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 gap-2 min-w-[100px] h-[500px]">
              {group.map((image, imageIndex) => (
                <div key={`${groupIndex}-${imageIndex}`} className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="cursor-pointer"
                    onClick={() => openCarousel(groupIndex, imageIndex)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <button className="absolute top-4 right-4 text-white" onClick={closeCarousel}>
            <X size={24} />
          </button>
          <button className="absolute left-4 text-white" onClick={() => navigateCarousel('prev')}>
            <ChevronLeft size={48} />
          </button>
          <div className="relative w-[90vw] h-[90vh]">
            <Image
              src={images[selectedImageIndex].src}
              alt={images[selectedImageIndex].alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button className="absolute right-4 text-white" onClick={() => navigateCarousel('next')}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};
