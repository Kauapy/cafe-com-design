const coffee = require("../coffee.json");

export default function handler(req, res) {
  res.status(200).json(coffee);
}