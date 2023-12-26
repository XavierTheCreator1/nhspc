import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <Link href="/" className="link-hover link">
        Back to reality
      </Link>
    </main>
  );
};

export default NotFoundPage;
