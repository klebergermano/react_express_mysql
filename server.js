const express = require("express");
const app = express();

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Somebody1", description: "Exaple1" },
    { id: 2, firstName: "Somebody2", description: "Exaple2" },
    { id: 3, firstName: "Somebody3", description: "Exaple" }
  ];
  res.json(customers);
});

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
