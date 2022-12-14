import { ArtistsResponse } from 'api/interface';
import { ArtistList } from 'components/Artists/ArtistsList';
import { Heading } from 'components/Heading';
import { useTranslation } from 'react-i18next';

export const HomeArtists: React.FC<{ artists: ArtistsResponse }> = ({ artists }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={t('artists')} link="/artists" />
        <ArtistList artists={artists} />
      </div>
    </div>
  );
};
