import React from 'react';
import { GalleryItem } from '../types';

interface GalleryCardProps {
  item: GalleryItem;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item }) => {
  return (
    <div className="gallery-item rounded-lg overflow-hidden h-72 md:h-80 group">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs bg-cena-red px-2 py-1 rounded-sm">{item.year}</span>
          <span className="text-xs bg-black bg-opacity-60 px-2 py-1 rounded-full">
            #{item.id}
          </span>
        </div>
        <h3 className="text-xl font-bebas tracking-wide">{item.title}</h3>
        <p className="text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default GalleryCard;