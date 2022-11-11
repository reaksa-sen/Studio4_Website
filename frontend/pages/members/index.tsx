import { getMembers } from 'api/strapiApi';
import { MemberList } from 'components/Member/MemberList';
import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { XInfiniteScroll } from 'components/InfiniteScroll';
import { Spinner } from 'components/Loading/Spinner';
import { NoResult } from 'components/NoResult';
import { Wrapper } from 'components/Wrapper';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';
import { useInfiniteQuery } from 'react-query';

const Members: NextPage = () => {
  const router = useRouter();
  const TITLE = 'Members';
  const PAGE_SIZE = 20;
  const DESCRIPTION = 'Cambodia Film Association Team Members';

  const { data, status, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'infiniteMembers',
    async ({ pageParam = 1 }) => getMembers({ page: pageParam, pageSize: PAGE_SIZE }),
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
      <Header title={TITLE} siteUrl={router.asPath} description={DESCRIPTION} />

      <Wrapper>
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
              <MemberList key={`member-${i}`} res={page.data} />
            ))}
          </XInfiniteScroll>
        )}
      </Wrapper>
    </>
  );
};

export default Members;
