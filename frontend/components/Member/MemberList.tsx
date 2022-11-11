import { MemberAttribute } from 'api/interface';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { Zoom } from 'react-awesome-reveal';

import NextImage from '../Image';

interface ItemProps {
  id: number;
  fullname: string;
  image: any;
  roles: string;
  delay?: number;
}

export const MemberListItem: React.FC<ItemProps> = ({ id, fullname, image, roles, delay }) => {
  return (
    <div className="relative">
      <Zoom duration={500} delay={(delay * 50) % 750} triggerOnce>
        <Link href={`/members/${id}`} key={fullname}>
          <a className="group cursor-pointer overflow-hidden">
            <NextImage
              alt={fullname}
              className="transition duration-150 group-hover:scale-105"
              image={image}
              width={1}
              height={1}
              size={'M'}
              layout={'responsive'}
            />

            <div className="w-full py-2">
              <div className="text-base font-black text-stone-900">{fullname}</div>
              <div className="text-sm text-stone-900">{roles}</div>
            </div>
          </a>
        </Link>
      </Zoom>
    </div>
  );
};

export const MemberList: React.FC<{ res: MemberAttribute[] }> = ({ res }) => {
  const { lang } = useLanguageModalContext();
  const translateData = res.map(
    m => m.attributes.localizations.data.find(m => m.attributes.locale === lang) ?? m
  );

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {(lang === 'en' ? res : translateData).map((x, i) => (
        <Fragment key={i}>
          <MemberListItem
            key={x.id}
            id={x.id}
            fullname={x.attributes.fullname}
            image={res[i].attributes.image}
            roles={x.attributes.roles}
            delay={i}
          />
        </Fragment>
      ))}
    </div>
  );
};
