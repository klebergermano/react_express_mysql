const mysql = require("mysql");
const config = require("./config");

const pool = mysql.createPool(config);

let clientsDB = {};

clientsDB.all = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM clients", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = clientsDB;
