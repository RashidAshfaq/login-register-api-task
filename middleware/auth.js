const jwt = require('jsonwebtoken');
const JWT_SECRET = 'nodejsdeveloperrashidashfaq';

module.exports = function (req, res, next) {

    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Authorization denied' });
    }
    
    try{
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};