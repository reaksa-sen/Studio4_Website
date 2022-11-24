import * as I from 'api/interface';
import {
  getArtists,
  getAbout,
  getContact,
  getClients,
  getWorkShowcases,
  getTermAndPrivacy
} from 'api/strapiApi';
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
  about: I.AboutResponse;
  contact: I.ContactResponse;
  clients: I.ClientsResponse;
  artists: I.ArtistsResponse;
  workShowcases: I.WorkShowcasesResponse;
  termAndPrivacy: I.TermAndPrivacyResponse;
}

const Page: NextPage<Props> = props => {
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
  let [about, contact, clients, artists, workShowcases, termAndPrivacy] = await Promise.all([
    getAbout(),
    getContact(),
    getClients(),
    getArtists({ page: 1, pageSize: 4 }),
    getWorkShowcases({ page: 1, pageSize: 8 }),
    getTermAndPrivacy()
  ]);

  return {
    props: {
      about,
      contact,
      clients,
      artists,
      workShowcases,
      termAndPrivacy
    },
    revalidate: 60
  };
};

export default Page;
