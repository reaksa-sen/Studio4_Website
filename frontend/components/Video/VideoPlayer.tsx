import NextImage from 'components/Image';
import { useVideoModalContext } from 'hooks/videoModalHook';
import { ReactNode } from 'react';

interface IVideoPlayer {
  alt: string;
  link: string;
  image: any;
  playerIcon: ReactNode;
}

export const VideoPlayer: React.FC<IVideoPlayer> = ({ alt, link, image, playerIcon }) => {
  const { onModalOpen } = useVideoModalContext();
  return (
    <div className="relative cursor-pointer" onClick={() => onModalOpen(link)}>
      <div className="group cursor-pointer overflow-hidden">
        <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          {playerIcon}
        </div>
        <NextImage
          className="transition duration-300 group-hover:scale-105"
          image={image}
          alt={alt}
          size={'M'}
          height={9.5}
          width={15}
          layout="responsive"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
