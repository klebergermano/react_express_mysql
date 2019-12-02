const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  password: "",
  user: "root",
  database: "nodejs",
  host: "localhost"
});

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
