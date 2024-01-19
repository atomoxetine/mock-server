const app = require("express")()

app.get("/ping", (req, res) => {
  return res.send("pong")
})

app.listen(3000, "0.0.0.0", () => {
  console.log("Listening on port 3000")
})
