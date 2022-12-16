import { MoviesResponse } from 'api/interface';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { VideoPlayer } from 'components/Video/VideoPlayer';
import { useRouter } from 'next/router';

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
  return (
    <div className="group cursor-pointer pt-3">
      <VideoPlayer
        alt={title}
        link={link}
        image={image}
        playerIcon={
          <IoPlayCircleSharp className="h-14 w-auto text-primary-500 group-hover:text-primary-600" />
        }
      />
      <div className="flex flex-col pt-3 pl-2">
        <span className="font-heading text-lg text-white group-hover:text-primary-600 group-hover:underline md:text-base">
          {title}
        </span>
      </div>
    </div>
  );
};

export const MovieList: React.FC<Props> = ({ movies }) => {
  const { locale } = useRouter();
  const translateData = movies.data.map(
    m => m.attributes.localizations.data.find(m => m.attributes.locale === locale) ?? m
  );

  return (
    <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {translateData.map(x => (
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
