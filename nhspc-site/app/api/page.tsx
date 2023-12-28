'use client';

import React, { useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

const ApiRequestComponent: React.FC = () => {
  // Replace the URL with the endpoint you want to make a GET request to
  const apiUrl: string = 'http://localhost:5000/api/createReminder';

  const queryParams = {
    key: '0SrJgD50TofGSHGi1ZsKoS1XHJwuX9yDMRjyUDptR4PMTYrUOs',
    date: '2023',
    topic: 'Test reminder for development purposes',
  };

  useEffect(() => {
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
    <div>
      <p>Check the browser's console for the api data</p>
      {/* You can include JSX elements and components as needed */}
    </div>
  );
};

export default ApiRequestComponent;
