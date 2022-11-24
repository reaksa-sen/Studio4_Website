import { TermAndPrivacyResponse } from 'api/interface';
import { getTermAndPrivacy } from 'api/strapiApi';
import Header from 'components/Header';
import { Wrapper } from 'components/Wrapper';
import { GetStaticProps, NextPage } from 'next/types';

interface Props {
  termAndPrivacy: TermAndPrivacyResponse;
}

const TermAndPrivacy: NextPage<Props> = ({ termAndPrivacy }) => {
  const TITLE = 'Term & Privacy';
  const { data } = termAndPrivacy;

  console.log(data);

  return (
    <div className="mt-16 md:mt-24">
      <Header title={TITLE} siteUrl="/Term & Privacy" />
      <Wrapper>
        <article
          className="prose max-w-none pt-6 text-white"
          dangerouslySetInnerHTML={{ __html: data.attributes.content }}
        />
      </Wrapper>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const termAndPrivacy = await getTermAndPrivacy();
  return { props: { termAndPrivacy }, revalidate: 60 };
};

export default TermAndPrivacy;
