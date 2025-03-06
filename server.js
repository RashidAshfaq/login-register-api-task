const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./login-register-api-task/routes/auth');
const protectedRoutes = require('./login-register-api-task/routes/protected');
const app = express();
const PORT = 3022 || process.env.PORT;


mongoose.connect('mongodb://127.0.0.1:27017/auth')
.then(() => {
    console.log('Connected to database');
})
.catch((error) => {
    console.error(error);
});


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});