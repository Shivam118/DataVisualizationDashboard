const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

dotenv.config({ path: "./config.env" });
const Intern = require("./model");

const port = process.env.PORT;

require("./connection");

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.get("/data", (req, res, next) => {
  Intern.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// app.post("/API", async function (req, res) {
//   const { intensity, impact, url, sector, topic } = req.body;
//   try {
//     const save_Data = new Intern({
//       intensity,
//       impact,
//       url,
//       sector,
//       topic,
//     });
//     const DataSaved = await save_Data.save();
//     if (DataSaved) {
//       res.status(201).json({ message: "Data Saved Successfully" });
//     } else {
//       res.status(500).json({ error: "Failed" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
