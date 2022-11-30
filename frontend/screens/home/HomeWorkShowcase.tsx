import { WorkShowcasesResponse } from 'api/interface';
import { Heading } from 'components/Heading';
import { WorkShowcase } from 'components/WorkShowcase/WorkShowcase';

export const HomeWorkShowcase: React.FC<{ data: WorkShowcasesResponse }> = ({ data }) => {
  return (
    <div className="container py-4 md:px-8">
      <Heading text={'Works Showcase'} link="/works" />
      <WorkShowcase data={data} />
    </div>
  );
};
