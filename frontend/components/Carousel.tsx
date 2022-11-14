/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/pagination';

import { BlogAttribute, BlogsResponse } from 'api/interface';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoLogoFacebook, IoLogoYoutube, IoLogoTiktok } from 'react-icons/io5';
interface ISliderContent {
  data: BlogAttribute;
}

const SliderContent: React.FC = () => {
  return (
    <div className=" flex items-center justify-end">
      <div className="mr-7 flex flex-col gap-y-2 md:gap-y-4">
        <a>
          <IoLogoFacebook className="h-6 w-auto cursor-pointer text-gray-800 md:h-8" />
        </a>
        <a>
          <IoLogoYoutube className="h-6 w-auto cursor-pointer text-gray-800 md:h-8" />
        </a>
        <a>
          <IoLogoTiktok className="h-6 w-auto cursor-pointer text-gray-800 md:h-8" />
        </a>
      </div>
    </div>
  );
};

export const Carousel: React.FC = () => {
  return (
    <Swiper
      loop
      navigation
      pagination
      slidesPerView={1}
      // autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="aspect-w-1 aspect-h-1 relative md:aspect-w-16 md:aspect-h-6">
          {/* <Image
            sizes="L"
            alt={"banner"}
            priority
            layout="fill"
            objectFit="cover"
            height={}
            width={}
            src={}           
            blurDataURL={}
            placeholder="blur"
          /> */}
          <img src="images/banner.jpg" alt="banner" className="object-cover" />
          {/* <div className="h-full w-full bg-black opacity-80"></div> */}
          <SliderContent />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
