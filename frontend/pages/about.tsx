import { GetStaticProps, NextPage } from 'next/types';
import { Wrapper } from 'components/Wrapper';
import { AboutResponse } from 'api/interface';
import { getAbout } from 'api/strapiApi';
import Header from 'components/Header';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface Props {
  about: AboutResponse;
}

const About: NextPage<Props> = ({ about }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const translateData =
    about.data.attributes.localizations.data.find(m => m.attributes.locale === locale) ??
    about.data;

  return (
    <div className="mt-16 md:mt-20">
      <Header title={t('about')} siteUrl="/about" />
      <Wrapper>
        <article
          className=" prose max-w-none text-white"
          dangerouslySetInnerHTML={{ __html: translateData.attributes.content }}
        />
      </Wrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about = await getAbout();
  return { props: { about }, revalidate: 60 };
};

export default About;
