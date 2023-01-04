/* eslint-disable react-hooks/rules-of-hooks */
import { getArtists } from 'api/strapiApi';
import { useInfiniteQuery } from 'react-query';
import { XInfiniteScroll } from 'components/InfiniteScroll';
import { ArtistList } from 'components/Artists/ArtistsList';
import { Spinner } from 'components/Loading/Spinner';
import { NoResult } from 'components/NoResult';

export const InfiniteArtistList: React.FC = () => {
  const PAGE_SIZE = 12;

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
    <div>
      {isLoading && <Spinner />}
      {status === 'success' && (
        <XInfiniteScroll
          dataLength={data?.pages.length * PAGE_SIZE}
          next={fetchNextPage}
          hasMore={hasNextPage}
        >
          {!data.pages.length && <NoResult />}

          {data?.pages.map((page, i) => (
            <ArtistList key={i} artists={page} />
          ))}
        </XInfiniteScroll>
      )}
    </div>
  );
};
