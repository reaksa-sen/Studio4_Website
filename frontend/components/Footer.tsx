/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Tiktok, Twitter, Youtube } from '@icons-pack/react-simple-icons';
import { getContact } from 'api/strapiApi';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import Link from 'next/link';
import { useQuery } from 'react-query';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900">
      <div className="container py-4 px-8 md:py-6 ">
        <div className="font-heading text-base-100 flex flex-col items-center lg:flex-row lg:gap-12">
          <div className="flex flex-col items-center justify-center gap-y-4 pb-8 pt-2 text-center md:pt-0 lg:w-2/4 lg:justify-start lg:text-left">
            <Link href="/">
              <a className="relative mx-auto w-36 lg:mx-0">
                {/* <img alt="logo" src="/logo/logo-primary.png" className="z-10 w-56" /> */}
                <img src="images/logo.png" className="z-10 h-auto w-56" alt="Logo" />
              </a>
            </Link>
            <span className="hidden font-bold !leading-relaxed text-white md:block md:text-base">
              Studio4
              គឺជាបណ្ដុំនៃអ្នកអនុវត្តប្រព័ន្ធផ្សព្វផ្សាយដែលមានជំនាញវិជ្ជាជីវៈដែលត្រូបានបង្កើតនៅពាក់កណ្ដាលឆ្នាំ
              2014។ក្រុមនេះត្រូវបានបង្កើតឡើងដោយអ្នកជំនាញដែលមានបទពិសោធន៍សិក្សា
              និងការអនុវត្តជាក់ស្ដែងរួមទាំងជំនាញដូចជាផលិតភាពយន្ត និងឯកសារ
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-5 pb-6 text-lg font-bold text-white lg:w-1/4 lg:flex-col lg:justify-start">
            <p>អំពីយើង</p>
            <p>ទាក់ទងយើង</p>
            <p>Term & Privacy</p>
          </div>
          <div className="mt-2 flex flex-col items-center ">
            <div className="font-bold text-white">
              <h2 className="text-center text-lg">បណ្តាញសង្គមរបស់ពួកយើង</h2>
            </div>
            <div className="mt-5 flex justify-center space-x-5 text-white ">
              {
                <a rel="noreferrer" target="_blank">
                  <Facebook className="cursor-pointer" size="32" />
                </a>
              }
              {
                <a rel="noreferrer" target="_blank">
                  <Youtube size="32" className="cursor-pointer" />
                </a>
              }
              {
                <a rel="noreferrer" target="_blank">
                  <Instagram size="32" className="cursor-pointer" />
                </a>
              }
              {
                <a rel="noreferrer" target="_blank">
                  <Tiktok size="32" className="cursor-pointer" />
                </a>
              }
              {
                <a rel="noreferrer" target="_blank">
                  <Twitter size="32" className="cursor-pointer" />
                </a>
              }
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="py-4 text-center text-sm font-bold text-gray-300 md:text-base">
            © រក្សាសិទ្ថិគ្រប់យ៉ាងដោយ Studio Four ឆ្នាំ 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
