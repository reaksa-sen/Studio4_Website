import { Heading } from 'components/Heading';
import { ClientList } from 'components/Clients/Clients';
import { ClientsResponse } from 'api/interface';
import { useTranslation } from 'react-i18next';

export const HomeOurClients: React.FC<{ clients: ClientsResponse }> = ({ clients }) => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={t('our-clients')} />
        <ClientList clients={clients} />
      </div>
    </div>
  );
};
