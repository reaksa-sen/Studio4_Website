import { Heading } from 'components/Heading';
import { NewsList } from 'components/News/NewsList';
export const HomeNews: React.FC = () => {
  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={'News'} link="/news" />
        <div>
          <NewsList id={0} title={''} description={''} slug={''} image={undefined} />
        </div>
      </div>
    </div>
  );
};
