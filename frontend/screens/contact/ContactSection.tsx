import { ContactResponse } from 'api/interface';
import { Heading } from 'components/Heading';
import { ContactAddress } from './ContactAddress';
import { ContactForm } from './ContactForm';
import { useTranslation } from 'react-i18next';

export const ContactSection: React.FC<{ contact: ContactResponse }> = ({ contact }) => {
  const { t } = useTranslation();
  const { data } = contact;
  return (
    <div className="container py-4 md:px-8">
      <Heading text={t('contact')} />
      <div className="grid gap-14 md:grid-cols-2">
        <ContactAddress
          contact={{
            address: data.attributes.address,
            google_map_url: data.attributes.google_map_url
          }}
        />
        <ContactForm />
      </div>
    </div>
  );
};
