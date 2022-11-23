import * as I from 'api/interface';
import { getArtists, getBlogs, getAbout, getContact, getClients } from 'api/strapiApi';
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
  // carousels: I.BlogsResponse;
}

const Home: NextPage<Props> = props => {
  return (
    <div>
      <Header title="Home" />

      <Carousel />
      <HomeReleased />
      <HomeWorkShowcase />
      <HomeArtists />
      <HomeOurClients clients={props.clients} />
      <HomeNews />
      <HomeContact contact={props.contact} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  let [about, contact, clients, artists] = await Promise.all([
    // getBlogs({ page: 1, pageSize: 4 }, { categories: { name: 'News' } }),
    // getBlogs({ page: 1, pageSize: 5 }, { categories: { name: 'Event' } }),
    getArtists({ page: 1, pageSize: 10 }),
    getAbout(),
    getContact(),
    getClients()
    // getPartners(),
    // getBlogs({ page: 1, pageSize: 3 }) // get blogs for slider
  ]);

  return {
    props: {
      // artists,
      // blogs,
      // events,
      contact,
      about,
      clients,
      artists

      // carousels
    },
    revalidate: 60
  };
};

export default Home;
