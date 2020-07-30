const api = require('../services/callFx')

const mainControl = (req, res) => {   
    return res.send({
        info: 'send from controller',
        header: req.headers,
        params: req.params,
        query: req.query

    })
}

const callApiController = (req, res) => {
    api.getUser()
    .then(rs => {
        console.log('from Controller')
        return res.send(rs.data)
    })
    .catch(e => {
        return res.send(e)
    }) 
}

module.exports = {
    mainControl,
    callApiController
}