import express from "express";
import path from "path";
const app = new express();

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let PORT = !process.env.PORT ? 8000 : process.env.PORT;

// app.use(express.json());
// var cors = require("cors");
// app.use(cors());

app.listen(PORT, () => {
  console.log(`The app is listening to port ${PORT}...`);
});
app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
  console.log(`Got a request `);
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
