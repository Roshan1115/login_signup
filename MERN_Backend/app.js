require('dotenv').config()
const express = require("express")
const app = express()
const router = require("./routing")
const port = process.env.PORT || 3000
require("./db/connection")


// app.use(express.json())
app.use(router)

app.listen(port, (req, res) => {
  console.log(`Listening on port : ${port}`);
})