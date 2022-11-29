import { ArtistsResponse } from 'api/interface';
import Link from 'next/link';
import React from 'react';
import NextImage from '../Image';

interface Props {
  artists: ArtistsResponse;
}
interface ItemProps {
  id: number;
  fullname: string;
  image: any;
}

export const ArtistListItem: React.FC<ItemProps> = ({ id, fullname, image }) => {
  return (
    <>
      <Link href={`/artists/${id}`}>
        <div className="group relative overflow-hidden rounded-full ">
          <div className="absolute z-10 h-full w-full cursor-pointer rounded-full opacity-50 transition duration-300 ease-in-out group-hover:scale-105 group-hover:bg-black"></div>
          <NextImage
            className="cursor-pointer rounded-full transition duration-300 ease-in-out group-hover:scale-105"
            alt={fullname}
            image={image}
            width={1}
            height={1}
            layout={'responsive'}
            objectFit="cover"
          />
          <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-white group-hover:block">
            <div className="cursor-pointer p-4 text-xl hover:text-primary-500 group-hover:underline">
              {fullname}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export const ArtistList: React.FC<Props> = ({ artists }) => {
  return (
    <div className="my-10 grid grid-cols-2 gap-y-5 gap-x-5 md:grid-cols-3 md:gap-x-10 md:gap-y-10 lg:grid-cols-4">
      {artists.data.map(item => (
        <ArtistListItem
          key={item.attributes.fullname}
          id={item.id}
          fullname={item.attributes.fullname}
          image={item.attributes.image}
        />
      ))}
    </div>
  );
};
