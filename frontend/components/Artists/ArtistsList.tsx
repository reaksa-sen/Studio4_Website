import { MemberAttribute } from 'api/interface';
import Link from 'next/link';
import React, { Fragment } from 'react';
import NextImage from '../Image';
import Image from 'next/image';

interface ItemProps {
  id: number;
  fullname: string;
  image: any;
  roles: string;
  delay?: number;
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

export const ArtistsListItem: React.FC<ItemProps> = ({ id }) => {
  return (
    <>
      <Link href={`/artists/${id}`}>
        <div className="grid grid-cols-2 gap-y-5 gap-x-5 md:grid-cols-3 md:gap-x-10 lg:grid-cols-4">
          {/* <NextImage
            alt={fullname}
            className="transition duration-150 group-hover:scale-105"
            image={image}
            width={1}
            height={1}
            size={'M'}
            layout={'responsive'}
          /> */}
          {items.map((a, i) => (
            <div key={i} className="group relative overflow-hidden rounded-full ">
              <div className="absolute z-10 h-full w-full cursor-pointer rounded-full opacity-50 transition duration-300 ease-in-out group-hover:scale-105 group-hover:bg-black"></div>
              <Image
                className="cursor-pointer rounded-full transition duration-300 ease-in-out group-hover:scale-105"
                src={a.img}
                alt={a.alt}
                height={1}
                width={1}
                layout="responsive"
                objectFit="cover"
              />
              <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 text-white group-hover:block">
                <div className="cursor-pointer p-4 text-center text-xl hover:text-primary-500 group-hover:underline">
                  {a.fullname}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>
    </>
  );
};

// export const MemberList: React.FC<{ res: MemberAttribute[] }> = ({ res }) => {
// const { lang } = useLanguageModalContext();
// const translateData = res.map(
//   m => m.attributes.localizations.data.find(m => m.attributes.locale === lang) ?? m
// );
export const ArtistsList: React.FC = () => {
  return (
    <div>
      <Fragment>
        <ArtistsListItem
          id={0}
          fullname={''}
          image={undefined}
          roles={''} // id={x.id}
          // fullname={x.attributes.fullname}
          // image={res[i].attributes.image}
          // roles={x.attributes.roles}
          // delay={i}
        />
      </Fragment>
    </div>
  );
};

{
  /* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {team.data.map((x, i) => (
              <div key={i} className="group relative border">
                <NextImage
                  alt={image-${i}}
                  image={x.attributes.image}
                  width={1}
                  height={1}
                  size={'M'}
                  layout={'responsive'}
                />
                <div className="absolute top-0 h-full w-full opacity-80 group-hover:bg-black"></div>
                <div className="absolute top-0 hidden h-full w-full overflow-hidden text-white group-hover:block">
                  <div className="p-4">
                    <div className="text-2xl">{x.attributes.name}</div>
                    <div className="text-sm">{x.attributes.position}</div>
                    <div className="mt-4 text-sm">{x.attributes.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div> */
}
