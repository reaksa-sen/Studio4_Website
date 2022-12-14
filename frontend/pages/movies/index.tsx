/* eslint-disable react-hooks/rules-of-hooks */
import { MoviesResponse } from 'api/interface';
import { getMovies } from 'api/strapiApi';
import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { InfiniteMovieList } from 'screens/movies/InfiniteMovielist';
import { NewReleased } from 'components/NewReleased/NewReleased';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

interface Props {
  movie: MoviesResponse;
}

const Page: NextPage<Props> = ({ movie }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const DESCRIPTION = 'Studio Four Team Members';

  return (
    <div className="container mt-16 pb-6 md:mt-24">
      <Header title={'Movies'} siteUrl={router.asPath} description={DESCRIPTION} />
      <Heading text={t('movies')} />
      <NewReleased movie={movie.data[0]} />
      <InfiniteMovieList />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  const movie = await getMovies({ page: 1, pageSize: 1 });
  return { props: { movie }, revalidate: 60 };
};
export default Page;
