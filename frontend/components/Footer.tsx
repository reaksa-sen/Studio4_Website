/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Tiktok, Twitter, Youtube } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="mt-8 bg-stone-900">
      <div className="container py-4 md:px-8 md:py-6 ">
        <div className="font-heading text-base-100 flex flex-col items-center justify-between lg:flex-row">
          <div className="flex flex-col items-center justify-center gap-y-4 pb-8 pt-2 text-center md:pt-0 lg:w-2/4 lg:justify-start lg:text-left">
            <Link href="/">
              <img src="/images/logo.png" className="z-10 h-auto w-56 cursor-pointer" alt="Logo" />
            </Link>
            <span className="hidden font-bold !leading-relaxed text-white md:block md:text-base">
              Studio4
              គឺជាបណ្ដុំនៃអ្នកអនុវត្តប្រព័ន្ធផ្សព្វផ្សាយដែលមានជំនាញវិជ្ជាជីវៈដែលត្រូបានបង្កើតនៅពាក់កណ្ដាលឆ្នាំ
              2014។ក្រុមនេះត្រូវបានបង្កើតឡើងដោយអ្នកជំនាញដែលមានបទពិសោធន៍សិក្សា
              និងការអនុវត្តជាក់ស្ដែងរួមទាំងជំនាញដូចជាផលិតភាពយន្ត និងឯកសារ
            </span>
          </div>
          <div className="flex flex-col md:pr-8 lg:flex-row lg:gap-16 xl:gap-24">
            <div className="flex flex-wrap   gap-x-6 gap-y-5 pb-6 text-lg font-bold text-white lg:w-1/3 lg:flex-col lg:justify-start">
              <Link href="/about">
                <a href="" className="cursor-pointer hover:text-primary-500 hover:underline">
                  អំពីយើង
                </a>
              </Link>
              <Link href="/contact">
                <a href="" className="cursor-pointer hover:text-primary-500 hover:underline">
                  ទាក់ទងយើង
                </a>
              </Link>
              <Link href={''}>
                <a href="" className="cursor-pointer hover:text-primary-500 hover:underline">
                  Term & Privacy
                </a>
              </Link>
            </div>
            <div className="mt-2 flex flex-col justify-start lg:mt-0">
              <p className="whitespace-pre text-center text-lg font-bold text-white">
                បណ្តាញសង្គមរបស់ពួកយើង
              </p>
              <div className="mt-5 flex justify-center space-x-5 text-white ">
                {
                  <a
                    href="https://www.facebook.com/OneWorldSoftware"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Facebook className="cursor-pointer" size="32" />
                  </a>
                }
                {
                  <a
                    href="https://www.youtube.com/watch?v=t1zVoqL7E_k"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Youtube size="32" className="cursor-pointer" />
                  </a>
                }
                {/* {
                  <a rel="noreferrer" target="_blank">
                    <Instagram size="32" className="cursor-pointer" />
                  </a>
                } */}
                {
                  <a
                    href="https://www.tiktok.com/@ldentertantment.official?_t=8WDcOcSQj8j"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Tiktok size="32" className="cursor-pointer" />
                  </a>
                }
                {/* {
                  <a rel="noreferrer" target="_blank">
                    <Twitter size="32" className="cursor-pointer" />
                  </a>
                } */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="py-4 text-center text-sm font-bold text-gray-300 md:text-base">
            © រក្សាសិទ្ថិគ្រប់យ៉ាងដោយ Studio 4 ឆ្នាំ 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
