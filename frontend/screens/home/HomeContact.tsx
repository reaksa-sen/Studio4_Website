import * as I from 'api/interface';
import { getContact } from 'api/strapiApi';
import { GetStaticProps } from 'next';
import { ContactSection } from 'screens/contact/ContactSection';

interface Props {
  contact: I.ContactResponse;
}

export const HomeContact: React.FC<Props> = ({ contact }) => <ContactSection contact={contact} />;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contact = await getContact();
  return {
    props: { contact },
    revalidate: 60
  };
};
