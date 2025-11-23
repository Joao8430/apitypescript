import express from 'express'; // Importa o from Express
import cors from 'cors'; // Importa o middLeware CORS
import userRoutes from './routes/users.routes'; // Importa as rotas definidas no arquivo routes.ts 

const app = express(); // Cria uma instância do aplicativo Express
app.use(cors()); // Habilita o CORS para todas as rotas 
app.use(express.json()); //Habilita o porsing de JSON no corpo das requisições 

app.use('/users', userRoutes); //Define as rotas para o recurso de usuários 

app.listen(3000, () => { // Inicia o servidor na porta 3000
    console.log('API rodando na porta 3000'); // Inicia o servidor na porta 3000 | Exibe uma mensagem no console indicando que o API está rodando 
});