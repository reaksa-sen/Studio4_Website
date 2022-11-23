import { Heading } from 'components/Heading';
import { ClientItems } from 'components/Clients/Clients';
import { ClientsResponse } from 'api/interface';

export const HomeOurClients: React.FC<{ clients: ClientsResponse }> = ({ clients }) => {
  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={'Our Clients'} />
        <div className="block text-center">
          <ClientItems clients={clients} />
        </div>
      </div>
    </div>
  );
};
