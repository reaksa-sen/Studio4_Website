import { WorkShowcase } from 'components/WorkShowcase/WorkShowcase';
import { XInfiniteScroll } from 'components/InfiniteScroll';
import { Spinner } from 'components/Loading/Spinner';
import { getWorkShowcases } from 'api/strapiApi';
import { NoResult } from 'components/NoResult';
import { useInfiniteQuery } from 'react-query';
import { Heading } from 'components/Heading';
import { useRouter } from 'next/router';
import Header from 'components/Header';
import { NextPage } from 'next';

const Page: NextPage = () => {
  const router = useRouter();
  const PAGE_SIZE = 8;
  const TITLE = 'Works';
  const DESCRIPTION = 'Studio Four Team Members';

  const { data, status, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'infiniteWorkShowCases',
    async ({ pageParam = 1 }) => getWorkShowcases({ page: pageParam, pageSize: PAGE_SIZE }),
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
      <Header title={TITLE} siteUrl={router.asPath} description={DESCRIPTION} />
      <Heading text={TITLE} />
      {isLoading && <Spinner />}
      {status === 'success' && (
        <XInfiniteScroll
          dataLength={data?.pages.length * PAGE_SIZE}
          next={fetchNextPage}
          hasMore={hasNextPage}
        >
          {!data.pages[0].data.length && <NoResult />}

          {data?.pages.map((page, i) => (
            <WorkShowcase key={i} data={page} />
          ))}
        </XInfiniteScroll>
      )}
    </div>
  );
};

export default Page;
