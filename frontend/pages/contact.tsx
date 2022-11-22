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

const About: NextPage<Props> = () => {
  // const { data } = contact;

  return (
    <div className="container mt-16 md:mt-24">
      <Header title={'Contact'} siteUrl="/contact" />
      <Heading text={'Contact'} />
      <div className="grid gap-8 pb-6 md:grid-cols-2">
        <ContactAddress
          contact={{
            address:
              'OneWorld Information Technology Co., Ltd No. 336C st 93 Corner 282, Boeung Kengkong 1 Commune, Boeung Kengkong District, Phnom Penh, Cambodia 12211',
            google_map_url:
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.966401567658!2d104.91875771471881!3d11.554266347513604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513d577464f9%3A0xce74c8b169973bd1!2sOneworld%20Technology!5e0!3m2!1sen!2skh!4v1648529706836!5m2!1sen!2skh'
          }} // contact={{
          //   address: data.attributes.address,
          //   google_map_url: data.attributes.google_map_url
          // }}
        />
        <ContactForm />
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const contact = await getContact();
//   return {
//     props: { contact },
//     revalidate: 60
//   };
// };

export default About;
