import ClockIcon from '@heroicons/react/outline/ClockIcon';
import { BlogResponse, BlogsResponse } from 'api/interface';
import { getBlog, getBlogs } from 'api/strapiApi';
import Header from 'components/Header';
import { NewsCategoryList } from 'components/NewsFeed/NewsCategoryList';
import { Wrapper } from 'components/Wrapper';
import { Language, useLanguageModalContext } from 'hooks/LanguageModalContext';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import { dateFormat } from 'utils/date';
import NextImage from '../../components/Image';
import Khmer from 'public/languages/khmer/translation.json';
import English from 'public/languages/english/translation.json';

interface Props {
  blog: BlogResponse;
  blogs: BlogsResponse;
}

const NewsFeedDetail: NextPage<Props> = ({ blog, blogs }) => {
  const router = useRouter();
  const { lang } = useLanguageModalContext();
  const translatesBlog = blog.data.attributes.localizations.data;
  const getTranslate = (lang: Language) => {
    return translatesBlog.find(b => b.attributes.locale === lang);
  };
  const [blogState, setBlogState] = useState<any>(blog.data);
  const [imageState, setImageState] = useState<any>();
  const locale = lang === 'en' ? 'en-Us' : 'km-KH';

  useEffect(() => {
    setBlogState(blog.data);
    setImageState(blog.data.attributes.image);
  }, [blog]);

  useEffect(() => {
    const translatedBlog = getTranslate(lang) ?? blog.data;
    setBlogState(translatedBlog);
  }, [lang]);

  return (
    <Wrapper>
      <Header
        title={blogState.attributes.title}
        siteUrl={router.asPath}
        description={blogState.attributes.description}
        imageUrl={imageState?.data?.attributes?.formats?.medium?.url}
      />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
            {blogState.attributes.title}
          </h2>
          <div className="flex items-start gap-x-1.5 py-4 text-sm">
            <ClockIcon className="h-4 w-4" />
            <span>{dateFormat(blogState.attributes.createdAt, locale)}</span>
          </div>

          <NextImage
            alt={blogState.attributes.title}
            image={blog.data.attributes.image ?? imageState}
            height={9}
            width={16}
            layout={'responsive'}
          />

          <article
            className="prose max-w-none pt-6"
            dangerouslySetInnerHTML={{ __html: blogState.attributes.content }}
          />
        </div>
        <div>
          <NewsCategoryList
            title={lang === 'km' ? Khmer['latest-news'] : English['latest-news']}
            data={blogs.data}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params, locale }) => {
  let [blog, blogs] = await Promise.all([
    getBlog(params.id[0]),
    getBlogs({ page: 1, pageSize: 8 })
  ]);
  return { props: { blog, blogs }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  };
};

export default NewsFeedDetail;
