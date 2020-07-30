const axios = require('axios')

module.exports = () => {
    return axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
            'Authorization': 'Bearer token',
            'content-type': 'application/json'
        }
    })
}
