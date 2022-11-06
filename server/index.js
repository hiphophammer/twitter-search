import express from "express";
import path from "path";
const app = new express();

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// app.use(express.json());
// var cors = require("cors");
// app.use(cors());

app.listen(8000, () => {
  console.log(`${__dirname}`);
});
app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
