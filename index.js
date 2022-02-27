const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config();
const initServer = () => {
  const app = express();
  app.use(cors({ origin: "*" }));
  const bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(express.json());
  app.get("/", (req, res) => {
    res.end("Server is running!");
  });
  app.use("/api/test", require("./src/routes/test"));
  app.use("/api/refugee", require("./src/routes/person"));
  app.use("/api/place", require("./src/routes/place"));
  app.use("/api/humanitaryUnit", require("./src/routes/humanitaryUnit"));
  app.use("/api/receivedHumanitaryUnit", require("./src/routes/receivedHumanitaryUnit"));


  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running");
  });
};

mongoose.connect(
  process.env.MONGO_DB,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
).then(()=>{
  initServer();
})
