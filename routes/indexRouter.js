const { Router } = require("express")
//const { getAuthorById } = require("../controllers/indexController")
const indexRouter = Router()

indexRouter.get("/", (req, res) => {
  res.render("index", {})
})

module.exports = indexRouter
