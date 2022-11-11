import { AboutResponse } from 'api/interface';
import NextImage from 'components/Image';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import { LinkButton } from './Button';
import English from 'public/languages/english/translation.json';
import Khmer from 'public/languages/khmer/translation.json';

export const Section: React.FC<{ res: AboutResponse }> = ({ res }) => {
  const { lang } = useLanguageModalContext();
  const translateData = (
    res.data.attributes.localizations.data.find(x => x.attributes.locale === lang) ?? res.data
  ).attributes;
  const { image } = res.data.attributes;
  const { title, description } = lang !== 'en' ? translateData : res.data.attributes;

  return (
    <div className=" bg-stone-900 py-12">
      <div className="container grid grid-cols-1 gap-8 py-8 lg:grid-cols-2 lg:gap-x-8 lg:py-0">
        <div className="relative ">
          <NextImage
            alt={title}
            image={image}
            width="16"
            height="9"
            size={'M'}
            layout="responsive"
          />
        </div>
        <div className="m-auto space-y-3 text-center md:text-left">
          <p className="text-3xl font-bold uppercase text-white">{title}</p>
          <p className="text-lg text-gray-400 line-clamp-4 lg:line-clamp-4">{description}</p>
          <LinkButton href="/about">
            {lang === 'en' ? English['more-detail'] : Khmer['more-detail']}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};
