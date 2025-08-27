const express = require("express");
const app = express()
const PORT = 5000

const coffee = require("./coffee.json")

app.get("/coffee", (req, res) => {
    res.json(coffee)
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
}) 