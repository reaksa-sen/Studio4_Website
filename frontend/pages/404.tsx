import { BaseError } from 'components/Error/BaseError';
import { NextPage } from 'next';
import React from 'react';

const PageNotFound: NextPage = () => {
  return (
    <div>
      <BaseError
        error={'404 error'}
        title={'Page not found'}
        subtitle={"Sorry, we couldn't find the page you're looking for."}
      />
    </div>
  );
};

export default PageNotFound;
