import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';

export const ContactHead: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="pb-4 text-xl font-bold text-stone-900 md:text-2xl">{title}</h2>
);

const ContactField: React.FC<{ name: string; href: string; value: string }> = props => (
  <>
    <span className="mr-2">{props.name}</span>
    <a href={props.href} className="text-primary-100">
      {props.value}
    </a>
    <br />
  </>
);

interface Props {
  address: string;
  email: string;
  googleMapUrl: string;
  phone: string;
  telegram: string;
  locale: string;
}

export const ContactAddress: React.FC<Props> = props => {
  const { address = '', phone = '', email = '', googleMapUrl = '', telegram = '', locale } = props;
  const isKh = locale === 'km';
  return (
    <div>
      <ContactHead title={isKh ? Khmer['contact-us'] : English['contact-us']} />

      <div>
        <ContactField
          name={isKh ? Khmer['phone'] : English['phone']}
          value={phone}
          href={`tel:${phone.replace(/ /g, '')}`}
        />
        <ContactField
          name={isKh ? Khmer['email'] : English['email']}
          value={email}
          href={`mailto:${email}`}
        />
        <ContactField
          name={isKh ? Khmer['telegram'] : English['telegram']}
          value={telegram}
          href={telegram}
        />
      </div>
      <br />

      <ContactHead title={isKh ? Khmer['our-office'] : English['our-office']} />
      <address className="pr-8">{address}</address>

      <iframe
        src={googleMapUrl}
        className="h-64 w-full pt-8"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
