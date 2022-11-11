import { AboutResponse } from 'api/interface';
import { getAbout } from 'api/strapiApi';
import Header from 'components/Header';
import { Wrapper } from 'components/Wrapper';
import { GetStaticProps, NextPage } from 'next/types';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';

interface Props {
  about: AboutResponse;
}

const About: NextPage<Props> = ({ about }) => {
  const { lang } = useLanguageModalContext();
  const title = lang !== 'en' ? Khmer['about'] : English['about'];
  const translateData =
    about.data.attributes.localizations.data.find(x => x.attributes.locale === lang) ?? about.data;
  const data = lang === 'en' ? about.data : translateData;
  return (
    <>
      <Header title={title} siteUrl="/about" />
      <Wrapper>
        <article
          className="prose max-w-none pt-6"
          dangerouslySetInnerHTML={{ __html: data.attributes.content }}
        />
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about = await getAbout();
  return { props: { about }, revalidate: 60 };
};

export default About;
