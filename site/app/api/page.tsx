'use client';

import React from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import Link from 'next/link';

const ApiRequestComponent: React.FC = () => {
  // Replace the URL with the endpoint you want to make a GET request to
  const apiUrl: string = 'http://localhost:5000/api/createReminder';

  const queryParams = {
    key: '0SrJgD50TofGSHGi1ZsKoS1XHJwuX9yDMRjyUDptR4PMTYrUOs',
    date: '2023',
    topic: 'Hello from the website!',
    channelid: '1185017672879046737',
  };

  React.useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(apiUrl, {
        params: queryParams,
      })
      .then((response: AxiosResponse) => {
        // Handle the successful response
        console.log('Response data:', response.data);
      })
      .catch((error: AxiosError) => {
        // Handle errors
        console.error('Error making GET request:', error.message);
      });
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <>
      <h1 className="flex h-screen w-full items-center justify-center text-center text-8xl">
        Welcome to the API!
      </h1>
      <Link
        href="/"
        className="link-hover link flex h-screen w-full items-center justify-center text-center text-8xl"
      >
        Back home
      </Link>
    </>
  );
};

export default ApiRequestComponent;
