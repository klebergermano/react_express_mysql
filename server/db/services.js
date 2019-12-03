const connection = require("./config/connection");

let servicesTable = {};

servicesTable.all = async () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM services", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

module.exports = servicesTable;
