import { GetStaticProps, NextPage } from 'next/types';
import { Wrapper } from 'components/Wrapper';
import { AboutResponse } from 'api/interface';
import { getAbout } from 'api/strapiApi';
import Header from 'components/Header';

interface Props {
  about: AboutResponse;
}

const About: NextPage<Props> = ({ about }) => {
  const TITLE = 'About';
  const { data } = about;

  return (
    <div className="mt-16 md:mt-24">
      <Header title={TITLE} siteUrl="/about" />
      <Wrapper>
        <article
          className=" prose max-w-none pt-6 text-white"
          dangerouslySetInnerHTML={{ __html: data.attributes.content }}
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
