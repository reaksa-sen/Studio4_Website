import { getNews } from 'api/strapiApi';
import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { XInfiniteScroll } from 'components/InfiniteScroll';
import { Spinner } from 'components/Loading/Spinner';
import { NewsList } from 'components/News/NewsList';
import { useInfiniteQuery } from 'react-query';
import { NoResult } from 'components/NoResult';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const Page: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const PAGE_SIZE = 12;
  const DESCRIPTION = 'Studio Four Team Members';

  const { data, status, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'infiniteNews',
    async ({ pageParam = 1 }) => getNews({ page: pageParam, pageSize: PAGE_SIZE }),
    {
      getNextPageParam: (lastPage, pages) => {
        const { page, pageSize, total } = lastPage.meta.pagination;
        if (page * pageSize < total) {
          return pages.length + 1;
        }
      }
    }
  );

  return (
    <div className="container mt-16 pb-6 md:mt-24">
      <Header title={t('news')} siteUrl={router.asPath} description={DESCRIPTION} />
      <Heading text={t('news')} />

      {isLoading && <Spinner />}

      {status === 'success' && (
        <XInfiniteScroll
          dataLength={data?.pages.length * PAGE_SIZE}
          next={fetchNextPage}
          hasMore={hasNextPage}
        >
          {!data.pages[0].data.length && <NoResult />}

          {data?.pages.map((page, i) => (
            <NewsList key={`news-${i}`} news={page} />
          ))}
        </XInfiniteScroll>
      )}
    </div>
  );
};

export default Page;
