import Link from 'next/link';
import React from 'react';

const ApiPage = () => {
  return (
    <>
      <h1>Welcome to the NHSPC API!</h1>
      <p>
        Back to the{' '}
        <Link href="/" className="link-hover link">
          homepage
        </Link>
      </p>
    </>
  );
};

export default ApiPage;
