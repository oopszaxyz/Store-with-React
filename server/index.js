const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json(0));

const db = mysql.createConnection({
  user: "root",
  host: "localhost:4433",
  password: "",
  database: "mystore",
});

app.get("/store", (req, res) => {
  db.query("SELECT * FROM store", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3007, () => {
  console.log("running on port 3007");
});


