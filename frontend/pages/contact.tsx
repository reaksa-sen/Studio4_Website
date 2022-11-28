import { ContactForm } from 'screens/contact/ContactForm';
import { ContactAddress } from 'screens/contact/ContactAddress';
import { GetStaticProps, NextPage } from 'next/types';
import { Heading } from 'components/Heading';
import { getContact } from 'api/strapiApi';
import Header from 'components/Header';
import * as I from 'api/interface';

interface Props {
  contact: I.ContactResponse;
}

const Contact: NextPage<Props> = ({ contact }) => {
  const { data } = contact;

  return (
    <div className="container mt-16 md:mt-24">
      <Header title={'Contact'} siteUrl="/contact" />
      <Heading text={'Contact'} />
      <div className="grid gap-8 pb-6 md:grid-cols-2">
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contact = await getContact();
  return {
    props: { contact },
    revalidate: 60
  };
};

export default Contact;
