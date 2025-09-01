const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");


const coffee = require("./coffee.json");


app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));


app.get("/api/coffee", (req, res) => {
  res.json(coffee);
});

app.get("/coffee", (req, res) => {
  res.json(coffee);
});

app.get("/api", (req, res) => {
  res.json({ 
    message: "API funcionando!", 
    status: "online",
    endpoints: ["/api/coffee", "/coffee"]
  });
});


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Serving React app and API`);
});