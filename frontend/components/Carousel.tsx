/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/pagination';
import { CarouselsResponse } from 'api/interface';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoLogoFacebook, IoLogoYoutube, IoLogoTiktok } from 'react-icons/io5';
import Link from 'next/link';

interface ICarousel {
  image?: any;
  facebook_url: string;
  tiktok_url: string;
  yuotube_url: string;
}

const SliderContent: React.FC<ICarousel> = ({ facebook_url, tiktok_url, yuotube_url }) => {
  return (
    <div className="absolute top-1/2 right-5 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        <Link href={facebook_url}>
          <a target="_blank" rel="noreferrer">
            <IoLogoFacebook className="h-6 w-auto cursor-pointer text-white md:h-8" />
          </a>
        </Link>
        <Link href={yuotube_url}>
          <a target="_blank" rel="noreferrer">
            <IoLogoYoutube className="h-6 w-auto cursor-pointer text-white md:h-8" />
          </a>
        </Link>
        <Link href={tiktok_url}>
          <a target="_blank" rel="noreferrer">
            <IoLogoTiktok className="h-6 w-auto cursor-pointer text-white md:h-8" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export const Carousel: React.FC<{ carousel: CarouselsResponse }> = ({ carousel }) => {
  return (
    <>
      <div className="relative">
        {carousel.data.map((item, i) => (
          <div key={i}>
            <SliderContent
              facebook_url={item.attributes.facebook_url}
              tiktok_url={item.attributes.tiktok_url}
              yuotube_url={item.attributes.youtube_url}
            />
          </div>
        ))}
        <Swiper
          loop
          navigation
          pagination
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {carousel.data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-w-1 aspect-h-1 relative md:aspect-w-16 md:aspect-h-7">
                <Image
                  sizes="L"
                  alt={'slider'}
                  priority
                  layout="fill"
                  objectFit="cover"
                  src={item.attributes.image?.data?.attributes.url}
                  blurDataURL={item.attributes.image?.data?.attributes.url}
                  placeholder="blur"
                />
                <div className="h-full w-full bg-gray-900 opacity-20"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
