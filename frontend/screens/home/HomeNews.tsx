import { NewsResponses } from 'api/interface';
import { Heading } from 'components/Heading';
import { NewsList } from 'components/News/NewsList';

export const HomeNews: React.FC<{ news: NewsResponses }> = ({ news }) => {
  return (
    <div className="container py-4 md:px-8">
      <Heading text={'News'} link="/news" />
      <NewsList news={news} />
    </div>
  );
};
