// Exercício 1
// Crie uma interface chamada Carro, que contenha as seguintes propriedades:
// marca (string)
// modelo (string)
// ano (number)
// motor (opcional, string)
// Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.
const meuCarro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "1.8 Flex",
};
console.log("Resposta exercício 1:");
console.log(meuCarro);
const multiplicar = (a, b) => a * b;
// Testes
console.log("\n");
console.log("Testes exercício 2:");
console.log(multiplicar(2, 3));
console.log(multiplicar(5, 10));
console.log(multiplicar(-4, 7));
console.log(multiplicar(1.5, 2));
// Exercício 3
// Crie uma função genérica chamada inverterArray<T>, que recebe um array de qualquer tipo e retorna um novo array com os elementos invertidos.
// Teste a função com um array de números e um array de strings.
function inverterArray(array) {
    return array.slice().reverse();
}
// Testando com um array de números
const numeros = [1, 2, 3, 4, 5];
console.log("\n");
console.log("Resposta exercício 3:");
console.log("Teste com um array de números:");
console.log(inverterArray(numeros));
// Testando com um array de strings
const palavras = ["aula", "typescript", "20", "fevereiro"];
console.log("Teste com um array de strings:");
console.log(inverterArray(palavras));
class RepositorioUsuario {
    constructor() {
        this.usuarios = [];
    }
    salvar(dado) {
        this.usuarios.push(dado);
    }
    obterTodos() {
        return this.usuarios;
    }
}
const repo = new RepositorioUsuario();
repo.salvar({ nome: "Alice", contatoEmail: "alice@email.com" });
repo.salvar({ nome: "Bob", contatoEmail: "bob@email.com" });
console.log("\n");
console.log("Resposta exercício 4:");
console.log(repo.obterTodos());
