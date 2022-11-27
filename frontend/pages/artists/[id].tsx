/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Facebook, Instagram, Tiktok, Youtube } from '@icons-pack/react-simple-icons';
import { ArtistResponse } from 'api/interface';
import { getArtist } from 'api/strapiApi';
import { LinkButton } from 'components/Button';
import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';

interface Props {
  artist: ArtistResponse;
}

const ArtistsProfile: NextPage<Props> = ({ artist }) => {
  const router = useRouter();
  const { facebook = '', tiktok = '', instagram = '', youtube = '' } = artist.data.attributes || {};

  return (
    <>
      <Header
        title={artist.data.attributes.fullname}
        siteUrl={router.asPath}
        description={(artist.data.attributes.description || '').substring(160, 0)}
        imageUrl={artist.data.attributes.image?.data?.attributes.url}
      />

      <div className="container mt-16 md:mt-24">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-6">
          <div className="col-span-2 flex justify-center md:justify-end md:pt-5">
            <img
              className="h-56 w-56 cursor-pointer rounded-full object-cover"
              src={artist.data.attributes.image?.data?.attributes.url}
              alt={artist.data.attributes.fullname}
            />
          </div>
          <div className="col-span-4 text-white md:p-5 md:pt-0">
            <Heading text={artist.data.attributes.fullname} />
            <div className="flex flex-col gap-y-5">
              {/* --- Date of Birth --- */}
              <span className=" font-semibold">Age: {artist.data.attributes.age}</span>
              {/* --- Height --- */}
              <span className="font-semibold">Height: {artist.data.attributes.height} cm</span>
              {/* --- roles ---*/}
              <span className="font-semibold">Role: {artist.data.attributes.roles}</span>
              {/* --- Email --- */}
              <p className="whitespace-pre-line pr-28 font-semibold">
                Email: {artist.data.attributes.email}
              </p>
              <div className="flex flex-row space-x-4 ">
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
                )}
              </div>
            </div>

            <div className="mt-5 ">
              <div className="w-full border-b-2 border-primary-500 pt-2"></div>
              <div className="mt-5 text-white">
                <span>{artist.data.attributes.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArtistsProfile;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const artist = await getArtist(params.id as string);
  return { props: { artist }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};
