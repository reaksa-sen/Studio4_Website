import * as I from 'api/interface';
import { getArtists, getAbout, getContact, getClients, getWorkShowcases } from 'api/strapiApi';
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
  // blogs: I.BlogsResponse;
  // events: I.BlogsResponse;
  about: I.AboutResponse;
  contact: I.ContactResponse;
  clients: I.ClientsResponse;
  artists: I.ArtistsResponse;
  workShowcases: I.WorkShowcasesResponse;
  // carousels: I.BlogsResponse;
}

const Home: NextPage<Props> = props => {
  return (
    <div>
      <Header title="Home" />

      <Carousel />
      <HomeReleased />
      <HomeWorkShowcase workShowcases={props.workShowcases} />
      <HomeArtists artists={props.artists} />
      <HomeOurClients clients={props.clients} />
      <HomeNews />
      <HomeContact contact={props.contact} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  let [about, contact, clients, artists, workShowcases] = await Promise.all([
    getAbout(),
    getContact(),
    getClients(),
    getArtists({ page: 1, pageSize: 4 }),
    getWorkShowcases({ page: 1, pageSize: 8 })
  ]);

  return {
    props: {
      about,
      contact,
      clients,
      artists,
      workShowcases
    },
    revalidate: 60
  };
};

export default Home;
