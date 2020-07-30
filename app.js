const ex = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = ex()

const route = require('./router/api-router')
const mainController = require('./controller/main-controller')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

// middleware
app.use((req, res, next) => {
    console.log(req.headers)
    let token = 'test'
    req.headers.authorization == `Bearer ${token}` ? next() : res.send({info: 'invalid token'})
})

// call from router
app.use('/api', route)

//call from controller
app.get('/controller/:email', mainController.mainControl)
app.get('/controller', mainController.callApiController)

app.use('*', (req, res) => {
    res.send({
        info: 'page not found'
    })
})

app.listen(process.env.PORT || 3000)