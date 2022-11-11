import { BlogsResponse } from 'api/interface';
import { Heading } from 'components/Heading';
import { NewsFeedList } from 'components/NewsFeed/NewsFeedList';
import { Fade } from 'react-awesome-reveal';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';

export const HomeLatestNews: React.FC<{ res: BlogsResponse }> = ({ res }) => {
  if (!(res?.data || []).length) return null;
  const { lang } = useLanguageModalContext();
  const TITLE = lang === 'km' ? Khmer['latest-news'] : English['latest-news'];
  return (
    <div className="container py-4">
      <Heading text={TITLE} link="/newsfeed" />

      <Fade triggerOnce>
        <NewsFeedList data={res.data} />
      </Fade>
    </div>
  );
};
