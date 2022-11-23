import * as I from 'api/interface';
import { getContact } from 'api/strapiApi';
import { Heading } from 'components/Heading';
import { GetStaticProps } from 'next';
import { ContactAddress } from 'screens/contact/ContactAddress';
import { ContactForm } from 'screens/contact/ContactForm';

interface Props {
  contact: I.ContactResponse;
}

export const HomeContact: React.FC<Props> = ({ contact }) => {
  const { data } = contact;

  return (
    <div>
      <div className="container py-4 md:px-8">
        <Heading text={'Contact'} />
        <div className="flex flex-col justify-between gap-14 md:grid md:grid-cols-4 md:pr-8">
          <div className="col-span-2 flex flex-col space-y-8">
            <ContactAddress
              contact={{
                address: data.attributes.address,
                google_map_url: data.attributes.google_map_url
              }}
            />
          </div>
          <div className="col-span-2">
            <ContactForm />
          </div>
        </div>
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
