import { BlogAttribute } from 'api/interface';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import Link from 'next/link';
import { dateFormat } from 'utils/date';
import NextImage from '../Image';

interface Props {
  title: string;
  data: BlogAttribute[];
}

export const NewsCategoryList: React.FC<Props> = ({ data, title }) => {
  const { lang } = useLanguageModalContext();
  const translateData = data.map(
    b => b.attributes.localizations.data?.find(b => b.attributes.locale === lang) ?? b
  );
  const locale = lang === 'en' ? 'en-Us' : 'km-KH';
  return (
    <div>
      <ul className="divide-y">
        <div className="pb-2 text-lg font-bold uppercase text-gray-900">{title}</div>
        {(lang === 'en' ? data : translateData).map((x, i) => (
          <li className="grid grid-cols-3 gap-2 py-3" key={x.id}>
            <div className="col-span-1">
              <NextImage
                alt={x.attributes.title}
                image={data[i].attributes.image}
                width="16"
                height="9"
                size={'M'}
                layout="responsive"
              />
            </div>
            <div className="col-span-2">
              <Link href={`/newsfeed/${x.id}/${x.attributes.slug}`} passHref>
                <a className="text-sm text-black line-clamp-2 hover:text-primary-100 hover:underline">
                  {x.attributes.title}
                </a>
              </Link>
              <div className="pt-1 text-xs text-gray-600">
                {dateFormat(x.attributes.createdAt, locale)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
