const express = require('express');
const router = express.Router();   
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'nodejsdeveloperrashidashfaq';

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        
        let user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = new User({
            username,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully', data: user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

    router.post('/login', async (req, res) => {
        const { username, password } = req.body;
        try {
            let user = await  User.findOne({username});
            if (!user) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res.json({ token , data: user});
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal server error');
        }
});

module.exports = router;