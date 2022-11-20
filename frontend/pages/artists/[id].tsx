/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Tiktok, Youtube } from '@icons-pack/react-simple-icons';
import { MemberResponse } from 'api/interface';
import { getMember } from 'api/strapiApi';
import { LinkButton } from 'components/Button';
import Header from 'components/Header';
import { Heading } from 'components/Heading';
import NextImage from 'components/Image';
import { Wrapper } from 'components/Wrapper';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import { calculateAge } from 'utils/date';
import { useEffect, useState } from 'react';
// import Image from 'components/Image';
import Image from 'next/image';

const items = [
  {
    img: '/images/1.webp',
    alt: 'artists1',
    fullname: 'Chhin Monineath',
    roles: 'actor',
    Age: '25',
    height: '170',
    email: 'chhin Monineath@gamil.com',
    description:
      'Chea Samnang: I was born in 1971, 4 years before Khmer Rouge came into power, in Sangkat Lek Pram, Phnom Penh, where my parents ran a pawnshop. It was my ill fate that I had to grow up in the darkest age of Cambodia, working in a child labour unit in Kampong Cham while being separated from my parents. In 1981, two years after the fall of Khmer Rouge, my father brought us back to Phnom Penh, where I started school. Life was very hard at that time, especially when there are nine children in the family. Thanks to my hard work, I was accepted at the military school, which opened the door for me to study medicine.'
  }
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

// const MemberProfile: NextPage<{ member: MemberResponse }> = ({ member }) => {
//   const router = useRouter();
//   const { lang } = useLanguageModalContext();
//   const [profile, setProfile] = useState(member.data);
//   const [saveAttribute, setSaveAttribute] = useState<any>(member.data.attributes);

// useEffect(() => {
//   setSaveAttribute(member.data.attributes);
// }, []);

// useEffect(() => {
//   const translateProfile = member.data.attributes.localizations.data.find(
//     p => p.attributes.locale === lang
//   );
//   setProfile(translateProfile ?? member.data);
// }, [lang]);
const ArtistsProfile: NextPage = () => {
  return (
    <>
      <Header title={'Artists'} />
      {/* <Header
        title={profile.attributes.fullname}
        siteUrl={router.asPath}
        description={(profile.attributes.bio || '').substring(160, 0)}
        imageUrl={saveAttribute.image?.data?.attributes?.formats?.medium?.url}
      /> */}

      {/* <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2"> */}
      <div className="container mt-20">
        {/* -- To prevent play icon placing below image */}
        {/* <NextImage
            alt={profile.attributes.fullname}
            image={saveAttribute.image}
            height={4}
            width={3}
            layout="responsive"
            size="M"
          /> */}
        {items.map((a, i) => (
          <>
            <div key={i} className="grid grid-cols-1 gap-3 md:grid-cols-6">
              <div className="col-span-2 flex justify-center md:justify-end md:pt-5">
                <img
                  className="h-56 w-56 cursor-pointer rounded-full object-cover"
                  src={a.img}
                  alt={a.alt}
                />
              </div>
              <div className="col-span-4 text-white md:p-5 md:pt-0">
                <Heading text={a.fullname} />
                <div className="flex flex-col gap-y-5">
                  {/* --- Date of Birth --- */}
                  <span className=" font-semibold">Age: {a.Age}</span>
                  {/* --- Height --- */}
                  <span className="font-semibold">Height: {a.height} cm</span>
                  {/* --- Email --- */}
                  <p className="whitespace-pre-line  pr-28 font-semibold">Email: {a.email}</p>
                  <div className="flex flex-row space-x-4 ">
                    <Facebook className="cursor-pointer" />
                    <Instagram className="cursor-pointer" />
                    <Tiktok className="cursor-pointer" />
                    <Youtube className="cursor-pointer" />
                  </div>
                </div>

                <div className="mt-10 ">
                  <div className="w-full border-b-2 border-primary-500 pt-2"></div>
                  <div className="mt-5 text-white">
                    <span>{a.description}</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* <div className="flex flex-row space-x-4 py-8">
            {facebook && (
              <LinkButton target="_blank" dense href={facebook}>
                <Facebook />
              </LinkButton>
            )}
            {instagram && (
              <LinkButton target="_blank" dense href={instagram}>
                <Instagram />
              </LinkButton>
            )}
            {tiktok && (
              <LinkButton target="_blank" dense href={tiktok}>
                <Tiktok />
              </LinkButton>
            )}
            {youtube && (
              <LinkButton target="_blank" dense href={youtube}>
                <Youtube />
              </LinkButton>
            )} */}
      {/* </div> */}

      {/* {!!movies.data.length && <h1 className="py-3 text-2xl font-semibold"> Cast In </h1>}
          <ul role="list" className="grid gap-3 sm:grid-cols-2 md:grid-cols-2">
            {movies.data.map(x => (
              <li key={x.attributes.title} className="">
                <Link href={`/movies/${x.id}`}>
                  <a className="group flex cursor-pointer flex-row">
                    <div className="relative w-16 flex-shrink-0">
                      <NextImage
                        alt={x.attributes.title}
                        image={x.attributes.poster}
                        height={4}
                        width={3}
                        size="T"
                        layout="responsive"
                      />
                    </div>

                    <div className="ml-3 ">
                      <p className="text-sm font-semibold text-black group-hover:text-yellow-600 group-hover:underline">
                        {x.attributes.title}
                      </p>
                      <p className="text-sm text-gray-700 group-hover:text-yellow-600">
                        View Detail
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul> */}
      {/* </div> */}
    </>
  );
};
export default ArtistsProfile;

{
  /* export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const member = await getMember(params.id as string);
  return { props: { member }, revalidate: 60 };
}; */
}

{
  /* // export const getStaticPaths: GetStaticPaths = async ({}) => {
//   return {
//     paths: [],
//     fallback: 'blocking'
//   };
// }; */
}
