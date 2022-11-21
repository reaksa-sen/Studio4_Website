import { useVideoModalContext } from 'hooks/videoModalHook';
import Image from 'next/image';
import { IoPlayCircleSharp } from 'react-icons/io5';

const items = [
  {
    img: '/images/released.jpg',
    names: 'showcase2',
    link: 'https://www.youtube.com/embed/0IPHcebt8AI',
    title: 'រឿង ជួបស៊យ៣'
  },
  {
    img: '/images/3.jpg',
    names: 'showcase3',
    link: 'https://www.youtube.com/embed/wWYL9zvxkhs',
    title: 'រឿង ជួបស៊យ៣'
  },
  {
    img: '/images/1.jpg',
    names: 'showcase1',
    link: 'https://www.youtube.com/embed/QYVfb2TFZiQ',
    title: 'រឿង ជួបស៊យ៣'
  },
  {
    img: '/images/4.jpg',
    names: 'showcase4',
    link: 'https://www.youtube.com/embed/uhzN2Jx6oj8',

    title: 'រឿង ជួបស៊យ៣'
  },

  {
    img: '/images/6.png',
    names: 'showcase6',
    link: 'https://www.youtube.com/embed/LZIcIQQF9Ls',
    title: 'រឿង ជួបស៊យ៣'
  },
  {
    img: '/images/5.jpg',
    names: 'showcase5',
    link: 'https://www.youtube.com/embed/9N-alyYE-YU',
    title: 'រឿង ជួបស៊យ៣'
  },
  {
    img: '/images/7.png',
    names: 'showcase7',
    link: 'https://www.youtube.com/embed/rDqnwSOJVcQ',
    title: 'រឿង ជួបស៊យ៣'
  },
  {
    img: '/images/8.png',
    names: 'showcase8',
    link: 'https://www.youtube.com/embed/BUufVIdXCm0',
    title: 'រឿង ជួបស៊យ៣'
  }
];

export const MoviesItems: React.FC = () => {
  const { onModalOpen } = useVideoModalContext();

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {items.map((a, i) => (
          <li key={i} className="group cursor-pointer">
            <div className="relative cursor-pointer " onClick={() => onModalOpen(a.link)}>
              <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <IoPlayCircleSharp className="h-14 w-auto text-red-500" />
              </div>
              <Image
                src={a.img}
                alt={a.names}
                height={1.1}
                width={1.7}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col pt-3 pl-2">
              <span className="text-white line-clamp-2 group-hover:text-primary-500 group-hover:underline">
                {a.title}
              </span>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};
