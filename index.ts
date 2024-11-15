import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 3001;
const JIRA_URL = "http://yuansfer.atlassian.net/rest/api/3";
const AUTH_TOKEN = process.env.JIRA_AUTH_TOKEN;

app.get('/', (req, res) => {
  res.send('Hello, Vercel!');
});

app.post('/create-task', async (req, res) => {
  const body = {

  }

  const headers: any = {
    "Content-Type": "application/json",
    "Authorization": `Basic ${AUTH_TOKEN}`
  }

  const response = await axios.post(
    `${JIRA_URL}/issue`,
    body,
    headers
  )
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
