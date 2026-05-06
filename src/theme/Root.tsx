import React, {type ReactNode} from 'react';
import Head from '@docusaurus/Head';
import {useLocation} from '@docusaurus/router';

type RootProps = {
  children: ReactNode;
};

const CANONICAL_BASE_URL = 'https://docs.nxtgrid.co';

export default function Root({children}: RootProps): ReactNode {
  const location = useLocation();
  const canonicalUrl = `${CANONICAL_BASE_URL}${location.pathname}${location.search}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {children}
    </>
  );
}
