require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const DogController = require("./controllers/DogController");
const AdopterController = require("./controllers/AdopterController");
require("./config/config");

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/dogs", DogController.index);

app.get("/api/dog/:id", DogController.getOneDog);

app.post("/api/adopt", AdopterController.submitForm);

// React
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(process.env.PORT || global.gConfig.serverPort);
