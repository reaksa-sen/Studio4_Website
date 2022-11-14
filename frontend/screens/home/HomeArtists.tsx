import { Heading } from 'components/Heading';
import Image from 'next/image';
const items = [
  {
    img: '/images/1.webp',
    name: 'artists1'
  },
  {
    img: '/images/2.webp',
    name: 'artists2'
  },
  {
    img: '/images/3.webp',
    name: 'artists3'
  },
  {
    img: '/images/4.webp',
    name: 'artists4'
  }
];

const ArtistItems: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {items.map((a, i) => (
        <div key={i} className="p-3 px-5">
          <Image
            className="cursor-pointer rounded-full"
            src={a.img}
            alt={a.name}
            height={1}
            width={1}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export const HomeArtists: React.FC = () => {
  return (
    <div>
      <div className="container py-4 px-8">
        <Heading text={'Artists'} link="/" />
        <ArtistItems />
      </div>
    </div>
  );
};
