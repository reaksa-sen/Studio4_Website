import { getMovies } from 'api/strapiApi';
import { XInfiniteScroll } from 'components/InfiniteScroll';
import { Spinner } from 'components/Loading/Spinner';
import { NoResult } from 'components/NoResult';
import { useInfiniteQuery } from 'react-query';
import { MovieList } from './Movies';

export const InfiniteMovieList: React.FC = () => {
  const PAGE_SIZE = 12;

  const { data, status, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'infiniteMovies',
    async ({ pageParam = 1 }) => getMovies({ page: pageParam, pageSize: PAGE_SIZE }),
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
    <>
      {isLoading && <Spinner />}
      {status === 'success' && (
        <XInfiniteScroll
          dataLength={data?.pages.length * PAGE_SIZE}
          next={fetchNextPage}
          hasMore={hasNextPage}
        >
          {!data.pages[0].data.length && <NoResult />}
          <div className="w-full border-b-2 border-primary-500 pt-8"></div>
          {data?.pages.map((page, i) => (
            <div key={i}>
              <div className="mt-4">
                <MovieList movies={page} />
              </div>
            </div>
          ))}
        </XInfiniteScroll>
      )}
    </>
  );
};
