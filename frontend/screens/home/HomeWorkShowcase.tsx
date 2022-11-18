import { BlogAttribute, BlogsResponse } from 'api/interface';
import { Heading } from 'components/Heading';
import { EventItems } from 'components/WorkShowcase/WorkShowcase';

interface EventListProps {
  data: BlogAttribute[];
}

interface EventItemsProps {
  id: number;
  slug: string;
  title: string;
  image: any;
}

export const HomeWorkShowcase: React.FC = () => {
  return (
    <div className="container py-4 md:px-8">
      <Heading text={'Works Showcase'} link="/works" />
      <EventItems />
    </div>
  );
};
