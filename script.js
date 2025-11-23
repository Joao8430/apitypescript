const api = "http://localhost:3000/users"; // Exemplo de uma API local 

async function loadUsers() { // Função para carregar usuários da API 
    const res = await fetch(api); // Faz uma requisição para a API
    const data = await res.json(); // Converte a resposta para JSON 

    document.getElementById("user-list").innerHTML =
    data.map(u => `<div>${u.id} - ${u.name} (${u.email})</div>`).join("");
}

async function  addUser() {
    const name = document.getElementById("name").value 
    const email = document.getElementById("Email").value

    await fetch(api, {
        method: "POST", 
        headers: {" Content-Type": "application/json" },
        body: JSON.stringify({ name , email })
    });

    loadUsers();

    const  loadUsers = () => {
        console.log("Carregando usuários...")  
    }
loadUsers(); 

}

