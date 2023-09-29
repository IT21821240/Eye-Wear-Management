const jwt = require('jsonwebtoken')

const jwtPrivateKey = process.env.JWT_PRIVATE_KEY

module.exports = function (req, res, next) {
    const token = req.header('token')
    if (!token) return res.status(401).send('Access denied')

    try {
        req.user = jwt.verify(token, jwtPrivateKey)

        next()
    } catch (ex) {
        res.status(400).send('Access denied')
    }
}
