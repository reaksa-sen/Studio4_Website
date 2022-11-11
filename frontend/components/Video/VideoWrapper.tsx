import { useVideoModalContext } from 'hooks/videoModalHook';

import { VideoList } from './VideoIList';
import { VideoListItem } from './VideoListItem';

interface Props {
  tag: string;
  data: Array<{ url: string; title: string; image: any }>;
}

export const VideoWrapper: React.FC<Props> = ({ data, tag }) => {
  const { onModalOpen } = useVideoModalContext();

  return (
    <VideoList>
      {data.map((x, i) => (
        <VideoListItem
          image={x.image}
          key={x.url}
          onClick={() => onModalOpen(x.url)}
          tag={tag}
          title={x.title}
          url={x.url}
        />
      ))}
    </VideoList>
  );
};
