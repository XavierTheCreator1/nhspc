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

// postgres
// app.js
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
  console.log(req.query.key == apikey);
  if (req.query.key != apikey) {
    res.status(403).send("Forbidden");
  } else {
    if (req.query.date == undefined || req.query.topic == undefined) {
      res.status(400).send("-1");
    } else {
      const result = await sql`
          INSERT INTO r (date, topic)
          VALUES (${req.query.date}, ${req.query.topic})
          RETURNING *`; // Assuming 'reminders' is your table name
      res.status(202).json(result);
    }
  }
});

app.get("/api", (req, res) => {
  res.status(403).send("Forbidden");
});

app.get("/api/*", (req, res) => {
  res.status(404).send("The server responded with a status of 404");
});

client.login(process.env.token);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
