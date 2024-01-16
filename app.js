const ex = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = ex()
const port = 3000

const route = require("./router/api-router")
const mainController = require("./controller/main-controller")

app.use(cors())
app.use(ex.json())
app.use(morgan("combined"))

// middleware
app.use((req, res, next) => {
  const token = "test"
  req.headers.authorization == `Bearer ${token}`
    ? next()
    : res.send({ info: "invalid token" })
})

// call from router
app.use("/api", route)

//call from controller
app.get("/controller/:email", mainController.mainControl)
app.get("/controller", mainController.callApiController)

app.use("*", (_req, res) => {
  res.send({
    info: "page not found",
  })
})

app.listen(port, () => {
  console.log(`app start port: ${port}`)
})
