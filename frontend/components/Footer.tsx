/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Tiktok, Twitter, Youtube } from '@icons-pack/react-simple-icons';
import { getAbout, getContact } from 'api/strapiApi';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { LinkButton } from './Button';

const Footer: React.FC = () => {
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
  const {
    facebook_url = '',
    youtube_url = '',
    tiktok_url = '',
    instagram_url = '',
    twitter_url = ''
  } = data?.data?.attributes || {};
  return (
    <footer className="mt-3 bg-[#1E1E1E]">
      <div className="container py-4 md:px-8 md:py-6 ">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-col items-center gap-y-4 pb-8 pt-2 md:pt-0 md:text-left lg:w-2/4 lg:items-start ">
            <Link href="/">
              <img
                src="/images/logo.png"
                className="z-10 h-auto w-20 cursor-pointer md:w-32"
                alt="Logo"
              />
            </Link>
            <span className="hidden font-heading !leading-loose text-white md:block">
              {slogan?.data.attributes.slogan}
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-10 lg:flex-row ">
            <div className="flex flex-wrap gap-y-9 gap-x-5 font-heading text-lg text-white lg:flex-col lg:justify-start">
              <Link href="/about">
                <a className="cursor-pointer hover:text-primary-500 hover:underline">អំពីយើង</a>
              </Link>
              <Link href="/contact">
                <a className="cursor-pointer hover:text-primary-500 hover:underline">ទាក់ទងយើង</a>
              </Link>
              <Link href="/term-and-privacy">
                <a className="cursor-pointer hover:text-primary-500 hover:underline">
                  Term & Privacy
                </a>
              </Link>
            </div>
            <div className="mt-2 flex flex-col lg:mt-0">
              <p className="whitespace-pre text-center font-heading text-lg text-white">
                បណ្តាញសង្គមរបស់ពួកយើង
              </p>
              <div className="mt-5 flex justify-center space-x-5 text-white ">
                {facebook_url && (
                  <LinkButton target="_blank" href={facebook_url}>
                    <Facebook className="hover:text-blue-600" size="32" />
                  </LinkButton>
                )}
                {youtube_url && (
                  <LinkButton target="_blank" href={youtube_url}>
                    <Youtube className="hover:text-red-600" size="32" />
                  </LinkButton>
                )}
                {tiktok_url && (
                  <LinkButton target="_blank" href={tiktok_url}>
                    <Tiktok className="hover:text-gray-700" size="32" />
                  </LinkButton>
                )}
                {instagram_url && (
                  <LinkButton target="_blank" href={instagram_url}>
                    <Instagram className="hover:text-pink-600" size="32" />
                  </LinkButton>
                )}
                {twitter_url && (
                  <LinkButton target="_blank" href={twitter_url}>
                    <Twitter className="hover:text-sky-500" size="32" />
                  </LinkButton>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="py-4 text-center font-heading text-sm text-gray-400 ">
            © រក្សាសិទ្ថិគ្រប់យ៉ាងដោយ Studio 4 ឆ្នាំ 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
