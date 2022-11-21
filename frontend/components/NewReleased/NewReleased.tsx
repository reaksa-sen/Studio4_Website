import { useVideoModalContext } from 'hooks/videoModalHook';
import { IoPlayCircleSharp } from 'react-icons/io5';
import Image from 'next/image';
import released from '../../public/images/released.jpg';
import NextImage from 'components/Image';
import Link from 'next/link';

export const NewReleased: React.FC = () => {
  const { onModalOpen } = useVideoModalContext();

  return (
    <div>
      {/* <Link href={''}> */}
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2  ">
        {/* <div className="relative ">
          <NextImage
            alt={'logo'}
            image={released}
            width="16"
            height="9"
            size={'M'}
            layout="responsive"
          />
        </div> */}
        <div
          className="relative cursor-pointer"
          onClick={() => onModalOpen('https://www.youtube.com/embed/QYVfb2TFZiQ')}
        >
          <div className="group cursor-pointer overflow-hidden">
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <IoPlayCircleSharp className="h-14 w-auto text-primary-500 group-hover:text-primary-600 lg:h-20" />
            </div>
            <Image
              className="transition duration-300 group-hover:scale-105"
              src={released}
              alt={'logo'}
              height={9.5}
              width={15}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="p-2 text-center md:text-left lg:max-w-sm">
          <h2 className="mb-4 font-heading text-lg text-white lg:text-2xl">
            រឿង ទេពធីតាផ្កា ថ្កុលមាស
          </h2>
          <p className="font-sans text-sm !leading-relaxed text-white lg:text-base lg:!leading-8">
            រឿង ទេពធីតាព្កុលមាស គឺជារឿងព្រេងនិទានខ្មែរដែលចាស់ៗតែងតែនិយាយដំណា
            លតៗគ្នាតាំងពីបុរាណមកហៅថា ផ្កាថ្កុលតែពាក្យដែលត្រឹមត្រូវគឺ ព្កុល
            នើយោងតាមការស្រាវជ្រាវពីវចនានុក្រមរបស់ សម្តេច ជួន ណាត។ នាពេលថ្មីៗនេះត្រូវបានខាង CTN TV
            និង Studio4 Production សហការគ្នាផលិតឡើង។
          </p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};
