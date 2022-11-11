import { PartnerAttribute, PartnersResponse } from 'api/interface';
import { getStrapiMedia } from 'api/media';
import { Heading } from 'components/Heading';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import Link from 'next/link';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';

const PartnerItem: React.FC<{ res: PartnerAttribute }> = ({ res }) => (
  <Link href={res.attributes.link ?? ''}>
    <a target="_blank">
      {/* <NextImage alt={title} width={1} height={1} image={res.attributes.image} layout="responsive" /> */}
      <img
        className="inline-block h-24 w-auto px-4 py-4"
        src={getStrapiMedia(res.attributes.image, 'M')}
        alt={res.attributes.name}
      />
    </a>
  </Link>
);

export const HomePartner: React.FC<{ res: PartnersResponse }> = ({ res }) => {
  if (!(res?.data || []).length) return null;
  const { lang } = useLanguageModalContext();
  const TITLE = lang === 'km' ? Khmer['partnership'] : English['partnership'];
  return (
    <div className="container py-4">
      <Heading text={TITLE} />
      <div className="block text-center">
        {res.data.map((partner, idx) => (
          <PartnerItem key={idx} res={partner} />
        ))}
      </div>
    </div>
  );
};
