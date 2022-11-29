import { ContactResponse } from 'api/interface';

const ContactField: React.FC<{ name: string; href: string; value: string }> = props => (
  <div className="pb-2">
    <span className="mr-2">{props.name}</span>
    <a href={props.href} className="text-primary-700">
      {props.value}
    </a>
  </div>
);

export const ContactHead: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="pb-4 text-xl font-bold text-black md:text-2xl">{title}</h2>
);

interface Props {
  // contact: ContactResponse;
  contact: {
    address: string;
    google_map_url: string;
  };
}

export const ContactAddress: React.FC<Props> = ({ contact }) => {
  // const { address, google_map_url, phone, email } = contact.data.attributes;
  const { address, google_map_url } = contact;
  return (
    <div className="flex flex-col space-y-6">
      <div>
        {/* <ContactHead title="Our Office" /> */}
        <iframe
          title="studio-4-address-location"
          className="h-72 w-full"
          src={google_map_url}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="w-full pr-8 pt-4  text-white">{address}</div>
      </div>
      {/* <div>
        <ContactHead title="Contact Us" />
        <div>
          <ContactField name="Phone" value={`${phone}`} href={`tel:${phone.replace(/ /g, '')}`} />
          <ContactField name="Email" value={email} href={`mailto:${email}`} />
          <ContactField name="Telegram" value="@advanauto" href={''} />
        </div>
      </div> */}

      {/* <div>
        <ContactHead title="Our Social" />
        <div className="flex gap-4">
          {facebook && <SocialButton link={facebook} icon="facebook" />}
          {instagram && <SocialButton link={instagram} icon="instagram" />}
          {tiktok && <SocialButton link={tiktok} icon="tiktok" />}
          {twitter && <SocialButton link={twitter} icon="twitter" />}
          {telegram && <SocialButton link={telegram} icon="telegram" />}
          {youtube && <SocialButton link={youtube} icon="youtube" />}
        </div>
      </div> */}
    </div>
  );
};
