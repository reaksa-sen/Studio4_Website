import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { NewsCard } from 'components/News/NewsCard';
import { Wrapper } from 'components/Wrapper';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { title } from 'process';

const News: NextPage = () => {
  const router = useRouter();
  const TITLE = 'News';
  const DESCRIPTION = 'Studio Four Team Members';
  return (
    <div className="mt-16">
      <Header title={TITLE} />
      <div className="container pb-6">
        <Heading text={'News'} />
        <NewsCard id={0} title={''} description={''} slug={''} image={undefined} />
      </div>
    </div>
  );
};

export default News;
