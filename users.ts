// Cria dados simulados de usuários para a aplicaçãos 
interface User { // Definição da interface User 
    id: number; // Unico identificador de usuário; 
    name: string; // Nome do usuário;
    email: string; // Email do usuário;
    isActive: boolean; // Indica se o usuário está ativo;
}

let users: User[] = [ // Array de usuários
    { id: 1, name: "João", email: "joão@email.com" } // Usuário 01 
]; // Fim do array de usuários 

export default users; // Exporta o array de usuários como padrão 
export { User }; // Exporta a interface User