const express = require('express');
const { authenticateToken } = require('./middleware');
const router = express.Router();

let users = []; // Repositório em memória

// Adicionar Usuário
router.post('/', authenticateToken, (req, res) => {
  const { email, name, type, password } = req.body;
  if (users.some(user => user.email === email)) {
    return res.status(400).json({ error: "E-mail já cadastrado" });
  }
  users.push({ email, name, type, password });
  res.status(201).json({ message: "Usuário criado com sucesso" });
});

// Listar Usuários
router.get('/', authenticateToken, (req, res) => {
  res.json(users);
});

// Alterar Usuário
router.put('/:email', authenticateToken, (req, res) => {
  const { email } = req.params;
  const { name, type, password } = req.body;

  const userIndex = users.findIndex(user => user.email === email);
  if (userIndex === -1) return res.status(404).json({ error: "Usuário não encontrado" });

  users[userIndex] = { ...users[userIndex], name, type, password };
  res.json({ message: "Usuário atualizado com sucesso" });
});

// Remover Usuário
router.delete('/:email', authenticateToken, (req, res) => {
  const { email } = req.params;
  users = users.filter(user => user.email !== email);
  res.json({ message: "Usuário removido com sucesso" });
});

module.exports = router;
