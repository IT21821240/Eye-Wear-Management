const express = require('express')
const cors = require('cors')

const auth = require('../routes/auth')
const supplier = require('../routes/suppliers')

module.exports = function (app) {
    app.use(cors())
    app.use(express.json())
    app.use('/api/auth', auth)
    app.use('/api/supplier', supplier)
}