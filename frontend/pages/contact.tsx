import * as I from 'api/interface';
import { getContact } from 'api/strapiApi';
import Header from 'components/Header';
import { Wrapper } from 'components/Wrapper';
import { GetStaticProps, NextPage } from 'next/types';
import { ContactAddress } from 'screens/contact/ContactAddress';
import { ContactForm } from 'screens/contact/ContactForm';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';

interface Props {
  contact: I.ContactResponse;
}

const About: NextPage<Props> = ({ contact }) => {
  const { lang } = useLanguageModalContext();
  const { address, email, google_map_url, phone, telegram } = contact?.data?.attributes || {};
  const title = lang !== 'en' ? Khmer['contact-us'] : English['contact-us'];
  return (
    <>
      <Header title={title} siteUrl="/contact" />
      <Wrapper>
        <div className="grid gap-8 py-4 md:grid-cols-2">
          <ContactAddress
            address={address}
            email={email}
            googleMapUrl={google_map_url}
            phone={phone}
            telegram={telegram}
            locale={lang}
          />
          <ContactForm locale={lang} />
        </div>
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const contact = await getContact();
  return {
    props: { contact },
    revalidate: 60
  };
};

export default About;
