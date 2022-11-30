/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import 'swiper/css/pagination';
import { CarouselsResponse } from 'api/interface';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Facebook, Instagram, Tiktok, Twitter, Youtube } from '@icons-pack/react-simple-icons';
import NextImage from 'components/Image';
import { getContact } from 'api/strapiApi';
import { useQuery } from 'react-query';
import { LinkButton } from './Button';

interface Props {
  carousel: CarouselsResponse;
}

const SocialContact: React.FC = () => {
  const { data } = useQuery('footer', () => getContact(), {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 30000
  });

  const { facebook_url, youtube_url, tiktok_url, instagram_url, twitter_url } =
    data?.data?.attributes || {};

  return (
    <div className="absolute top-1/2 right-5 z-10 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-y-2 text-white md:gap-y-4">
        {facebook_url && (
          <LinkButton target="_blank" href={facebook_url || ''}>
            <Facebook className="h-5 w-auto hover:text-blue-600 sm:h-8" />
          </LinkButton>
        )}
        {youtube_url && (
          <LinkButton target="_blank" href={youtube_url || ''}>
            <Youtube className="h-5 w-auto hover:text-red-600 sm:h-8" />
          </LinkButton>
        )}
        {tiktok_url && (
          <LinkButton target="_blank" href={tiktok_url || ''}>
            <Tiktok className="h-5 w-auto hover:text-gray-700 sm:h-8" />
          </LinkButton>
        )}
        {instagram_url && (
          <LinkButton target="_blank" href={instagram_url || ''}>
            <Instagram className="h-5 w-auto hover:text-pink-600 sm:h-8" />
          </LinkButton>
        )}
        {twitter_url && (
          <LinkButton target="_blank" href={twitter_url || ''}>
            <Twitter className="h-5 w-auto text-white hover:text-sky-500 sm:h-8" />
          </LinkButton>
        )}
      </div>
    </div>
  );
};

export const Carousel: React.FC<Props> = ({ carousel }) => {
  return (
    <>
      <div className="relative">
        <SocialContact />
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
              <div className="aspect-w-16 aspect-h-9 relative lg:aspect-h-7">
                <NextImage
                  image={item.attributes.image}
                  alt={`image-${i}`}
                  key={i}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
                <div className="h-full w-full bg-gray-900 opacity-20" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
