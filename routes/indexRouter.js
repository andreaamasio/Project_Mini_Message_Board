const { Router } = require("express")
const express = require("express")
//const { getAuthorById } = require("../controllers/indexController")
const indexRouter = Router()
indexRouter.use(express.urlencoded({ extended: true }))
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini message board", messages: messages })
})
indexRouter.post("/new", (req, res) => {
  messages.push({
    text: req.body.new_message,
    user: req.body.user,
    added: new Date(),
  })

  res.redirect("/")
})

module.exports = { indexRouter, messages }
