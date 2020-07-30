const ex = require('express')
const router = ex.Router()
const api = require('../services/callFx')

router.get('/:id', (req, res) => {
    res.send({
        header: req.headers,
        params: req.params,
        query: req.query
    })
})

router.get('/callapi/user', async (req, res) => {
    let ret = await api.getUser()
    return res.send(ret.data)
})

module.exports = router