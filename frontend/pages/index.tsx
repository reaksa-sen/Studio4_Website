import * as I from 'api/interface';
import { getMembers, getBlogs, getPartners, getAboutSection } from 'api/strapiApi';
import { Carousel } from 'components/Carousel';
import Header from 'components/Header';
import { GetStaticProps, NextPage } from 'next/types';
import { HomeMembers } from 'screens/home/HomeMembers';
import { HomeLatestNews } from 'screens/home/HomeLastestNews';
import { HomeWorkShowcase } from 'screens/home/HomeWorkShowcase';
import { HomePartner } from 'screens/home/HomePartners';
import { HomeReleased } from 'screens/home/HomeReleased';
import { HomeArtists } from 'screens/home/HomeArtists';
import { HomeOurClients } from 'screens/home/HomeOurClients';
import { HomeNews } from 'screens/home/HomeNews';
import { HomeContact } from 'screens/home/HomeContact';

interface Props {
  members: I.MembersResponse;
  blogs: I.BlogsResponse;
  events: I.BlogsResponse;
  about: I.AboutResponse;
  partners: I.PartnersResponse;
  carousels: I.BlogsResponse;
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
      <HomeContact />
      {/* <HomePartner res={props.partners} /> */}
      {/* <HomeLatestNews res={props.blogs} /> */}
      {/* <HomeMembers res={props.members} /> */}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  let [] = await Promise.all([
    // getMembers({ page: 1, pageSize: 10 }),
    // getBlogs({ page: 1, pageSize: 4 }, { categories: { name: 'News' } }),
    // getBlogs({ page: 1, pageSize: 5 }, { categories: { name: 'Event' } }),
    // getAboutSection(),
    // getPartners(),
    // getBlogs({ page: 1, pageSize: 3 }) // get blogs for slider
  ]);

  return {
    props: {
      // members,
      // blogs,
      // events,
      // about,
      // partners,
      // carousels
    },
    revalidate: 60
  };
};

export default Home;
