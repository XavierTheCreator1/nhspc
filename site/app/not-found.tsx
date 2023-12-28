import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-5 text-8xl text-error">Error 404</h1>
      <h2 className="mb-10 text-6xl">Page Not Found</h2>
      <p className="mb-20 text-2xl">Did you misspell the url?</p>
      <Link href="/" className="link-hover link">
        <button className="btn btn-error btn-wide">Back Home</button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
