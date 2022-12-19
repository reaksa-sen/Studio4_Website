import { LatestNewsList } from 'components/News/NewsCategoryList';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NewsResponse, NewsResponses } from 'api/interface';
import { getNew, getNews } from 'api/strapiApi';
import { BiTimeFive } from 'react-icons/bi';
import NextImage from 'components/Image';
import { useRouter } from 'next/router';
import { dateFormat } from 'utils/date';
import Header from 'components/Header';
import { useTranslation } from 'react-i18next';

interface Props {
  data: NewsResponse;
  news: NewsResponses;
}

const NewsList: NextPage<Props> = ({ data, news }) => {
  const router = useRouter();
  const { locale } = useRouter();
  const translateData =
    data?.data.attributes.localizations.data.find(m => m.attributes.locale === locale) ??
    data?.data;

  const translateDataNews = news.data.map(
    m => m.attributes.localizations.data?.find(m => m.attributes.locale === locale) ?? m
  );
  return (
    <>
      <Header
        title={translateData.attributes.title}
        siteUrl={router.asPath}
        description={(translateData.attributes.title || '').substring(160, 0)}
        imageUrl={translateData.attributes.image?.data?.attributes.url}
      />
      <div className="container mt-16 md:mt-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="col-span-2 py-4 text-white md:py-8">
            <h2 className="font-heading text-xl leading-relaxed">
              {translateData.attributes.title}
            </h2>
            <p className="flex items-center gap-x-1.5 pb-2 pt-4 text-sm">
              <BiTimeFive />
              <span>{dateFormat(translateData.attributes.createdAt, 'km-KH')}</span>
            </p>
            <NextImage
              alt={translateData.attributes.title}
              image={translateData.attributes.image}
              height={9}
              size={'M'}
              width={16}
              layout={'responsive'}
            />
            <article
              className="prose max-w-none pt-4 text-white prose-p:pt-2 prose-img:pt-2 md:prose-lg"
              dangerouslySetInnerHTML={{ __html: translateData.attributes.content }}
            />
          </div>
          <div className="col-span-1 py-4 font-heading md:py-8">
            <LatestNewsList news={translateDataNews} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  let [data, news] = await Promise.all([
    getNew(params.id as string),
    getNews({ page: 1, pageSize: 8 })
  ]);
  return { props: { data, news }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export default NewsList;
