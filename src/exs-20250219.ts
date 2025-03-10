// 1. Interfaces e Tipagem Avançada
interface Usuario {
    nome: string;
    idade: number;
    email?: string; // ? = Propriedade opcional
}
const usuario1: Usuario = {
    nome: "Ana",
    idade: 25
};

// 1.2. Interfaces com Funções
interface Soma {
    (a: number, b: number): number;
}
const somar: Soma = (x, y) => x + y;
console.log(somar(10, 5));

// 1.3. Extensão de Interfaces
interface Animal {
    nome: string;
    idade: number;
}
interface Cachorro extends Animal {
    raca: string;
}
const meuCachorro: Cachorro = {
    nome: "Rex",
    idade: 4,
    raca: "Labrador"
};

// 2. Generics
// 2. Exemplo simples
function retornarNumero(numero: number): number {
    return numero;
}
function retornarTexto(texto: string): string {
    return texto;
}

// 2.1 Com Generics -- <T> define um tipo genérico que será inferido no momento da chamada da função.
function retornarElemento<T>(elemento: T): T {
    return elemento;
}
console.log(retornarElemento<number>(10)); // 10
console.log(retornarElemento<string>("Olá TypeScript")); // "Olá TypeScript"

// 2.2 Generics em Interfaces
interface RespostaAPI<T> {
    data: T;
    sucesso: boolean;
}
const respostaTexto: RespostaAPI<string> = {
    data: "Dados recebidos com sucesso!",
    sucesso: true
};
const respostaNumerica: RespostaAPI<number> = {
    data: 200,
    sucesso: true
};

// 2.3. Generics em Classes
class Caixa<T> {
    conteudo: T;
    constructor(conteudo: T) {
        this.conteudo = conteudo;
    }
    obterConteudo(): T {
        return this.conteudo;
    }
}
const caixaNumerica = new Caixa<number>(100);
console.log(caixaNumerica.obterConteudo()); // 100
const caixaTexto = new Caixa<string>("Presente");
console.log(caixaTexto.obterConteudo()); // "Presente"

// Exemplo com Array
class Lista<T> {
    private itens: T[] = [];
    adicionarItem(item: T): void {
        this.itens.push(item);
    }
    obterItens(): T[] {
        return this.itens;
    }
}
const listaNumeros = new Lista<number>();
listaNumeros.adicionarItem(5);
listaNumeros.adicionarItem(10);
console.log(listaNumeros.obterItens()); // [5, 10]
const listaPalavras = new Lista<string>();
listaPalavras.adicionarItem("Olá");
listaPalavras.adicionarItem("TypeScript");
console.log(listaPalavras.obterItens()); // ["Olá", "TypeScript"]

// 3. Manipulação Avançada de Tipos
// 3.1. Type Aliases -TypeScript permite definir alias para tipos, facilitando a reutilização e legibilidade do código. 
// Em vez de repetir estruturas complexas de tipos em várias partes do código, podemos criar um alias para representá-las:
type ID = string | number;
function buscarUsuario(id: ID) {
    console.log(`Buscando usuário com ID: ${id}`);
}

// 3.2. Union Types
// Union Types permitem que uma variável aceite múltiplos tipos de dados. Isso é útil quando um valor pode assumir diferentes formas dependendo do contexto.
let resposta: string | boolean;
resposta = "Sucesso";
console.log(resposta); // Saída: "Sucesso"
resposta = true;
console.log(resposta); // Saída: true
// Se tentarmos atribuir um tipo não especificado, o TypeScript emitirá um erro:
// resposta = 123; // Erro! Número não é um tipo válido para a variável resposta

// 3.3. Intersection Types
// Intersection Types permitem combinar múltiplos tipos em um só, criando objetos que precisam atender a todas as restrições definidas.
// Exemplo:
type Pessoa = {
    nome: string;
    idade: number;
};
type Funcionario = {
    cargo: string;
    salario: number;
};
type FuncionarioDetalhado = Pessoa & Funcionario;
const funcionario1: FuncionarioDetalhado = {
    nome: "Carlos",
    idade: 35,
    cargo: "Engenheiro",
    salario: 5000
};
// Aqui, FuncionarioDetalhado combina os atributos de Pessoa e Funcionario. Isso garante que qualquer objeto 
// do tipo FuncionarioDetalhado tenha as propriedades de ambos os tipos.

// 3.4. Utility Types
// TypeScript fornece vários tipos utilitários prontos que simplificam o desenvolvimento, tornando a manipulação de tipos mais eficiente.
// Partial<T> - Torna todas as propriedades opcionais
interface Produto {
    id: number;
    nome: string;
    preco: number;
}
const produtoParcial: Partial<Produto> = {
    nome: "Notebook"
};
// O uso de Partial<Produto> permite criar um objeto sem precisar definir todas as propriedades, pois todas elas se tornam opcionais.

// 4. Boas Práticas em TypeScript
// 4.1. Use Tipos Específicos Sempre que Possível
// Evite o uso de any, pois ele anula as vantagens da tipagem estática.
// Evite
let valor: any = "Teste";
valor = 10;
// Melhor
let valorCerto: string | number = "Teste";

// 4.2. Prefira Interfaces e Type Aliases
// Definir contratos claros para objetos melhora a manutenção do código.
interface Cliente {
    nome: string;
    idade: number;
}

// 4.3. Utilize Readonly para Propriedades Imutáveis
// Se uma propriedade não deve ser alterada, use readonly para garantir a segurança.
interface Config {
    readonly versao: string;
}
const configApp: Config = { versao: "1.0.0" };
// configApp.versao = "1.1.0"; // Erro
