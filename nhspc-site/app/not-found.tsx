import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <main className="nfmain">
      <title>Page Not Found!</title>
      <h1 className="http404">Page Not Found</h1>
      <br />
      <h1 className="nfsub">Did you mis-spell the url?</h1>
      <br />
      <Link href="/" className="link-hover link">
        Home
      </Link>
    </main>
  );
};

export default NotFoundPage;
