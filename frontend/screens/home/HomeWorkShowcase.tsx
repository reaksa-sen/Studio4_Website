import { BlogAttribute, BlogsResponse } from 'api/interface';
import { Heading } from 'components/Heading';
import NextImage from 'components/Image';
import Link from 'next/link';
import Image from 'next/image';
import { SlSocialYoutube } from 'react-icons/sl';

interface EventListProps {
  data: BlogAttribute[];
}

interface EventItemsProps {
  id: number;
  slug: string;
  title: string;
  image: any;
}

const items = [
  {
    img: '/images/1.jpg',
    names: 'showcase1'
  },
  {
    img: '/images/2.jpg',
    names: 'showcase2'
  },
  {
    img: '/images/3.jpg',
    names: 'showcase3'
  },
  {
    img: '/images/4.jpg',
    names: 'showcase4'
  },

  {
    img: '/images/5.jpg',
    names: 'showcase5'
  },
  {
    img: '/images/6.png',
    names: 'showcase6'
  },
  {
    img: '/images/7.png',
    names: 'showcase6'
  },
  {
    img: '/images/8.png',
    names: 'showcase6'
  }
];

const EventItems: React.FC = () => {
  return (
    <Link href={''}>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {items.map((a, i) => (
          <div key={i} className="relative cursor-pointer">
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <SlSocialYoutube className="h-14 w-auto text-red-500" />
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
        ))}
      </div>
    </Link>
  );
};

export const HomeWorkShowcase: React.FC = () => {
  return (
    <div className="container py-4 px-8">
      <Heading text={'Works Showcase'} link="/" />
      <EventItems />
    </div>
  );
};
