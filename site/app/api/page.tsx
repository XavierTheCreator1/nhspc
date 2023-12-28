import React from 'react';
import Link from 'next/link';

const APIPage = () => {
  const apiUrl: string = 'http://localhost:5000/api/createReminder';

  console.log(process.env.TOKEN);

  const queryParams = {
    key: '0SrJgD50TofGSHGi1ZsKoS1XHJwuX9yDMRjyUDptR4PMTYrUOs',
    date: '2023',
    topic: 'Hello from the website!',
    channelid: '1185017672879046737',
  };

  const {
    Client,
    Events,
    GatewayIntentBits,
    ActivityType,
    ChannelType,
  } = require('discord.js');

  /*
rm -rf node_modules
rm package-lock.json
npm install
 */

  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMembers,
    ],
  });

  require('dotenv').config();

  client.once('ready', () => {
    client.user.setActivity({
      type: ActivityType.Custom,
      name: 'Ready and pending!',
    });
  });

  client.login(process.env.TOKEN);

  return (
    <>
      <h1 className="flex h-screen w-full items-center justify-center text-center text-8xl">
        Welcome gamers <br />
        to the API!
      </h1>
      <Link
        href="/"
        className="link-hover link flex h-screen w-full items-center justify-center text-center text-2xl"
      >
        Back home
      </Link>
    </>
  );
};

export default APIPage;
