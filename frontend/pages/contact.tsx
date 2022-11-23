import * as I from 'api/interface';
import { getContact } from 'api/strapiApi';
import Header from 'components/Header';
import { Wrapper } from 'components/Wrapper';
import { GetStaticProps, NextPage } from 'next/types';
import { ContactAddress } from 'screens/contact/ContactAddress';
import { ContactForm } from 'screens/contact/ContactForm';
import { title } from 'process';
import { Heading } from 'components/Heading';

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
