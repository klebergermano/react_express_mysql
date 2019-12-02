const express = require("express");

const apiRouter = require("./routes/index.js");

const app = express();
app.use(express.json());

app.use("/api/clients", apiRouter);

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on ${process.env.PORT || port}`);
});
