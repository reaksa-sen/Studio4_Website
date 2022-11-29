import { XInfiniteScroll } from 'components/InfiniteScroll';
import { ArtistList } from 'components/Artists/ArtistsList';
import { Spinner } from 'components/Loading/Spinner';
import { useInfiniteQuery } from 'react-query';
import { NoResult } from 'components/NoResult';
import { Heading } from 'components/Heading';
import { getArtists } from 'api/strapiApi';
import Header from 'components/Header';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

const Page: NextPage = () => {
  const router = useRouter();
  const TITLE = 'Artists';
  const PAGE_SIZE = 12;
  const DESCRIPTION = 'Studio Four Team Members';

  const { data, status, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'infiniteArtists',
    async ({ pageParam = 1 }) => getArtists({ page: pageParam, pageSize: PAGE_SIZE }),
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
            <ArtistList key={`artists-${i}`} artists={page} />
          ))}
        </XInfiniteScroll>
      )}
    </div>
  );
};

export default Page;
