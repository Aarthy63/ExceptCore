const jwt = require('jsonwebtoken');

exports.authorization = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    // console.log(token);
    if (!token) {
        return res.status(401).json({ error: 'Access denied, token missing kindly please login again' });
    } else {
        try {
            const payload = jwt.verify(token, "secretKey");
            req.user = payload.id;
            next();
        } catch (error) {
            return res.status(401).json({ error: 'Access denied, token invalid' });
        }
    }
}