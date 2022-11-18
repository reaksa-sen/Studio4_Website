import { MemberAttribute } from 'api/interface';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Zoom } from 'react-awesome-reveal';
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
      {/* <Zoom duration={500} delay={(delay * 50) % 750} triggerOnce> */}
      <Link href={`/artists/${id}`}>
        {/* <div className="group flex cursor-pointer overflow-hidden"> */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
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
            <div key={i} className="p-3 px-5">
              <>
                <Image
                  className="cursor-pointer rounded-full"
                  src={a.img}
                  alt={a.alt}
                  height={1}
                  width={1}
                  layout="responsive"
                  objectFit="cover"
                />
                {/* <div className="w-full py-2">
                  <div className="text-base font-black text-white">{a.fullname}</div>
                  <div className="text-sm text-white">{a.roles}</div>
                </div> */}
              </>
            </div>
          ))}
        </div>
      </Link>
      {/* </Zoom> */}
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
