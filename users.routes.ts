import { Routes } from 'express'; // Importa a classe Routes do Express
import users from '../data/users'; // Importa os dados simulados de usuários 

const router = Routes(); // Cria uma nova instância de Routes 

// Rota para obter todos os usuários
router.get('/', (req, res) => { 
    res.json(users); // Retorna a lista de usuários em formato JSON 
});

//POST para adicionar um novo usuário
router.post('/', (req, res) => {
    const {name, email} = req.body; // Extrai name e email do corpo da requisição 

    const newUser = { // Cria um novo objeto de usuário 
        id: users.length + 1, // Gera um ID único baseado no tamanho atual do array
        name, // Define o nome do usuário 
        email, // Define o email do usuário 
    };

    users.push(newUsers); // Adiciona o novo usuário ao array de usuários 
    res.status(201).json(newUser); // Retorna o novo usuário com status 201 (Criado) 
});

//PUT 

router.put('/:id', (req, res) => {
    const id = porseInt(req.params.id); // Extrai o ID do usuário dos parâmetros da rota
    const {name, email} = req.body; // Extrai name e email do corpo da requisição

    const user = users.find(u => u.id === id); // Encontra o usuário pelo ID
    if (!user) { // Se o usuário não for encontrado
        return res.status(404).json({message: 'Usuário não encontrado'}); // Retorna 404 se o usuário não for encontrado 
    }

    user.name = name; // Atualiza os dados do usuário 
    user.email = email; // Atualiza os dados do usuário 

    res.json(user); // Retorna o usuário atualizado 
}); 

// Delete 
router.delete('/:id', (req, res) => {
    const id = Number (req.params.id); // Extrai o ID do usuário dos parâmetros da rota
    const index = users.findIndex(u => u.id === id); 

    if (index === -1) return res.status(404).json({ error: "Usuário não encontrado"}); // Se o usuário não for encontrado, retorna o erro. 

    users.splice(index, 1);
    res.status(204).send();
});

export default router; // Exporta o roteador como padrão