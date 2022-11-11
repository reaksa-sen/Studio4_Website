import { Facebook, Instagram, Tiktok, Youtube } from '@icons-pack/react-simple-icons';
import { MemberResponse } from 'api/interface';
import { getMember } from 'api/strapiApi';
import { LinkButton } from 'components/Button';
import Header from 'components/Header';
import { Heading } from 'components/Heading';
import NextImage from 'components/Image';
import { Wrapper } from 'components/Wrapper';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import { calculateAge } from 'utils/date';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';
import { useEffect, useState } from 'react';

const MemberProfile: NextPage<{ member: MemberResponse }> = ({ member }) => {
  const router = useRouter();

  const { lang } = useLanguageModalContext();
  const [profile, setProfile] = useState(member.data);
  const [saveAttribute, setSaveAttribute] = useState<any>(member.data.attributes);

  useEffect(() => {
    setSaveAttribute(member.data.attributes);
  }, []);

  useEffect(() => {
    const translateProfile = member.data.attributes.localizations.data.find(
      p => p.attributes.locale === lang
    );
    setProfile(translateProfile ?? member.data);
  }, [lang]);

  return (
    <Wrapper>
      <Header
        title={profile.attributes.fullname}
        siteUrl={router.asPath}
        description={(profile.attributes.bio || '').substring(160, 0)}
        imageUrl={saveAttribute.image?.data?.attributes?.formats?.medium?.url}
      />

      <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        {/* -- To prevent play icon placing below image */}
        <div className="relative">
          <NextImage
            alt={profile.attributes.fullname}
            image={saveAttribute.image}
            height={4}
            width={3}
            layout="responsive"
            size="M"
          />
        </div>

        <div className="">
          <Heading text={profile.attributes.fullname} />

          <p>
            {/* --- Date of Birth --- */}
            {!!saveAttribute.date_of_birth && (
              <>
                <span className="font-semibold">
                  {lang === 'km' ? Khmer['age'] : English['age']}{' '}
                </span>
                {calculateAge(saveAttribute.date_of_birth)}
                &emsp;
              </>
            )}

            {/* --- Height --- */}
            {!!saveAttribute.height && (
              <>
                <span className="font-semibold">
                  {lang === 'km' ? Khmer['height'] : English['height']}{' '}
                </span>
                {saveAttribute.height} cm
              </>
            )}
          </p>
          <br />

          {/* --- BIO --- */}
          <p className="whitespace-pre-line">{profile.attributes.bio}</p>

          <div className="flex flex-row space-x-4 py-8">
            {saveAttribute.facebook && (
              <LinkButton target="_blank" dense href={saveAttribute.facebook}>
                <Facebook />
              </LinkButton>
            )}
            {saveAttribute.instagram && (
              <LinkButton target="_blank" dense href={saveAttribute.instagram}>
                <Instagram />
              </LinkButton>
            )}
            {saveAttribute.tiktok && (
              <LinkButton target="_blank" dense href={saveAttribute.tiktok}>
                <Tiktok />
              </LinkButton>
            )}
            {saveAttribute.youtube && (
              <LinkButton target="_blank" dense href={saveAttribute.youtube}>
                <Youtube />
              </LinkButton>
            )}
          </div>

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
        </div>
      </div>

      <br />
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const member = await getMember(params.id as string);
  return { props: { member }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async ({}) => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export default MemberProfile;
