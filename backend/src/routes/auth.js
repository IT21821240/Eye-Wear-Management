const express = require('express')
const bcrypt = require('bcrypt')

const { User } = require('../models/user')

const router = express.Router()

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    let user = await User.findOne({ email: email })
    if (!user) return res.status(400).send('Invalid email or password')

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) return res.status(400).send('Invalid email or password')

    // const token = user.generateAuthToken() //:TODO
    // res.send(token)
})

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body

    let user = await User.findOne({ email })
    if (user) return res.status(400).send('User already registered')

    const salt = await bcrypt.genSalt(10)

    user = new User({ username, email, password })
    user.password = await bcrypt.hash(user.password, salt)
    await user.save()

    // const token = user.generateAuthToken() //:TODO
    // res
    //     .header('x-auth-token', token)
    //     .send(_.pick(user, ['_id', 'name', 'email']))
})

module.exports = router
