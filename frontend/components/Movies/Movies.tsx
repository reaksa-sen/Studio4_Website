import { MoviesResponse } from 'api/interface';
import { useVideoModalContext } from 'hooks/videoModalHook';
import { IoPlayCircleSharp } from 'react-icons/io5';
import Link from 'next/link';
import NextImage from 'components/Image';

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
            <NextImage
              className="transition duration-300 group-hover:scale-105"
              image={image}
              alt={title}
              size={'M'}
              width={1.7}
              height={1.1}
              layout="responsive"
              objectFit="cover"
            />

            <div className="flex flex-col pt-3 pl-2">
              <span className="font-heading text-lg text-white group-hover:text-primary-600 group-hover:underline md:text-base">
                {title}
              </span>
            </div>
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
          image={x.attributes.image}
          title={x.attributes.title}
          description={x.attributes.description}
          link={x.attributes.link}
        />
      ))}
    </div>
  );
};
