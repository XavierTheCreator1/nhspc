const {
  Client,
  Events,
  GatewayIntentBits,
  ActivityType,
  ChannelType,
} = require('discord.js');

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
  console.log('Hello Worlddddddddddddddddddddddddddddddddddddddddw');
});

client.login(process.env.TOKEN);
