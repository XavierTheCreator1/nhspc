import React from 'react';
import RandomCodersImage from '@/app/lib/codingImages';
import Link from 'next/link';

const now = new Date();

const currentYear = now.getFullYear();
let schoolYear: string;
if (now.getMonth() < 8) {
  schoolYear = `${currentYear - 1} - ${currentYear}`;
} else {
  schoolYear = `${currentYear} - ${currentYear + 1}`;
}

const Welcome = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${RandomCodersImage()})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero\-content text-center text-neutral-content">
        <div className="max-w-sm md:max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Newsome High School Programming Club
          </h1>
          <p className="mb-20 text-2xl">
            Join us for our <span className="font-semibold">{schoolYear}</span>{' '}
            year!
          </p>
          <Link href="/login">
            <button className="btn btn-primary btn-wide text-2xl">
              Log In
            </button>
          </Link>
          <div className="divider">OR</div>
          <Link href="/join">
            <button className="btn btn-secondary btn-wide text-2xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
