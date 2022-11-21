import Header from 'components/Header';
import { Heading } from 'components/Heading';
import { MoviesItems } from 'components/Movies/Movies';
import { NewReleased } from 'components/NewReleased/NewReleased';
import { Wrapper } from 'components/Wrapper';
import { NextPage } from 'next';

const Movies: NextPage = () => {
  return (
    <div className="container mt-16">
      <Header title={'Movies'} />

      <div className="pb-6">
        <div className="">
          <Heading text={'Movies'} />
          <NewReleased />
        </div>
        <div className="w-full border-b-2 border-primary-500 pt-10"></div>
        <div className="mt-4">
          <MoviesItems />
        </div>
      </div>
    </div>
  );
};

export default Movies;
