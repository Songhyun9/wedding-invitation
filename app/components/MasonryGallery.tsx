import React from 'react';

interface Image {
  src: string;
  alt: string;
}

interface MasonryGalleryProps {
  images: Image[];
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  const groupedImages = images.reduce((acc, image, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(image);
    return acc;
  }, [] as Image[][]);

  return (
    <div className="mt-10 mb-16">
      <p className="font_parisienne text-[#d099a1] tracking-[.20em] text-center pb-10">Gallery</p>
      <div className="relative h-[500px] overflow-x-auto overflow-y-hidden">
        <div className="flex gap-4 p-4">
          {groupedImages.map((group, groupIndex) => (
            <div key={groupIndex} className="grid grid-cols-1 gap-2 min-w-[100px]">
              {group.map((image, imageIndex) => (
                <img
                  key={`${groupIndex}-${imageIndex}`}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
