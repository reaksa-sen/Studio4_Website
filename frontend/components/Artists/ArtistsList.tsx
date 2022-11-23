import { ArtistAttribute } from 'api/interface';
import Link from 'next/link';
import React, { Fragment } from 'react';
import NextImage from '../Image';
import Image from 'next/image';

interface ItemProps {
  id: number;
  fullname: string;
  image: any;
  // roles: string;
  // delay?: number;
}
const items = [
  {
    img: '/images/1.webp',
    alt: 'artists1',
    fullname: 'Chhin Monineath',
    roles: 'actor'
  },
  {
    img: '/images/2.webp',
    alt: 'artists2',
    fullname: 'Ella',
    roles: 'actor'
  },
  {
    img: '/images/3.webp',
    alt: 'artists3',
    fullname: 'Ken Veasna',
    roles: 'actor'
  },
  {
    img: '/images/4.webp',
    alt: 'artists4',
    fullname: 'Heng Canetha',
    roles: 'actor'
  }
  // {
  //   img: '/images/1.webp',
  //   alt: 'artists1',
  //   fullname: 'Chhin Monineath',
  //   roles: 'actor'
  // },
  // {
  //   img: '/images/2.webp',
  //   alt: 'artists2',
  //   fullname: 'Ella',
  //   roles: 'actor'
  // },
  // {
  //   img: '/images/3.webp',
  //   alt: 'artists3',
  //   fullname: 'Ken Veasna',
  //   roles: 'actor'
  // },
  // {
  //   img: '/images/4.webp',
  //   alt: 'artists4',
  //   fullname: 'Heng Canetha',
  //   roles: 'actor'
  // }
];

export const ArtistsListItem: React.FC<ItemProps> = ({ id, fullname, image }) => {
  return (
    <>
      <Link href={`/artists/${id}`}>
        <div className="grid grid-cols-2 gap-y-5 gap-x-5 md:grid-cols-3 md:gap-x-10 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-full ">
            <div className="absolute z-10 h-full w-full cursor-pointer rounded-full opacity-50 transition duration-300 ease-in-out group-hover:scale-105 group-hover:bg-black"></div>
            <NextImage
              className="cursor-pointer rounded-full transition duration-300 ease-in-out group-hover:scale-105"
              alt={fullname}
              image={image}
              width={1}
              height={1}
              size={'M'}
              layout={'responsive'}
              objectFit="cover"
            />
            <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-white group-hover:block">
              <div className="cursor-pointer p-4 text-xl hover:text-primary-500 group-hover:underline">
                {fullname}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export const ArtistsList: React.FC<{ artist: ArtistAttribute[] }> = ({ artist }) => {
  return (
    <div>
      {artist.map((item, i) => (
        <Fragment key={i}>
          <ArtistsListItem
            id={0}
            fullname={item.attributes.fullname}
            image={item.attributes.image}
          />
        </Fragment>
      ))}
    </div>
  );
};
