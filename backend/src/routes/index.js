const express = require('express')
const cors = require('cors')

const supplier = require('../routes/suppliers')

module.exports = function (app) {
    app.use(cors())
    app.use(express.json())
    app.use('/api/supplier', supplier)
}