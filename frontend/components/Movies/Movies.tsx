import { MoviesResponse } from 'api/interface';
import { useVideoModalContext } from 'hooks/videoModalHook';
import Image from 'next/image';
import { IoPlayCircleSharp } from 'react-icons/io5';

interface Props {
  movies: MoviesResponse;
}
interface IMovie {
  image: any;
  title: string;
  description: string;
  link: string;
}

const MovieItem: React.FC<IMovie> = ({ image, title, link }) => {
  const { onModalOpen } = useVideoModalContext();

  return (
    <>
      <li className="group cursor-pointer">
        <div className="group cursor-pointer overflow-hidden">
          <div className="relative cursor-pointer " onClick={() => onModalOpen(link)}>
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <IoPlayCircleSharp className="h-14 w-auto text-primary-500 group-hover:text-primary-600" />
            </div>
            <Image
              className="transition duration-300 group-hover:scale-105"
              src={image}
              alt={title}
              height={1.1}
              width={1.7}
              layout="responsive"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col pt-3 pl-2">
            <span className="font-heading text-lg text-white group-hover:text-primary-600 group-hover:underline md:text-base">
              {title}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {movies.data?.map(x => (
        <MovieItem
          key={x.id}
          image={x.attributes.image?.data?.attributes.url}
          title={x.attributes.title}
          description={x.attributes.description}
          link={x.attributes.link}
        />
      ))}
    </div>
  );
};
