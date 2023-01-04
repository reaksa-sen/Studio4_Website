import { NextSeo } from 'next-seo';
import Head from 'next/head';

interface Props {
  title: string;
  description?: string;
  imageUrl?: any;
  siteUrl?: string;
}

const Header: React.FC<Props> = ({ title, description, imageUrl, siteUrl }) => {
  // const FB_DOMAIN_APP_ID = process.env.NEXT_FB_DOMAIN_APP_ID;
  const defaultSiteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${siteUrl || ''}`;
  const defaultImageUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${imageUrl || '/images/studio4_logo.jpg'}`; // prettier-ignore
  const defaultTitle = 'Angkor dc';
  const defaultDescription =
    description ||
    'As one of the biggest movie organization in Cambodia, we strive to bring fun and entertainment to people of all ages while fostering creativity and innovation through our movies.';

  return (
    <>
      <NextSeo
        title={`${title} - ${defaultTitle}`}
        description={defaultDescription}
        canonical={defaultSiteUrl}
        openGraph={{
          url: defaultSiteUrl,
          type: 'website',
          title: `${title} - ${defaultTitle}`,
          site_name: defaultTitle,
          description: defaultDescription,
          images: [{ url: defaultImageUrl, width: 800, height: 600, alt: defaultTitle }]
        }}
        twitter={
          {
            // site: defaultSiteUrl,
            // cardType: 'summary_large_image'
          }
        }
        // facebook={{
        //   appId: `${FB_DOMAIN_APP_ID}`
        // }}
      />
      <NextSeo />
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={defaultSiteUrl} />
        <meta name="twitter:title" content={`${title} - ${defaultTitle}`} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={defaultImageUrl} />
        <meta name="theme-color" content="#F8931D" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <meta name="googlebot" content="index,follow" />
        {/* <meta name="facebook-domain-verification" content={`${FB_DOMAIN_APP_ID}`} /> */}
        <link rel="icon" as="image/x-icon" href="/images/studio4_logo.jpg" />
      </Head>
    </>
  );
};

export default Header;
