const express = require("express");
const app = express()
const PORT = 5000
const cors = require("cors")

const coffee = require("./coffee.json")

app.use(cors())

app.get("/coffee", (req, res) => {
    res.json(coffee)
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
}) 