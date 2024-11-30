# **CRUD de Usuários - Node.js e Frontend Moderno**

Este projeto é uma aplicação CRUD de usuários que utiliza Node.js no backend e um frontend moderno com design responsivo para gerenciar usuários. O objetivo é permitir que o programador teste e valide funcionalidades, incluindo login, autenticação, adição, exclusão e edição de usuários.

---

## **Funcionalidades**

### **Backend**
1. **API REST** para gerenciar usuários:
   - Login e geração de token JWT.
   - CRUD completo (Adicionar, Listar, Editar e Deletar usuários).
2. **Autenticação JWT**:
   - Apenas usuários autenticados podem acessar as rotas protegidas.
3. **Repositório em memória** para armazenar os dados.

---

### **Frontend**
1. **Login do Administrador**:
   - Email: `admin@spsgroup.com.br`
   - Senha: `1234`.
2. **Interface moderna e responsiva** com tons azul-marinho.
3. **Gestão de Usuários**:
   - Adicionar, editar e excluir usuários.
   - Listar usuários em uma tabela com design intuitivo.

---

## **Tecnologias Utilizadas**

### Backend:
- Node.js
- Express.js
- JWT (jsonwebtoken)
- Nodemon (para desenvolvimento)

### Frontend:
- HTML5, CSS3 e JavaScript puro
- Design responsivo com uso de layout moderno

---

## **Instalação e Configuração**

### **Pré-requisitos**
- Node.js instalado (versão 14 ou superior)
- XAMPP configurado para rodar o servidor local
- Postman para testar as rotas
- Navegador para acessar o frontend

---

### **Passos para Configuração**

#### **1. Clonar o Repositório**
Clone o projeto em sua máquina:
```bash
git clone <URL_DO_REPOSITORIO>
cd crud-usuarios
```

#### **2. Configurar o Backend**
1. Acesse o diretório do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
4. O backend estará disponível em [http://localhost:3000](http://localhost:3000).

---

#### **3. Configurar o Frontend**
1. Acesse o diretório do frontend:
   ```bash
   cd ../frontend
   ```
2. Inicie um servidor local no frontend:
   ```bash
   npx live-server
   ```
3. O frontend estará disponível no navegador.

---

## **Rotas da API**

| Método | Endpoint          | Descrição                                                                 |
|--------|-------------------|---------------------------------------------------------------------------|
| POST   | `/auth/login`     | Login de usuário (retorna token JWT).                                     |
| GET    | `/users`          | Lista todos os usuários (requer autenticação).                           |
| POST   | `/users`          | Adiciona um novo usuário (requer autenticação).                          |
| PUT    | `/users/:email`   | Atualiza dados de um usuário existente pelo email (requer autenticação). |
| DELETE | `/users/:email`   | Remove um usuário pelo email (requer autenticação).                      |

### **Exemplo de Requisição no Postman**
#### Login:
- **URL:** `http://localhost:3000/auth/login`
- **Método:** `POST`
- **Body (JSON):**
  ```json
  {
    "email": "admin@spsgroup.com.br",
    "password": "1234"
  }
  ```
- **Resposta:**
  ```json
  {
    "token": "<jwt_token>"
  }
  ```

---

## **Testando o Projeto**

### **1. Teste do Backend**
1. Abra o Postman.
2. Faça uma requisição de login e copie o token recebido.
3. Teste as rotas protegidas (`/users`) adicionando o token no header `Authorization`:
   ```
   Bearer <jwt_token>
   ```
4. Verifique se o CRUD está funcionando corretamente (criação, edição e exclusão de usuários).

---

### **2. Teste do Frontend**
1. No navegador, acesse o frontend pelo link gerado pelo `live-server`.
2. Faça login com as credenciais:
   - Email: `admin@spsgroup.com.br`
   - Senha: `1234`.
3. Teste as seguintes funcionalidades:
   - **Adicionar Usuário:** Preencha o formulário e clique em "Adicionar Usuário".
   - **Listar Usuários:** Verifique se os usuários aparecem na tabela.
   - **Excluir Usuário:** Clique no botão "Deletar" ao lado de qualquer usuário.
   - **Editar Usuário:** (implemente caso necessário).

---

## **Melhorias Futuras**
- Criptografia de senha.
- Persistência dos dados em um banco de dados real (ex.: MongoDB ou MySQL).
- Edição direta de usuários no frontend.

---

## **Problemas Comuns e Soluções**
### **1. Erro: Backend não está rodando**
- Certifique-se de ter rodado `npm install` e `npm run dev` no diretório `backend`.

### **2. Token JWT não funciona no frontend**
- Certifique-se de que o token está sendo enviado corretamente no header `Authorization`.

### **3. Frontend não carrega no navegador**
- Verifique se o `live-server` está rodando no diretório correto (`frontend`).

---

Backend
Início: 10:00 AM
Término: 10:40 AM
Atividades:
Configurar o ambiente Node.js.
Criar as rotas da API REST.
Implementar autenticação JWT.
Desenvolver o CRUD de usuários.
Testar rotas no Postman.
Frontend
Início: 10:40 AM
Término: 11:45 AM
Atividades:
Estruturar a interface em HTML e CSS.
Implementar o JavaScript para interagir com a API.
Adicionar estilos responsivos com tons azul-marinho.
Testar a integração com o backend.

Com isso, o projeto está pronto para ser testado! Caso tenha dúvidas ou precise de suporte, entre em contato. 

https://github.com/user-attachments/assets/07c6765d-978b-4450-94d7-5761cab0760e


