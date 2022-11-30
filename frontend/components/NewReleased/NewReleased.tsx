import { IoPlayCircleSharp } from 'react-icons/io5';
import { MovieAttribute } from 'api/interface';
import { VideoPlayer } from 'components/Video/VideoPlayer';

interface Props {
  movie: MovieAttribute;
}

export const NewReleased: React.FC<Props> = ({ movie }) => {
  const { title, image, description, link } = movie.attributes;
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <VideoPlayer
        alt={title}
        link={link}
        image={image}
        playerIcon={
          <IoPlayCircleSharp className="h-14 w-auto text-primary-500 group-hover:text-primary-600 lg:h-20" />
        }
      />
      <div className="p-2 text-center md:text-left lg:max-w-sm">
        <h2 className="mb-4 font-heading text-lg text-white lg:text-2xl">{title}</h2>
        <p className="font-sans text-sm !leading-relaxed text-white lg:text-base lg:!leading-8">
          {description}
        </p>
      </div>
    </div>
  );
};
