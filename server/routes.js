const express = require("express");
const db = require("./db");

const app = express.Router();

app.get("/api/clients", async (req, res) => {
  try {
    let results = await db.clientsTable.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

app.get("/api/services", async (req, res) => {
  try {
    let results = await db.servicesTable.all();
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = app;
