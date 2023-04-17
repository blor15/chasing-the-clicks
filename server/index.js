const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
