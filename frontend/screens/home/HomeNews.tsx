import { Heading } from 'components/Heading';
import { NewsCard } from 'components/NewsCard';
import Image from 'next/image';

export const HomeNews: React.FC = () => {
  return (
    <div>
      <div className="container py-4 px-8">
        <Heading text={'News'} link="/" />
        <div>
          <NewsCard id={0} title={''} description={''} slug={''} image={undefined} />
        </div>
      </div>
    </div>
  );
};
