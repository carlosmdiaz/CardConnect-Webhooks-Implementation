// Require express and body-parser
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
// Initialize express and define a port
const app = express();
const PORT = 8000;
var payload = {};
// Tell express to use body-parser's JSON parsing
app.use(cors());
//app.use(express.json());
app.use(bodyParser.urlencoded());

app.post("/hook", (req, res) => {
  const data = req.body.json;
  payload = JSON.parse(data);
  console.log(payload); // Call your action on the request here
  res.sendStatus(200); // Responding is important
});

app.get("/data", (req, res) => {
  res.json(payload);
});

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
