
require("dotenv").config();
const express = require("express");
const multer = require('multer');

const app = express();
app.use(multer().array());
app.use(require("cors")());

//Importing Routes
require("./routes/directory")(app);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started!");
  console.log("Listening on PORT ", server.address().port);
});

process.on("SIGINT", () => {
  console.log("\nServer Turn off Sequence Initiated!");
  console.log("Closing Server!");
  server.close();
  console.log("Turn Off Sequence Complete! Exiting");
  process.exit(1);
});