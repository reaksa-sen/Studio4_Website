import { NewsResponses } from 'api/interface';
import { Heading } from 'components/Heading';
import { NewsList } from 'components/News/NewsList';
import { useTranslation } from 'react-i18next';

export const HomeNews: React.FC<{ news: NewsResponses }> = ({ news }) => {
  const { t } = useTranslation();
  return (
    <div className="container py-4 md:px-8">
      <Heading text={t('news')} link="/news" />
      <NewsList news={news} />
    </div>
  );
};
