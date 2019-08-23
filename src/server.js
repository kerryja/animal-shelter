const express = require("express");
const path = require("path");
const app = express();
var cors = require("cors");
const dogController = require("./controllers/DogController");
require("./config/config");

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/api/dogs", dogController.index);

app.get("/api/dog/:id", dogController.getOneDog);

// React
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(process.env.PORT || global.gConfig.serverPort);
