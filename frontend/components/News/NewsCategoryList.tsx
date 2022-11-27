import { NewsAttribute, NewsResponses } from 'api/interface';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  news: NewsAttribute[];
}
interface INews {
  title: string;
  image: any;
  id?: number;
}
const NewsCategoryItem: React.FC<INews> = ({ image, title, id }) => {
  return (
    <>
      <li className="grid grid-cols-3 gap-2 py-3">
        <div className="col-span-1 cursor-pointer">
          <Image
            alt={title}
            src={image}
            width="16"
            height="9"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="col-span-2">
          <Link href={`/news/${id}`} passHref>
            <a className="font-heading text-xs leading-normal text-white line-clamp-2 hover:text-primary-500 hover:underline">
              {title}
            </a>
          </Link>
        </div>
      </li>
    </>
  );
};

export const NewsCategoryList: React.FC<Props> = ({ news }) => {
  return (
    <ul className="divide-y divide-primary-600">
      <div className=" pb-2 font-sans text-lg uppercase text-white">lists news</div>
      {news.map((item, i) => (
        <NewsCategoryItem
          key={item.attributes.title}
          image={item.attributes.image?.data?.attributes.url}
          title={item.attributes.title}
          id={item.id}
        />
      ))}
    </ul>
  );
};
