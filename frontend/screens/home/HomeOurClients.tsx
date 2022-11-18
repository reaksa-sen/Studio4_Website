import { Heading } from 'components/Heading';
import Link from 'next/link';
import Image from 'next/image';
import { ClientItems } from 'components/Clients/Clients';

export const HomeOurClients: React.FC = () => {
  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={'Our Clients'} link="/" />
        <div className="block text-center">
          <ClientItems />
        </div>
      </div>
    </div>
  );
};
