import { Heading } from 'components/Heading';
import { ClientList } from 'components/Clients/Clients';
import { ClientsResponse } from 'api/interface';

export const HomeOurClients: React.FC<{ clients: ClientsResponse }> = ({ clients }) => {
  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={'Our Clients'} />
        <ClientList clients={clients} />
      </div>
    </div>
  );
};
