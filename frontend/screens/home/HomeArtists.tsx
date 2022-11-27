import { ArtistsResponse } from 'api/interface';
import { ArtistList } from 'components/Artists/ArtistsList';
import { Heading } from 'components/Heading';

export const HomeArtists: React.FC<{ artists: ArtistsResponse }> = ({ artists }) => {
  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={'Artists'} link="/artists" />
        <ArtistList artists={artists} />
      </div>
    </div>
  );
};
