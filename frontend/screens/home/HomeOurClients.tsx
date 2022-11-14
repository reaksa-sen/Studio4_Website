/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Heading } from 'components/Heading';
import Link from 'next/link';
import Image from 'next/image';

const items = [
  {
    img: '/images/11.png',
    name: 'client6'
  },
  {
    img: '/images/10.png',
    name: 'client7'
  },
  {
    img: '/images/9.png',
    name: 'client8'
  },
  {
    img: '/images/Mono.png',
    name: 'client5'
  }
];

const ClientItems: React.FC = () => {
  return (
    <div>
      {items.map((a, i) => (
        <img src={a.img} alt={a.name} className="inline-block h-24 w-auto py-4 px-5" />
      ))}
    </div>
  );
};

export const HomeOurClients: React.FC = () => {
  return (
    <div>
      <div className="container py-4 px-8">
        <Heading text={'Our Clients'} link="/" />
        <div className="block text-center">
          <ClientItems />
        </div>
      </div>
    </div>
  );
};
