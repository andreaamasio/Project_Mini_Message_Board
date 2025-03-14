const { Router } = require("express")
const express = require("express")
const { messages } = require("./indexRouter")
//const { getAuthorById } = require("../controllers/indexController")
const messageDetailsRouter = Router()
messageDetailsRouter.use(express.urlencoded({ extended: true }))

messageDetailsRouter.get("/:id", (req, res) => {
  const messageID = Number(req.params.id)
  const message = messages[messageID]
  console.log(message)
  if (!message) {
    return res.status(404).send("Message not found")
  }
  res.render("message-details", { message })
})

module.exports = messageDetailsRouter
