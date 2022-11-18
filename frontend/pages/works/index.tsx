import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { EventItems } from 'components/WorkShowcase/WorkShowcase';
import { Wrapper } from 'components/Wrapper';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { title } from 'process';

const WorkShowcase: NextPage = () => {
  const router = useRouter();
  const TITLE = 'Works';
  const DESCRIPTION = 'Studio Four Team Members';
  return (
    <div className="mt-14">
      <Wrapper>
        <Header title={TITLE} />
        <div className="container ">
          <Heading text={'Works'} />
          <EventItems />
        </div>
      </Wrapper>
    </div>
  );
};

export default WorkShowcase;
