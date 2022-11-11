import { BlogAttribute } from 'api/interface';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import Link from 'next/link';

import NextImage from '../Image';

interface NewsFeedListProps {
  data: BlogAttribute[];
}
export const NewsFeedList: React.FC<NewsFeedListProps> = ({ data }) => {
  const { lang } = useLanguageModalContext();
  const translateData = data.map(
    b => b.attributes.localizations.data.find(b => b.attributes.locale === lang) ?? b
  );
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-1">
      {(lang === 'en' ? data : translateData).map((x, i) => (
        <Link href={`/newsfeed/${x.id}/${x.attributes.slug}`} passHref key={x.attributes.title}>
          <a rel="noopener noreferrer">
            <div className="group flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div
                className="aspect-h-9 aspect-w-16 w-full flex-shrink-0 sm:aspect-h-1 sm:h-40 sm:w-64"
                style={{ position: 'relative' }}
              >
                <NextImage
                  alt={x.attributes.title}
                  image={data[i].attributes.image}
                  size={'M'}
                  layout="fill"
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="text-lg font-semibold leading-relaxed text-gray-900 line-clamp-2 group-hover:text-primary-100 group-hover:underline">
                  {x.attributes.title}
                </div>
                <div className="text-base leading-relaxed text-gray-500 line-clamp-2 group-hover:text-primary-100">
                  {x.attributes.description}
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
