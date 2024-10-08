import { Heading } from 'components/Heading';
import { NewReleased } from 'components/NewReleased/NewReleased';

export const HomeReleased: React.FC = () => {
  return (
    <div className="container py-4 md:px-8">
      <Heading text={'New Released'} link="/movies" />
      <NewReleased />
    </div>
  );
};
