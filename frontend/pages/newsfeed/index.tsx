import { BlogCategoriesResponse } from 'api/interface';
import { getBlogCategories, getBlogs } from 'api/strapiApi';
import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { XInfiniteScroll } from 'components/InfiniteScroll';
import { Spinner } from 'components/Loading/Spinner';
import { NewsCategoryList } from 'components/NewsFeed/NewsCategoryList';
import { NewsFeedList } from 'components/NewsFeed/NewsFeedList';
import { NoResult } from 'components/NoResult';
import { Wrapper } from 'components/Wrapper';
import { useLanguageModalContext } from 'hooks/LanguageModalContext';
import { useRouter } from 'next/router';
import { GetStaticProps, NextPage } from 'next/types';
import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';

interface Props {
  categories: BlogCategoriesResponse;
}

const NewsFeed: NextPage<Props> = ({ categories }) => {
  const router = useRouter();
  const { lang } = useLanguageModalContext();
  const TITLE = lang === 'km' ? Khmer['latest-news'] : English['latest-news'];
  const PAGE_SIZE = 5;

  const { data, status, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    'infiniteNews',
    async ({ pageParam = 1 }) => getBlogs({ page: pageParam, pageSize: PAGE_SIZE }),
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
      <Header
        title={TITLE}
        siteUrl={router.asPath}
        description="Cambodia Film Association News and Events page"
      />

      <Wrapper>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
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
                  <NewsFeedList key={i} data={page.data} />
                ))}
              </XInfiniteScroll>
            )}
          </div>
          <div className="my-4 flex flex-col gap-y-4">
            {categories.data.map(g => (
              <NewsCategoryList
                key={g.id}
                title={g.attributes.name}
                data={g.attributes.blogs.data}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const categories = await getBlogCategories({ page: 1, pageSize: 3 });
  const promises = categories.data.map(x =>
    getBlogs({ page: 1, pageSize: 4 }, { categories: { id: { $eq: x.id } } })
  );

  const blogs = await Promise.all(promises);
  categories.data.forEach((x, i) => {
    x.attributes.blogs = blogs[i];
  });
  return { props: { categories }, revalidate: 60 };
};

export default NewsFeed;
