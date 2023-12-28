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

client.once("ready", () => {
  client.user.setActivity({
    type: ActivityType.Custom,
    name: "Ready and pending!",
  });
});

const postgres = require("postgres");
require("dotenv").config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID, apikey } =
  process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result);
}

getPgVersion();

//Start a webserver to listen for api requests

const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/api/createReminder", async (req, res) => {
  if (req.query.key != apikey) {
    res.status(403).send("Forbidden");
  } else {
    if (
      req.query.date == undefined ||
      req.query.topic == undefined ||
      req.query.channel == undefined
    ) {
      res.status(400).send("-1");
    } else {
      const result = await sql`
          INSERT INTO r (date, topic, channel)
          VALUES (${req.query.date}, ${req.query.topic}, ${req.query.channel})
          RETURNING *`;
      const guild = await client.guilds.fetch("1185016065340735589");
      const channel = await guild.channels
        .fetch(req.query.channel)
        .then(async () => {
          await channel.send(`${req.query.topic}`);
          res.status(202).json(result);
        })
        .catch((err) => {
          res
            .status(400)
            .send(
              "invalid channel id - verify the channel exists within the nhspc discord server and that it was typed correctly."
            );
        });
    }
  }
});

// client.once("ready", async () => {
//   const guild = await client.guilds.fetch("1185016065340735589");
//   let channels = Array.from(await guild.channels.fetch());
//   console.log(channels);
//   const textChannels = channels
//     .filter(([channelId, channel]) => channel.type === ChannelType.GuildText)
//     .map(([channelId, channel]) => ({ id: channelId, name: channel.name }));
//   console.log(textChannels); // [ { id: '1185017672879046737', name: 'whiz' } ];
// });

app.get("/api", (req, res) => {
  res.status(403).send("Forbidden");
});

app.get("/api/*", (req, res) => {
  res.status(404).send("The server responded with a status of 404");
});

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "This is the api for whiz - the discord bot for the nhs programming club.<br><br>If you require access to this contact the club president."
    );
});

app.get("/*", (req, res) => {
  res.status(404).send("The server responded with a status of 404");
});

client.login(process.env.token);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
