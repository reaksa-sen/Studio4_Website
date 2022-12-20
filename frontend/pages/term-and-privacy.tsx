import { TermAndPrivacyResponse } from 'api/interface';
import { GetStaticProps, NextPage } from 'next/types';
import { getTermAndPrivacy } from 'api/strapiApi';
import { Wrapper } from 'components/Wrapper';
import Header from 'components/Header';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface Props {
  termAndPrivacy: TermAndPrivacyResponse;
}

const TermAndPrivacy: NextPage<Props> = ({ termAndPrivacy }) => {
  const { t } = useTranslation();
  const { locale } = useRouter();
  const translateData =
    termAndPrivacy.data.attributes.localizations.data.find(m => m.attributes.locale === locale) ??
    termAndPrivacy.data;
  return (
    <div className="mt-16 md:mt-20">
      <Header title={t('term-privacy')} siteUrl="/Term & Privacy" />
      <Wrapper>
        <article
          className="prose max-w-none text-white"
          dangerouslySetInnerHTML={{ __html: translateData.attributes.content }}
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
