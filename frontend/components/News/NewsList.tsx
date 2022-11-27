import { NewsResponses } from 'api/interface';
import Image from 'next/image';
import Link from 'next/link';

interface INews {
  title: string;
  image: any;
  id: number;
}

export const NewsItem: React.FC<INews> = ({ image, title, id }) => {
  return (
    <>
      <Link href={`/news/${id}`}>
        <div className="flex h-full cursor-pointer flex-col overflow-hidden">
          <div className="group cursor-pointer ">
            <Image
              className="transition duration-300 group-hover:scale-105"
              src={image}
              width={1.2}
              height={1}
              alt={'M'}
              layout={'responsive'}
              objectFit="cover"
            />

            <div className="flex flex-1 flex-col  bg-[#1E1E1E] p-3 hover:bg-stone-800">
              <div className="mt-2 block">
                <div>
                  <p className="font-heading text-lg leading-loose text-gray-200 line-clamp-3">
                    {title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export const NewsList: React.FC<{ news: NewsResponses }> = ({ news }) => {
  return (
    <div className="my-5 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {news.data.map(item => (
        <NewsItem
          id={item.id}
          key={item.attributes.title}
          title={item.attributes.title}
          image={item.attributes.image?.data?.attributes.url}
        />
      ))}
    </div>
  );
};
