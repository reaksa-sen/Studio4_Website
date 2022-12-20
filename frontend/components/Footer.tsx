/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Tiktok, Twitter, Youtube } from '@icons-pack/react-simple-icons';
import { getAbout, getContact } from 'api/strapiApi';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { LinkButton } from './Button';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const { data } = useQuery('footer', () => getContact(), {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 30000
  });
  const { data: slogan } = useQuery('about', () => getAbout(), {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 30000
  });
  const { facebook_url, youtube_url, tiktok_url, instagram_url, twitter_url } =
    data?.data?.attributes || {};

  const translateData =
    slogan?.data.attributes.localizations.data.find(m => m.attributes.locale === locale) ??
    slogan?.data;

  return (
    <footer className="mt-3 bg-[#1E1E1E]">
      <div className="container py-4 md:px-8 md:py-6 ">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-col items-center gap-y-4 pb-8 pt-2 md:pt-0 lg:w-2/4 lg:items-start ">
            <Link href="/">
              <img
                src="/images/logo.png"
                className="h-auto w-20 cursor-pointer md:w-32"
                alt="Logo"
              />
            </Link>
            <span className="hidden break-all font-heading !leading-loose text-white md:block">
              {translateData?.attributes.slogan}
            </span>
          </div>
          <div className="flex flex-col gap-2 text-white md:gap-10 lg:flex-row">
            <div className="flex flex-col items-center  gap-y-6  font-heading text-lg lg:min-w-[150px] lg:items-start lg:gap-y-9">
              <Link href="/about">
                <a className="cursor-pointer whitespace-pre hover:text-primary-500 hover:underline">
                  {t('about')}
                </a>
              </Link>
              <Link href="/contact">
                <a className="cursor-pointer whitespace-pre hover:text-primary-500 hover:underline">
                  {t('contact')}
                </a>
              </Link>
              <Link href="/term-and-privacy">
                <a className="cursor-pointer whitespace-pre hover:text-primary-500 hover:underline">
                  {t('term-privacy')}
                </a>
              </Link>
            </div>
            <div className="mt-2 flex flex-col lg:mt-0">
              <p className="min-w-[200px] text-center font-heading text-lg">{t('following-us')}</p>
              <div className="mt-5 flex justify-center space-x-5">
                {facebook_url && (
                  <LinkButton target="_blank" href={facebook_url || ''}>
                    <Facebook className="hover:text-blue-600" size="32" />
                  </LinkButton>
                )}
                {youtube_url && (
                  <LinkButton target="_blank" href={youtube_url || ''}>
                    <Youtube className="hover:text-red-600" size="32" />
                  </LinkButton>
                )}
                {tiktok_url && (
                  <LinkButton target="_blank" href={tiktok_url || ''}>
                    <Tiktok className="hover:text-gray-700" size="32" />
                  </LinkButton>
                )}
                {instagram_url && (
                  <LinkButton target="_blank" href={instagram_url || ''}>
                    <Instagram className="hover:text-pink-600" size="32" />
                  </LinkButton>
                )}
                {twitter_url && (
                  <LinkButton target="_blank" href={twitter_url || ''}>
                    <Twitter className="hover:text-sky-500" size="32" />
                  </LinkButton>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="py-4 text-center font-heading text-sm text-gray-400 ">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
