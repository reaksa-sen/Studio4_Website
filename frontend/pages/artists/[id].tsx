/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Facebook, Instagram, Tiktok, Youtube, Twitter } from '@icons-pack/react-simple-icons';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import { ArtistResponse } from 'api/interface';
import { LinkButton } from 'components/Button';
import { Heading } from 'components/Heading';
import { getArtist } from 'api/strapiApi';
import { useRouter } from 'next/router';
import Header from 'components/Header';

interface Props {
  artist: ArtistResponse;
}

const ArtistsProfile: NextPage<Props> = ({ artist }) => {
  const router = useRouter();
  const { facebook, tiktok, instagram, youtube, twitter, description, height, roles, email, age } =
    artist.data.attributes;

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
            <div className="flex flex-col gap-y-4">
              {age && <span className="font-semibold">Age: {age || ''}</span>}
              {height && <span className="font-semibold">Height: {height || ''} cm</span>}
              {roles && <span className="font-semibold">Role: {roles || ''}</span>}
              {email && <span className="font-semibold">Email: {email || ''}</span>}
              <div className="flex flex-row space-x-4">
                {facebook && (
                  <LinkButton target="_blank" href={facebook || ''}>
                    <Facebook className="hover:text-blue-600" />
                  </LinkButton>
                )}
                {youtube && (
                  <LinkButton target="_blank" href={youtube || ''}>
                    <Youtube className="hover:text-red-600" />
                  </LinkButton>
                )}
                {tiktok && (
                  <LinkButton target="_blank" href={tiktok || ''}>
                    <Tiktok className="hover:text-gray-700" />
                  </LinkButton>
                )}
                {instagram && (
                  <LinkButton target="_blank" href={instagram || ''}>
                    <Instagram className="hover:text-pink-600" />
                  </LinkButton>
                )}
                {twitter && (
                  <LinkButton target="_blank" href={twitter || ''}>
                    <Twitter className="hover:text-sky-500" />
                  </LinkButton>
                )}
              </div>
            </div>

            {description && (
              <div className="mt-5 ">
                <div className="mb-5 w-full border-b-2 border-primary-500 pt-2" />
                <span>{description}</span>
              </div>
            )}
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
