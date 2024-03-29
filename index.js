const express = require("express");
const app = express();
const mysql = require("mysql");

let port = process.env.PORT || 8080;

let config2 = {
  host: "mydb.tamk.fi",
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: 10,
};

var pool = mysql.createPool(config2);
app.get("/", (req, res) => {
  pool.query("SELECT * from location", (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${server.address().port}`);
});
