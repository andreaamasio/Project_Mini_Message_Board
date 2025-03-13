const express = require("express")
const path = require("node:path")
const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
const indexRouter = require("./routes/indexRouter")

app.use("/", indexRouter)
const PORT = 3000
app.listen(PORT, () =>
  console.log(`Mini message app, listening to port ${PORT}`)
)
