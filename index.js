const express = require("express");
const DataService = require("./src/services/dataStore");
const DataRoute = require("./src/routes/DataRoute");
const app = express();
const port = 3000;

app.use(express.json());

DataService.fetchDataAndStore()
  .then(() => {
    console.log("Data fetched and stored successfully");
    app.use("/api/data", DataRoute);
    app.listen(port);
  })
  .catch((error) => {
    console.log("Error in fetching data ", error);
    process.exit(1);
  });
