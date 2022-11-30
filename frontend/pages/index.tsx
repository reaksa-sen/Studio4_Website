import {
  getAbout,
  getContact,
  getClients,
  getArtists,
  getWorkShowcases,
  getCarousel,
  getMovies,
  getNews
} from 'api/strapiApi';
import {
  AboutResponse,
  ArtistsResponse,
  CarouselsResponse,
  ClientsResponse,
  ContactResponse,
  MoviesResponse,
  NewsResponses,
  WorkShowcasesResponse
} from 'api/interface';
import { Carousel } from 'components/Carousel';
import Header from 'components/Header';
import { GetStaticProps, NextPage } from 'next/types';
import { HomeWorkShowcase } from 'screens/home/HomeWorkShowcase';
import { HomeReleased } from 'screens/home/HomeNewReleased';
import { HomeArtists } from 'screens/home/HomeArtists';
import { HomeOurClients } from 'screens/home/HomeOurClients';
import { HomeNews } from 'screens/home/HomeNews';
import { HomeContact } from 'screens/home/HomeContact';

interface Props {
  about: AboutResponse;
  contact: ContactResponse;
  clients: ClientsResponse;
  artists: ArtistsResponse;
  workShowcases: WorkShowcasesResponse;
  carousels: CarouselsResponse;
  newReleased: MoviesResponse;
  news: NewsResponses;
}

const Page: NextPage<Props> = props => {
  return (
    <>
      <Header title="Home" />

      <Carousel carousel={props.carousels} />
      <HomeReleased movie={props.newReleased.data[0]} />
      <HomeWorkShowcase workShowcases={props.workShowcases} />
      <HomeArtists artists={props.artists} />
      <HomeOurClients clients={props.clients} />
      <HomeNews news={props.news} />
      <HomeContact contact={props.contact} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  let [about, contact, clients, artists, workShowcases, carousels, newReleased, news] =
    await Promise.all([
      getAbout(),
      getContact(),
      getClients(),
      getArtists({ page: 1, pageSize: 4 }),
      getWorkShowcases({ page: 1, pageSize: 8 }),
      getCarousel(),
      getMovies({ page: 1, pageSize: 1 }),
      getNews({ page: 1, pageSize: 8 })
    ]);

  return {
    props: {
      about,
      contact,
      clients,
      artists,
      workShowcases,
      carousels,
      newReleased,
      news
    },
    revalidate: 60
  };
};

export default Page;
