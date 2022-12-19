import { NewsResponses } from 'api/interface';
import Link from 'next/link';
import NextImage from 'components/Image';
import { useRouter } from 'next/router';

interface Props {
  news: NewsResponses;
}
interface INews {
  title: string;
  image: any;
  id: number;
}

export const NewsItem: React.FC<INews> = ({ image, title, id }) => {
  return (
    <Link href={`/news/${id}`}>
      <div className="flex h-full cursor-pointer flex-col">
        <div className="group">
          <NextImage
            className="transition duration-300 group-hover:scale-105"
            image={image}
            width={1.2}
            height={1}
            alt={title}
            layout={'responsive'}
            objectFit="cover"
          />

          <div className="flex flex-1 flex-col  bg-[#1E1E1E] p-3 group-hover:bg-stone-800">
            <p className="mt-2 font-heading text-lg leading-loose text-gray-200 line-clamp-3">
              {title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export const NewsList: React.FC<Props> = ({ news }) => {
  const { locale } = useRouter();
  const translateData = news.data.map(
    m => m.attributes.localizations.data.find(m => m.attributes.locale === locale) ?? m
  );

  return (
    <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {translateData.map(item => (
        <NewsItem
          id={item.id}
          key={item.attributes.title}
          title={item.attributes.title}
          image={item.attributes.image}
        />
      ))}
    </div>
  );
};
