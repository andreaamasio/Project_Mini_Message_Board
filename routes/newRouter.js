const { Router } = require("express")
//const { getAuthorById } = require("../controllers/indexController")
const newRouter = Router()

newRouter.get("/", (req, res) => {
  res.render("new", {})
})

module.exports = newRouter
