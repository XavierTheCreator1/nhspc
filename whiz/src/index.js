const {
  Client,
  Events,
  GatewayIntentBits,
  ActivityType,
} = require("discord.js");

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

require("dotenv").config();

client.once("ready", () => {
  client.user.setActivity({
    type: ActivityType.Custom,
    name: "Under Construction",
  });
});

// client.on(Events.MessageCreate, async (msg) => {
//   msg.channel.send("Hello World!");
// });

client.login(process.env.token);
