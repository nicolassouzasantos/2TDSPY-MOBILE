// Exercício 1
// Crie uma interface chamada Carro, que contenha as seguintes propriedades:
// marca (string)
// modelo (string)
// ano (number)
// motor (opcional, string)
// Em seguida, crie um objeto chamado meuCarro que implemente essa interface e exiba os dados no console.

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string; 
  }
  
  const meuCarro: Carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    motor: "1.8 Flex", 
  };
  
  console.log("Resposta exercício 1:");
  console.log(meuCarro);

// Exercício 2
// Crie uma interface Multiplicacao para tipar uma função que recebe dois números e retorna o resultado da multiplicação deles.
// Depois, implemente essa função e teste com diferentes valores.

interface Multiplicacao {
  (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (a, b) => a * b;

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
function inverterArray<T>(array: T[]): T[] {
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

// Exercício 4
// Crie uma interface genérica chamada Repositorio<T>, que tenha um método salvar(dado: T): void e um método obterTodos(): T[].
// Depois, crie uma implementação dessa interface para armazenar uma lista de usuários (com nome e email).

interface Repositorio<T> {
  salvar(dado: T): void;
  obterTodos(): T[];
}

interface UsuarioUm {
  nome: string;
  contatoEmail: string;
}

class RepositorioUsuario implements Repositorio<UsuarioUm> {
  private usuarios: UsuarioUm[] = [];

  salvar(dado: UsuarioUm): void {
    this.usuarios.push(dado);
  }

  obterTodos(): UsuarioUm[] {
    return this.usuarios;
  }
}

const repo = new RepositorioUsuario();
repo.salvar({nome: "Alice", contatoEmail: "alice@email.com"});
repo.salvar({nome: "Bob", contatoEmail: "bob@email.com"});

console.log("\n");
console.log("Resposta exercício 4:");
console.log(repo.obterTodos());

// Exercício 5
// Crie um Type Alias chamado RespostaServidor, que pode ser uma string ou um boolean.
// Depois, crie uma função chamada processarResposta que recebe um valor desse tipo e 
// imprime uma mensagem no console dependendo do valor passado.

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log(`Mensagem do servidor: ${resposta}`);
  } else if (typeof resposta === "boolean") {
    console.log(resposta ? "Operação bem-sucedida!" : "Falha na operação.");
  }
}

// Testando a função com diferentes valores
console.log("\n");
console.log("Resposta exercício 5:");
processarResposta("Dados salvos com sucesso!");
processarResposta(true);
processarResposta(false);

// Exercício 6
// Utilizando Intersection Types, crie um tipo EstudanteTrabalhador, que una as propriedades de um 
// Estudante (nome e curso) e de um Trabalhador (empresa e cargo).
// Depois, crie um objeto que represente um estudante que também trabalha e exiba os dados no console.

// Definição dos tipos
type Estudante = {
  nome: string;
  curso: string;
};

type Trabalhador = {
  empresa: string;
  cargo: string;
};

// Criando o tipo EstudanteTrabalhador através da interseção dos tipos
type EstudanteTrabalhador = Estudante & Trabalhador;

// Criando um objeto que representa um estudante que também trabalha
const estudanteTrabalhador: EstudanteTrabalhador = {
  nome: "Carlos Silva",
  curso: "Engenharia de Software",
  empresa: "Tech Solutions",
  cargo: "Desenvolvedor Júnior",
};

console.log("\n");
console.log("Resposta exercício 6:");
console.log(estudanteTrabalhador);