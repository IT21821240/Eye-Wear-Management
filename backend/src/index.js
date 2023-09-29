const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

const routes = require('./routes')

dotenv.config()

const port = process.env.PORT
const dbConnectionStr = process.env.DB_URI

const app = express()

routes(app)

mongoose.connect(dbConnectionStr).then(() => console.info('Connected to db'))

app.listen(port, () => console.info(`Listening on port ${port}...`))
