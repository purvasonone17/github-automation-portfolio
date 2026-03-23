// Topic: Basic JWT Authentication

const jwt = require('jsonwebtoken');

const secret = 'your-secret-key';
const token = jwt.sign({ userId: 123 }, secret, { expiresIn: '1h' });

const decoded = jwt.verify(token, secret);
console.log('Decoded Token:', decoded);