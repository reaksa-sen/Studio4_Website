import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { BiTimeFive } from 'react-icons/bi';
import Header from 'components/Header';
import { NewsCategoryList } from 'components/News/NewsCategoryList';
import { NewsResponse, NewsResponses } from 'api/interface';
import { getNew, getNews } from 'api/strapiApi';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { dateFormat } from 'utils/date';
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
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 py-4 md:p-4 md:py-8">
            <h2 className="font-heading text-xl leading-relaxed text-white">
              {data?.data.attributes.title}
            </h2>
            <p className="flex items-center gap-x-1.5 py-4 text-sm text-white">
              <BiTimeFive />
              <span>{dateFormat(data.data.attributes.createdAt, 'en-Us')}</span>
            </p>
            <Image
              alt={data?.data.attributes.title}
              src={data?.data.attributes.image?.data?.attributes.url}
              height={9}
              width={16}
              layout={'responsive'}
            />
            <article
              className=" prose max-w-none text-white"
              dangerouslySetInnerHTML={{ __html: data?.data.attributes.content }}
            />
          </div>
          <div className="col-span-1 py-4 font-heading md:p-4 md:py-8">
            <NewsCategoryList news={news.data} />
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
