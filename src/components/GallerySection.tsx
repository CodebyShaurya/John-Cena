import React from 'react';
import { GalleryItem } from '../types';
import GalleryCard from './GalleryCard';

const GallerySection: React.FC = () => {
  const careerHighlights: GalleryItem[] = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/M/MV5BNmE2NDdlNTktNTU0Zi00ZDhjLWE2NTMtYmY2YTU1ZjkxNTdkXkEyXkFqcGc@._V1_.jpg",
      title: "WWE Debut",
      year: "2002",
      description: "John Cena made his SmackDown debut against Kurt Angle."
    },
    {
      id: 2,
      image: "https://i.ytimg.com/vi/D4xLTI8yYaM/maxresdefault.jpg",
      title: "First WWE Championship",
      year: "2005",
      description: "Cena won his first WWE Championship at WrestleMania 21."
    },
    {
      id: 3,
      image: "https://static0.thesportsterimages.com/wordpress/wp-content/uploads/2023/01/john-cena-royal-rumble-2008-cropped.jpg",
      title: "Royal Rumble Victory",
      year: "2008",
      description: "Won the Royal Rumble as a surprise #30 entrant."
    },
    {
      id: 4,
      image: "https://www.wwe.com/f/styles/gallery_img_l/public/photo/image/2012/04/WM28_Photo_334.jpg",
      title: "Rivalry with The Rock",
      year: "2012-2013",
      description: "Epic two-year feud culminating at WrestleMania 29."
    },
    {
      id: 5,
      image: "https://scontent.fdel8-2.fna.fbcdn.net/v/t39.30808-6/485614930_1871995673569235_2674548960199130777_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=87Qdb7opHoEQ7kNvwFcPQ58&_nc_oc=AdlgWVenrdxXrp2a9hJhmwB7yw5HbCZKXcIhHiHU9uGNCzNYkE5whRAXvIUQijl90s8&_nc_zt=23&_nc_ht=scontent.fdel8-2.fna&_nc_gid=GSGGm2YfHu1IOCqE8ErIOg&oh=00_AfJ-SztVqvaSXUqDLaH4J9jyvQx8tjzXJHg7oN5iyaFnhg&oe=6826DBE6",
      title: "16-Time World Champion",
      year: "2017",
      description: "Tied Ric Flair's record by defeating AJ Styles at Royal Rumble."
    },
    {
      id: 6,
      image: "https://i.ytimg.com/vi/bh9197p2-rc/maxresdefault.jpg",
      title: "Return at Money in the Bank",
      year: "2021",
      description: "Surprised fans with his return after a long hiatus."
    },
    {
      id: 7,
      image: "https://cdn.vox-cdn.com/thumbor/4Ll2nnQsZ9QgdWZ0z2VRFxqQs3I=/0x0:1772x947/1200x800/filters:focal(737x494:1019x776)/cdn.vox-cdn.com/uploads/chorus_image/image/73518861/Screenshot_2024_08_13_at_12.48.51_PM.0.png",
      title: "Retirement Announcement",
      year: "2023",
      description: "Announced his retirement tour at WWE Raw."
    },
    {
      id: 8,
      image: "https://scontent.fdel8-1.fna.fbcdn.net/v/t39.30808-6/491865580_1103079511839004_1216561748529453558_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mMMLi3COVk4Q7kNvwE3HMqD&_nc_oc=AdlXuC92SWjl7dFn6PYhW3gdf-rKgW3nEyNiFsutNwyvs_m__RbiDRg7RCv-GN-pdcc&_nc_zt=23&_nc_ht=scontent.fdel8-1.fna&_nc_gid=Goaq12soMMbWhxvNRkxHAQ&oh=00_AfIVOOQw9JnF5GDhw6F_YFlcTnccca3EUt_qakFhEr0PbA&oe=6826ED87",
      title: "Farewell Tour Begins",
      year: "2024",
      description: "The beginning of John Cena's final run in WWE."
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bebas text-center mb-12">
          <span className="text-white">CAREER</span> <span className="text-cena-red">HIGHLIGHTS</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerHighlights.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl font-montserrat max-w-3xl mx-auto text-gray-300">
            For over two decades, John Cena has been the face of WWE, inspiring millions with his never-give-up attitude and tireless work ethic. As his in-ring career comes to a close, we celebrate his legendary contribution to sports entertainment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;