const connection = require("./config/connection");

let clientsTable = {};

clientsTable.all = async () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM clients", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = clientsTable;
