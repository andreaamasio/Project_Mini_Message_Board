const express = require("express")
const path = require("node:path")
const app = express()
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
const { indexRouter } = require("./routes/indexRouter")
const formRouter = require("./routes/formRouter")
const messageDetailsRouter = require("./routes/messageDetailsRouter")
app.use("/message-details/:id", messageDetailsRouter)
app.use("/new", formRouter)
app.use("/", indexRouter)
app.use(express.urlencoded({ extended: true }))

const PORT = 3000
app.listen(PORT, () =>
  console.log(`Mini message app, listening to port ${PORT}`)
)
