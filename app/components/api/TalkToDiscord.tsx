import React from "react";

const TalkToDiscord = () => {
  React.useEffect(() => {
    const {
      Client,
      Events,
      GatewayIntentBits,
      ActivityType,
      ChannelType,
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

    client.once("ready", async () => {
      client.user.setActivity({
        type: ActivityType.Custom,
        name: "Ready and pending!",
      });

      const guild = await client.guilds.fetch("1185016065340735589");
      const channel = await guild.channels.fetch("1185017672879046737");
      await channel.send("Hello");
    });

    client.login(process.env.TOKEN);
  });

  return <h1>Hi!</h1>;
};

export default TalkToDiscord;
