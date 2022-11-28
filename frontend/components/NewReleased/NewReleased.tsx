import { useVideoModalContext } from 'hooks/videoModalHook';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { MovieAttribute } from 'api/interface';
import NextImage from 'components/Image';

interface Props {
  movie: MovieAttribute;
}
interface IMovie {
  image: any;
  title: string;
  description: string;
  link: string;
}

const NewReleasedItem: React.FC<IMovie> = ({ image, title, link, description }) => {
  const { onModalOpen } = useVideoModalContext();
  return (
    <>
      <div className="relative cursor-pointer" onClick={() => onModalOpen(link)}>
        <div className="group cursor-pointer overflow-hidden">
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <IoPlayCircleSharp className="h-14 w-auto text-primary-500 group-hover:text-primary-600 lg:h-20" />
          </div>
          <NextImage
            className="transition duration-300 group-hover:scale-105"
            image={image}
            alt={title}
            height={9.5}
            width={15}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="p-2 text-center md:text-left lg:max-w-sm">
        <h2 className="mb-4 font-heading text-lg text-white lg:text-2xl">{title}</h2>
        <p className="font-sans text-sm !leading-relaxed text-white lg:text-base lg:!leading-8">
          {description}
        </p>
      </div>
    </>
  );
};

export const NewReleased: React.FC<Props> = ({ movie }) => {
  return (
    <div>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2  ">
        <NewReleasedItem
          key={movie.attributes.title}
          image={movie.attributes.image}
          title={movie.attributes.title}
          description={movie.attributes.description}
          link={movie.attributes.link}
        />
      </div>
    </div>
  );
};
