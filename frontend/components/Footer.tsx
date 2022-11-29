/* eslint-disable @next/next/no-img-element */
import { Facebook, Instagram, Tiktok, Twitter, Youtube } from '@icons-pack/react-simple-icons';
import Link from 'next/link';

const Footer: React.FC = () => {
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
            <span className="hidden font-heading !leading-loose text-white md:block ">
              Studio4
              គឺជាបណ្ដុំនៃអ្នកអនុវត្តប្រព័ន្ធផ្សព្វផ្សាយដែលមានជំនាញវិជ្ជាជីវៈដែលត្រូបានបង្កើតនៅពាក់កណ្ដាលឆ្នាំ
              2014។ក្រុមនេះត្រូវបានបង្កើតឡើងដោយអ្នកជំនាញដែលមានបទពិសោធន៍សិក្សា
              និងការអនុវត្តជាក់ស្ដែងរួមទាំងជំនាញដូចជាផលិតភាពយន្ត និងឯកសារ
            </span>
          </div>
          <div className="flex flex-col gap-2 md:gap-10 md:pr-8 lg:flex-row ">
            <div className="flex flex-wrap gap-y-9 gap-x-5 font-heading text-lg text-white lg:flex-col lg:justify-start">
              <Link href="/about">
                <a className="cursor-pointer hover:text-primary-500 hover:underline">អំពីយើង</a>
              </Link>
              <Link href="/contact">
                <a className="cursor-pointer hover:text-primary-500 hover:underline">ទាក់ទងយើង</a>
              </Link>
              <Link href="/term-and-privacy">
                <a className="cursor-pointer whitespace-pre hover:text-primary-500 hover:underline">
                  Term & Privacy
                </a>
              </Link>
            </div>
            <div className="mt-2 flex flex-col lg:mt-0">
              <p className="whitespace-pre text-center font-heading text-lg text-white">
                បណ្តាញសង្គមរបស់ពួកយើង
              </p>
              <div className="mt-5 flex justify-center space-x-5 text-white ">
                {
                  <Link href="https://www.facebook.com/OneWorldSoftware">
                    <a rel="noreferrer" target="_blank" aria-label="view more on facebook">
                      <Facebook className="cursor-pointer hover:text-blue-600" size="32" />
                    </a>
                  </Link>
                }
                {
                  <Link href="https://www.youtube.com/watch?v=t1zVoqL7E_k">
                    <a rel="noreferrer" target="_blank" aria-label="view more on youtube">
                      <Youtube size="32" className="cursor-pointer hover:text-red-600" />
                    </a>
                  </Link>
                }
                {
                  <Link href="https://www.tiktok.com/@ldentertantment.official?_t=8WDcOcSQj8j">
                    <a rel="noreferrer" target="_blank" aria-label="view more on tiktok">
                      <Tiktok size="32" className="cursor-pointer hover:text-gray-700" />
                    </a>
                  </Link>
                }
                {/* {
                  <a rel="noreferrer" target="_blank">
                    <Instagram size="32" className="cursor-pointer" />
                  </a>
                } */}
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
          <p className="py-4 text-center font-heading text-sm text-gray-400 ">
            © រក្សាសិទ្ថិគ្រប់យ៉ាងដោយ Studio 4 ឆ្នាំ 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
