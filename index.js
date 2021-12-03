const express = require("express");
const app = express();

let port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
