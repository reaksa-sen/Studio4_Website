import { MovieAttribute } from 'api/interface';
import { Heading } from 'components/Heading';
import { NewReleased } from 'components/NewReleased/NewReleased';
import { useTranslation } from 'next-i18next';

export const HomeNewReleased: React.FC<{ movie: MovieAttribute }> = ({ movie }) => {
  const { t } = useTranslation();
  return (
    <div className="container py-4 md:px-8">
      <Heading text={t('new-released')} link="/movies" />
      <NewReleased movie={movie} />
    </div>
  );
};
