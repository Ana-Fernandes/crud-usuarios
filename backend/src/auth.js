const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const users = [
  { name: "admin", email: "admin@spsgroup.com.br", type: "admin", password: "1234" }
];

// Rota de autenticação
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    const token = jwt.sign({ email: user.email, type: user.type }, 'SECRET_KEY', { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

// Middleware para verificar token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'SECRET_KEY', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Rota para listar usuários
router.get('/users', verifyToken, (req, res) => {
  res.json(users);
});

module.exports = router;
