import { BlogAttribute, BlogsResponse } from 'api/interface';
import { Heading } from 'components/Heading';
import NextImage from 'components/Image';
import Link from 'next/link';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';

interface EventListProps {
  data: BlogAttribute[];
}

interface EventItemsProps {
  id: number;
  slug: string;
  title: string;
  image: any;
}

const HeroItems: React.FC<EventListProps> = ({ data }) => {
  const { lang } = useLanguageModalContext();
  const translateData = data.map(
    b => b.attributes.localizations.data.find(b => b.attributes.locale === lang) ?? b
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {(lang === 'en' ? data : translateData).map((x, i) => (
        <EventItems
          key={`ei-${i}`}
          id={x.id}
          slug={x.attributes.slug}
          title={x.attributes.title}
          image={data[i].attributes.image}
        />
      ))}
    </div>
  );
};

const EventItems: React.FC<EventItemsProps> = ({ id, slug, title, image }) => {
  const { lang } = useLanguageModalContext();
  const TITLE = lang === 'km' ? Khmer['events'] : English['event'];

  return (
    <Link href={`/newsfeed/${id}/${slug}`} passHref key={title}>
      <a rel="noopener noreferrer">
        <div className="group flex flex-col space-y-4">
          <div className="aspect-w-16 aspect-h-9" style={{ position: 'relative' }}>
            <NextImage alt={title} image={image} size={'M'} layout="fill" />
          </div>
          <div>
            <div className="mb-2 font-semibold text-primary-100">{TITLE}</div>
            <div className="flex flex-col gap-4">
              <div className="text-lg font-semibold leading-relaxed text-gray-900 line-clamp-2 group-hover:text-primary-100 group-hover:underline">
                {title}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

const SecondaryItems: React.FC<EventListProps> = ({ data }) => {
  const { lang } = useLanguageModalContext();
  const translateData = data.map(
    b => b.attributes.localizations.data.find(b => b.attributes.locale === lang) ?? b
  );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {(lang === 'en' ? data : translateData).map((x, i) => (
        <EventItems
          key={i}
          id={x.id}
          slug={x.attributes.slug}
          title={x.attributes.title}
          image={data[i].attributes.image}
        />
      ))}
    </div>
  );
};

export const HomeEvents: React.FC<{ res: BlogsResponse }> = ({ res }) => {
  const { lang } = useLanguageModalContext();
  if (!(res?.data || []).length) return null;
  const heroData = res.data.slice(0, 2);
  const secondaryItemData = res.data.slice(2, 6);
  const TITLE = lang === 'km' ? Khmer['events'] : English['events'];

  return (
    <div className="container py-4">
      <Heading text={TITLE} link="/newsfeed" />
      <div className="grid grid-cols-1 space-y-4">
        <HeroItems data={heroData} />
        <SecondaryItems data={secondaryItemData} />
      </div>
    </div>
  );
};
