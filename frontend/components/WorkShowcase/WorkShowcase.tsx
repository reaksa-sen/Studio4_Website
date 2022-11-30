import { CiYoutube } from 'react-icons/ci';
import { WorkShowcasesResponse } from 'api/interface';
import { VideoPlayer } from 'components/Video/VideoPlayer';

interface Props {
  data: WorkShowcasesResponse;
}

export const WorkShowcase: React.FC<Props> = ({ data }) => {
  return (
    <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {data?.data.map(item => (
        <VideoPlayer
          key={item.id}
          alt={item.attributes.title}
          link={item.attributes.link}
          image={item.attributes.image}
          playerIcon={
            <CiYoutube className="h-14 w-auto text-primary-500 group-hover:text-primary-600" />
          }
        />
      ))}
    </div>
  );
};
