import { IoPlayCircleSharp } from 'react-icons/io5';
import { MovieAttribute } from 'api/interface';
import { VideoPlayer } from 'components/Video/VideoPlayer';
import { useRouter } from 'next/router';

interface Props {
  movie: MovieAttribute;
}

export const NewReleased: React.FC<Props> = ({ movie }) => {
  const { locale } = useRouter();
  const { title, image, link } = movie.attributes;

  const translateData =
    movie.attributes.localizations.data.find(x => x.attributes.locale === locale) ?? movie;

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
      <div className="p-2 text-center text-white md:text-left lg:max-w-sm">
        <h2 className="mb-4 font-heading text-lg lg:text-2xl">{translateData.attributes.title}</h2>
        <p className="break-all font-sans text-sm !leading-relaxed lg:text-base lg:!leading-8">
          {translateData.attributes.description}
        </p>
      </div>
    </div>
  );
};
