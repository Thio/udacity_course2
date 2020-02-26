import express from "express";
import bodyParser from "body-parser";

import { IndexRouter } from "./controller/v0/index.router";

(async () => {
  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  app.use("/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
