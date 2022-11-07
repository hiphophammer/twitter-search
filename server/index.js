import express from "express";
import path from "path";
import cors from "cors";
import GetTwitterOAuthToken from "./api/twitterApi";
const app = new express();

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "build")));

// app.use(express.json());
// app.use(cors());

// const printReqInfo = function (req, res, next) {
//   req.requestTime = new Date().toISOString();
//   console.log(`Request time: ${req.requestTime}`);
//   console.log(`URL: ${req.originalUrl}`);
//   console.log(`App: ${req.app}`);
//   console.log(`BaseUrl: ${req.baseUrl}`);
//   console.log(`Body: ${JSON.stringify(req.body)}`);
//   console.log(`Hostname: ${req.hostname}`);
//   console.log(`IP address: ${req.ip}`);
//   console.log(`Method: ${req.method}`);
//   next();
// };

// app.use(printReqInfo);

/**  Set port for Heroku
 * Heroku uses an arbitrary port
 * if not present, set local port to 8000*/
let appPort = process.env.PORT ? process.env.PORT : 8000;
app.listen(appPort, () => {
  console.log(`The app is listening to port ${appPort}...`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
