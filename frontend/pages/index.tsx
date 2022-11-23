import * as I from 'api/interface';
import { getMembers, getBlogs, getPartners, getAbout, getContact } from 'api/strapiApi';
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
  // members: I.MembersResponse;
  // blogs: I.BlogsResponse;
  // events: I.BlogsResponse;
  about: I.AboutResponse;
  contact: I.ContactResponse;
  // partners: I.PartnersResponse;
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
      <HomeOurClients />
      <HomeNews />
      <HomeContact contact={props.contact} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  let [about, contact] = await Promise.all([
    // getMembers({ page: 1, pageSize: 10 }),
    // getBlogs({ page: 1, pageSize: 4 }, { categories: { name: 'News' } }),
    // getBlogs({ page: 1, pageSize: 5 }, { categories: { name: 'Event' } }),
    getAbout(),
    getContact()
    // getPartners(),
    // getBlogs({ page: 1, pageSize: 3 }) // get blogs for slider
  ]);

  return {
    props: {
      // members,
      // blogs,
      // events,
      contact,
      about
      // partners,
      // carousels
    },
    revalidate: 60
  };
};

export default Home;
