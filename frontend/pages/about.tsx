/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { AboutResponse } from 'api/interface';
import { getAbout } from 'api/strapiApi';
import Header from 'components/Header';
import { Wrapper } from 'components/Wrapper';
import { GetStaticProps, NextPage } from 'next/types';
import Image from 'next/image';
import team from '../../public/images/team.jpg';

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
          className="prose max-w-none pt-6 text-white"
          dangerouslySetInnerHTML={{ __html: data.attributes.content }}
        />
        {/* <div className="text-white ">
          <div>
            <p className="pb-5 text-xl font-bold">Studio Four</p>
            <p>
              The decision about what to put into your paragraphs begins with the germination of a
              seed of ideas; this “germination process” is better known as brainstorming. There are
              many techniques for brainstorming; whichever one you choose, this stage of paragraph
              development cannot be skipped. Building paragraphs can be like building a skyscraper:
              there must be a well-planned foundation that supports what you are building. Any
              cracks, inconsistencies, or other corruptions of the foundation can cause your whole
              paper to crumble.
            </p>
            <img className="w-full object-cover py-5" src="/images/team.jpg" alt="team" />
          </div>
        </div> */}
      </Wrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const about = await getAbout();
  return { props: { about }, revalidate: 60 };
};

export default About;
