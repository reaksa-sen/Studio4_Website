import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { EventItems } from 'components/WorkShowcase/WorkShowcase';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { title } from 'process';

const WorkShowcase: NextPage = () => {
  const router = useRouter();
  const TITLE = 'Works';
  return (
    <div className="mt-16 md:mt-24">
      <Header title={TITLE} />
      <div className="container pb-6">
        <Heading text={'Works'} />
        <EventItems />
      </div>
    </div>
  );
};

export default WorkShowcase;
