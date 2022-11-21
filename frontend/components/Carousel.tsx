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

const items = [
  {
    img: '/images/banner.jpg',
    name: 'banner'
  },
  {
    img: '/images/banner1.jpg',
    name: 'banner1'
  },
  {
    img: '/images/banner2.jpg',
    name: 'banner2'
  }
];

const SliderContent: React.FC = () => {
  return (
    <div className="absolute top-1/2 right-5 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        <a href="https://www.facebook.com/OneWorldSoftware" target="_blank" rel="noreferrer">
          <IoLogoFacebook className="h-6 w-auto cursor-pointer text-white md:h-8" />
        </a>
        <a href="https://www.youtube.com/watch?v=t1zVoqL7E_k" target="_blank" rel="noreferrer">
          <IoLogoYoutube className="h-6 w-auto cursor-pointer text-white md:h-8" />
        </a>
        <a
          href="https://www.tiktok.com/@ldentertantment.official?_t=8WDcOcSQj8j"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoTiktok className="h-6 w-auto cursor-pointer text-white md:h-8" />
        </a>
      </div>
    </div>
  );
};

export const Carousel: React.FC = () => {
  return (
    <>
      <div className="relative">
        <div>
          <SliderContent />
        </div>
        <Swiper
          loop
          navigation
          // pagination
          slidesPerView={1}
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {items.map((a, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-w-1 aspect-h-1 relative md:aspect-w-16 md:aspect-h-7">
                <Image
                  sizes="L"
                  alt={a.name}
                  priority
                  layout="fill"
                  objectFit="cover"
                  // height={6}
                  // width={16}
                  src={a.img}
                />
                {/* <img src="images/banner.jpg" alt="banner" className="object-cover" /> */}
                <div className="h-full w-full bg-gray-900 opacity-20"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
