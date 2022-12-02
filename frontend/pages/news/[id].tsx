import { LatestNewsList } from 'components/News/NewsCategoryList';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { NewsResponse, NewsResponses } from 'api/interface';
import { getNew, getNews } from 'api/strapiApi';
import { BiTimeFive } from 'react-icons/bi';
import NextImage from 'components/Image';
import { useRouter } from 'next/router';
import { dateFormat } from 'utils/date';
import Header from 'components/Header';

interface Props {
  data: NewsResponse;
  news: NewsResponses;
}

const NewsList: NextPage<Props> = ({ data, news }) => {
  const router = useRouter();

  return (
    <>
      <Header
        title={data?.data.attributes.title}
        siteUrl={router.asPath}
        description={(data?.data.attributes.title || '').substring(160, 0)}
        imageUrl={data?.data.attributes.image?.data?.attributes.url}
      />
      <div className="container mt-16 md:mt-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="col-span-2 py-4 text-white md:py-8">
            <h2 className="font-heading text-xl leading-relaxed">{data?.data.attributes.title}</h2>
            <p className="flex items-center gap-x-1.5 pb-2 pt-4 text-sm">
              <BiTimeFive />
              <span>{dateFormat(data.data.attributes.createdAt, 'en-Us')}</span>
            </p>
            <NextImage
              alt={data?.data.attributes.title}
              image={data?.data.attributes.image}
              height={9}
              size={'M'}
              width={16}
              layout={'responsive'}
            />
            <article
              className="prose max-w-none pt-4 text-white prose-p:pt-2 prose-img:pt-2 md:prose-lg"
              dangerouslySetInnerHTML={{ __html: data?.data.attributes.content }}
            />
          </div>
          <div className="col-span-1 py-4 font-heading md:py-8">
            <LatestNewsList news={news.data} />
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
