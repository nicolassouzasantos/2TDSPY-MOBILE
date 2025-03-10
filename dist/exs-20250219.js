const usuario1 = {
    nome: "Ana",
    idade: 25
};
const somar = (x, y) => x + y;
console.log(somar(10, 5));
const meuCachorro = {
    nome: "Rex",
    idade: 4,
    raca: "Labrador"
};
// 2. Generics
// 2. Exemplo simples
function retornarNumero(numero) {
    return numero;
}
function retornarTexto(texto) {
    return texto;
}
// 2.1 Com Generics -- <T> define um tipo genérico que será inferido no momento da chamada da função.
function retornarElemento(elemento) {
    return elemento;
}
console.log(retornarElemento(10)); // 10
console.log(retornarElemento("Olá TypeScript")); // "Olá TypeScript"
const respostaTexto = {
    data: "Dados recebidos com sucesso!",
    sucesso: true
};
const respostaNumerica = {
    data: 200,
    sucesso: true
};
// 2.3. Generics em Classes
class Caixa {
    constructor(conteudo) {
        this.conteudo = conteudo;
    }
    obterConteudo() {
        return this.conteudo;
    }
}
const caixaNumerica = new Caixa(100);
console.log(caixaNumerica.obterConteudo()); // 100
const caixaTexto = new Caixa("Presente");
console.log(caixaTexto.obterConteudo()); // "Presente"
// Exemplo com Array
class Lista {
    constructor() {
        this.itens = [];
    }
    adicionarItem(item) {
        this.itens.push(item);
    }
    obterItens() {
        return this.itens;
    }
}
const listaNumeros = new Lista();
listaNumeros.adicionarItem(5);
listaNumeros.adicionarItem(10);
console.log(listaNumeros.obterItens()); // [5, 10]
const listaPalavras = new Lista();
listaPalavras.adicionarItem("Olá");
listaPalavras.adicionarItem("TypeScript");
console.log(listaPalavras.obterItens()); // ["Olá", "TypeScript"]
function buscarUsuario(id) {
    console.log(`Buscando usuário com ID: ${id}`);
}
// 3.2. Union Types
// Union Types permitem que uma variável aceite múltiplos tipos de dados. Isso é útil quando um valor pode assumir diferentes formas dependendo do contexto.
let resposta;
resposta = "Sucesso";
console.log(resposta); // Saída: "Sucesso"
resposta = true;
console.log(resposta); // Saída: true
const funcionario1 = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};
const produtoParcial = {
    nome: "Notebook"
};
// O uso de Partial<Produto> permite criar um objeto sem precisar definir todas as propriedades, pois todas elas se tornam opcionais.
// 4. Boas Práticas em TypeScript
// 4.1. Use Tipos Específicos Sempre que Possível
// Evite o uso de any, pois ele anula as vantagens da tipagem estática.
// Evite
let valor = "Teste";
valor = 10;
// Melhor
let valorCerto = "Teste";
const configApp = { versao: "1.0.0" };
// configApp.versao = "1.1.0"; // Erro
