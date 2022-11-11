import { Facebook, Instagram, Tiktok, Twitter, Youtube } from '@icons-pack/react-simple-icons';
import { getContact } from 'api/strapiApi';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import Link from 'next/link';
import { useQuery } from 'react-query';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';

const Footer: React.FC = () => {
  const { lang } = useLanguageModalContext();
  const { data } = useQuery('footer', () => getContact());
  const footerLinkNames = lang === 'en' ? English : Khmer;
  const {
    facebook_url = '',
    youtube_url = '',
    instagram_url = '',
    tiktok_url = '',
    twitter_url = ''
  } = data?.data?.attributes || {};
  return (
    <footer className="h-full  bg-stone-800">
      <div className="container grid py-4 sm:grid-cols-2">
        <div className="cols-span-1 mt-2 mb-2 flex flex-col items-center space-y-2 sm:items-start md:items-start ">
          <div className="grid gap-x-10 gap-y-5 text-center font-bold text-white sm:grid-cols-1 sm:text-left md:gap-x-0 md:gap-y-0">
            {footerLinkNames['navigation-bar'].map((nav, i) => (
              <Link key={`footer-link-${i}`} href={nav.link}>
                <a className="p-2 hover:text-primary-100">{nav.name}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="cols-span-1 mt-2 flex flex-col items-center sm:items-end">
          <div className="font-bold text-white">
            {lang === 'km' ? Khmer['following-us'] : English['following-us']}
          </div>
          <div className="mt-5 flex justify-center space-x-5 text-white sm:justify-end">
            {facebook_url && <a rel="noreferrer" target="_blank" href={facebook_url}>
              <Facebook className="cursor-pointer" size="24" />
            </a>}
            {youtube_url && <a rel="noreferrer" target="_blank" href={youtube_url}>
              <Youtube size="24" className="cursor-pointer" />
            </a>}
            {instagram_url && <a rel="noreferrer" target="_blank" href={instagram_url}>
              <Instagram size="24" className="cursor-pointer" />
            </a>}
           {tiktok_url && <a rel="noreferrer" target="_blank" href={tiktok_url}>
              <Tiktok size="24" className="cursor-pointer" />
            </a>}
            {tiktok_url && <a rel="noreferrer" target="_blank" href={twitter_url}>
              <Twitter size="24" className="cursor-pointer" />
            </a>}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="py-4 text-center text-base font-bold text-white">
          {lang === 'km' ? Khmer['copyright'] : English['copyright']}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
