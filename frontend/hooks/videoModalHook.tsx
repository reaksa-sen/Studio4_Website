import { VideoModal } from 'components/Video/VideoModal';
import { createContext, useContext, useState } from 'react';

interface VideoModelContextType {
  src: string;
  onModalOpen: (src: string) => void;
}

const VideoModalContext = createContext<VideoModelContextType>(null!);

export const useVideoModalContext = () => useContext(VideoModalContext);

export const VideoModalProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState('');

  function onModalOpen(mySrc: string) {
    setSrc(mySrc);
    setOpen(true);
  }

  return (
    <VideoModalContext.Provider value={{ onModalOpen, src }}>
      {children}
      <VideoModal open={open} setOpen={setOpen} src={src} />
    </VideoModalContext.Provider>
  );
};
