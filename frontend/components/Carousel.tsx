import 'swiper/css';
import 'swiper/css/pagination';

import { BlogAttribute, BlogsResponse } from 'api/interface';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { LinkButton } from './Button';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import English from 'public/languages/english/translation.json';
import Khmer from 'public/languages/khmer/translation.json';

interface ISliderContent {
  data: BlogAttribute;
}

const SliderContent: React.FC<ISliderContent> = ({ data }) => {
  const { lang } = useLanguageModalContext();

  return (
    <div className="container flex items-center">
      <div className="flex w-4/5 flex-col gap-y-4 md:w-3/5 md:gap-y-6">
        <div className="text-2xl font-bold leading-relaxed text-white line-clamp-2 md:text-2xl md:leading-relaxed lg:text-2xl xl:text-4xl xl:leading-relaxed">
          {data.attributes.title}
        </div>
        <div className="text-gray-400 line-clamp-3 sm:text-sm lg:text-base xl:text-lg">
          {data.attributes.description}
        </div>
        <div>
          <LinkButton href={`newsfeed/${data.id}/${data.attributes.slug}`}>
            {lang === 'km' ? Khmer['discover-more'] : English['discover-more']}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export const Carousel: React.FC<{ res: BlogsResponse }> = ({ res }) => {
  const { lang } = useLanguageModalContext();
  const translateData = res.data.map(
    b => b.attributes.localizations.data.find(b => b.attributes.locale === lang) ?? b
  );
  return (
    <Swiper
      loop
      navigation
      pagination
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {(lang === 'en' ? res.data : translateData).map((x, i) => (
        <SwiperSlide key={i}>
          <div className="aspect-w-1 aspect-h-1 relative md:aspect-w-16 md:aspect-h-6">
            <Image
              sizes="L"
              alt={`image-${i}`}
              priority
              layout="fill"
              objectFit="cover"
              src={res.data[i].attributes.image.data.attributes.url}
              blurDataURL={res.data[i].attributes.image.data.attributes.url}
              placeholder="blur"
            />
            <div className="h-full w-full bg-black opacity-80"></div>
            <SliderContent data={x} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
