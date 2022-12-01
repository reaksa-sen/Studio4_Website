import { GetStaticProps, NextPage } from 'next/types';
import { getContact } from 'api/strapiApi';
import Header from 'components/Header';
import * as I from 'api/interface';
import { ContactSection } from 'screens/contact/ContactSection';

interface Props {
  contact: I.ContactResponse;
}

const Contact: NextPage<Props> = ({ contact }) => (
  <div className="mt-16">
    <Header title={'Contact'} siteUrl="/contact" />
    <ContactSection contact={contact} />
  </div>
);

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contact = await getContact();
  return {
    props: { contact },
    revalidate: 60
  };
};

export default Contact;
