import { ContactResponse } from 'api/interface';
import { Heading } from 'components/Heading';
import { ContactAddress } from './ContactAddress';
import { ContactForm } from './ContactForm';

export const ContactSection: React.FC<{ contact: ContactResponse }> = ({ contact }) => {
  const { data } = contact;
  return (
    <div className="container py-4 md:px-8">
      <Heading text={'Contact'} />
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
