import React from 'react';
import RandomCodersImage from '@/app/lib/codingImages';

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
    <div
      className="hero h-80"
      style={{
        backgroundImage: `url(${RandomCodersImage()})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div
        className="hero\
          -content text-center text-neutral-content"
      >
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Newsome High School Programming Club
          </h1>
          <p className="mb-5">
            Join us for our <span className="font-semibold">{schoolYear}</span>{' '}
            year!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
