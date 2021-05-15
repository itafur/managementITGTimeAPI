const express = require('express')
const router = express.Router()

router.get('/sample', (req, res) => {
    res.send({
        code: 1,
        message: "OK",
        data: []
    })
})

module.exports = router