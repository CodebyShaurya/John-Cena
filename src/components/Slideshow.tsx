import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  direction: 'left' | 'right';
}

const Slideshow: React.FC<SlideshowProps> = ({ direction }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://scontent.fdel8-1.fna.fbcdn.net/v/t39.30808-6/491865580_1103079511839004_1216561748529453558_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mMMLi3COVk4Q7kNvwE3HMqD&_nc_oc=AdlXuC92SWjl7dFn6PYhW3gdf-rKgW3nEyNiFsutNwyvs_m__RbiDRg7RCv-GN-pdcc&_nc_zt=23&_nc_ht=scontent.fdel8-1.fna&_nc_gid=Goaq12soMMbWhxvNRkxHAQ&oh=00_AfIVOOQw9JnF5GDhw6F_YFlcTnccca3EUt_qakFhEr0PbA&oe=6826ED87",
    "https://cdn.vox-cdn.com/thumbor/4Ll2nnQsZ9QgdWZ0z2VRFxqQs3I=/0x0:1772x947/1200x800/filters:focal(737x494:1019x776)/cdn.vox-cdn.com/uploads/chorus_image/image/73518861/Screenshot_2024_08_13_at_12.48.51_PM.0.png",
    "https://cdn.vox-cdn.com/thumbor/aQa041Q7PYJmdxkRcy88zPe2UIY=/170x0:1252x721/1310x873/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47523163/RAW_1143_Photo_165-791015758.0.0.0.jpg",
    "https://i.ytimg.com/vi/4jlPO9rDjp0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB_RAmrz_0l9G_VvMdWx64C8Bwwpg",
    "https://m.media-amazon.com/images/M/MV5BOTEzMzE1MDQtYTk3YS00NTgwLThmNGEtYTc1YTZkMDk2Y2FhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "https://www.usatoday.com/gcdn/authoring/authoring-images/2025/01/07/USAT/77502508007-raw-01062025-gd-43097.JPG?crop=1968,2623,x1377,y0",
    "https://i.ytimg.com/vi/D4xLTI8yYaM/maxresdefault.jpg",
    "https://www.wwe.com/f/styles/gallery_img_l/public/all/2022/06/01_Cena_0412005CA105R--a91acd5601fb4dc8929ad76e63ed2fdb.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Career Moment ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow