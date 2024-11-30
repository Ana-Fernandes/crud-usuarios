const API_URL = "http://localhost:3000"; // URL do backend
let token = null;

// Função para realizar login
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Falha no login");
    const data = await response.json();
    token = data.token;

    document.getElementById("login").style.display = "none";
    document.getElementById("user-management").style.display = "block";
    loadUsers();
  } catch (error) {
    alert(error.message);
  }
});

// Função para carregar usuários
async function loadUsers() {
  try {
    const response = await fetch(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const users = await response.json();

    const tableBody = document.querySelector("#user-table tbody");
    tableBody.innerHTML = "";
    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.type}</td>
        <td>
          <button onclick="deleteUser('${user.email}')">Deletar</button>
        </td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    alert("Erro ao carregar usuários");
  }
}

// Função para adicionar usuário
document.getElementById("user-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const type = document.getElementById("type").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, email, type, password }),
    });

    if (!response.ok) throw new Error("Erro ao adicionar usuário");
    loadUsers();
  } catch (error) {
    alert(error.message);
  }
});

// Função para deletar usuário
async function deleteUser(email) {
  try {
    const response = await fetch(`${API_URL}/users/${email}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) throw new Error("Erro ao deletar usuário");
    loadUsers();
  } catch (error) {
    alert(error.message);
  }
}
