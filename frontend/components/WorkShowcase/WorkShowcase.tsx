import Image from 'next/image';
import NextImage from 'components/Image';
import { CiYoutube } from 'react-icons/ci';
import { useVideoModalContext } from 'hooks/videoModalHook';

const items = [
  {
    img: '/images/1.jpg',
    names: 'showcase1',
    link: 'https://www.youtube.com/embed/QYVfb2TFZiQ'
  },
  {
    img: '/images/2.jpg',
    names: 'showcase2',
    link: 'https://www.youtube.com/embed/0IPHcebt8AI'
  },
  {
    img: '/images/3.jpg',
    names: 'showcase3',
    link: 'https://www.youtube.com/embed/wWYL9zvxkhs'
  },
  {
    img: '/images/4.jpg',
    names: 'showcase4',
    link: 'https://www.youtube.com/embed/uhzN2Jx6oj8'
  },

  {
    img: '/images/5.jpg',
    names: 'showcase5',
    link: 'https://www.youtube.com/embed/9N-alyYE-YU'
  },
  {
    img: '/images/6.png',
    names: 'showcase6',
    link: 'https://www.youtube.com/embed/LZIcIQQF9Ls'
  },
  {
    img: '/images/7.png',
    names: 'showcase7',
    link: 'https://www.youtube.com/embed/rDqnwSOJVcQ'
  },
  {
    img: '/images/8.png',
    names: 'showcase8',
    link: 'https://www.youtube.com/embed/BUufVIdXCm0'
  }
];

export const EventItems: React.FC = () => {
  const { onModalOpen } = useVideoModalContext();
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {items.map((a, i) => (
        <div key={i} className="relative cursor-pointer " onClick={() => onModalOpen(a.link)}>
          <div className="group cursor-pointer overflow-hidden">
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <CiYoutube className="h-14 w-auto text-primary-500 group-hover:text-primary-600" />
            </div>
            <Image
              className="transition duration-300 group-hover:scale-105"
              src={a.img}
              alt={a.names}
              height={1.1}
              width={1.7}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
