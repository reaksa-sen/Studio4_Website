import { AboutResponse } from 'api/interface';
import NextImage from 'components/Image';
// import { LinkButton } from './Button';
import { Heading } from 'components/Heading';
import released from '../../public/images/released.jpg';
import { IoPlayCircleSharp } from 'react-icons/io5';
import Image from 'next/image';
import { useVideoModalContext } from '../../hooks/videoModalHook';

const SliderContact: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute  h-full">
        <IoPlayCircleSharp className="h-16 w-auto text-red-500" />
      </div>
    </div>
  );
};

export const HomeReleased: React.FC = () => {
  const { onModalOpen } = useVideoModalContext();
  return (
    <div className="container py-4 px-8">
      <Heading text={'New Released'} link="/" />
      <div className=" grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 lg:gap-x-8 lg:py-0">
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
          className="relative"
          onClick={() => onModalOpen('https://www.youtube.com/embed/QYVfb2TFZiQ')}
        >
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <IoPlayCircleSharp className="h-20 w-auto cursor-pointer text-red-500" />
          </div>
          <Image src={released} alt={'logo'} height={9} width={15} layout="responsive" />
        </div>

        <div className="space-y-3 p-2 text-center md:text-left lg:max-w-md">
          <h2 className="mb-5 text-3xl font-bold text-white">ជួបស៊យ វគ្គ៣</h2>
          <p className="text-base font-bold text-white">
            វគ្គ ៣ នេះ គឺការត្រឡប់មកវិញ របស់រឿង​ក្រោយចេញវគ្គ ២ កាលពី ៣ឆ្នាំមុន ពោលគឺឆ្នាំ ២០១៩។
            ដោយពេល​នេះ​ គឺ​ដល់ពេល កូនប្រុស របស់នាយ ស៊យ គឺ នាយ ចង្រៃ បញ្ចេញឬទ្ធិម្ដងហើយ។
          </p>
          <p className="text-base text-white line-clamp-4 lg:line-clamp-4">
            ម្យ៉ាងទៀតនោះ បើតាមការបញ្ជាក់ពីលោក លៀក លីដា បាន​ឲ្យដឹង នាយ គ្រឿន បង្ហើបមកថានឹងមាន វគ្គ ៤
            ជាបន្តទៀត។
          </p>
          {/* <LinkButton href="/about"> 
          </LinkButton> */}
        </div>
      </div>
    </div>
  );
};
