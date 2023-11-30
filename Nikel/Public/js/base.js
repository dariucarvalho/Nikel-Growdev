const nome = "Dariu Carvalho"
let nome2 = "";
let pessoaDefault = {
    nome: "Dariu",
    idade: "29",
    trabalho: "programador"
}
let nomes = ["Dariu", "Laissa", "Meire"];
console.log("Nome antigo")
console.log(nome2)

let pessoas = [
    {nome: "Dariu",
    idade: "29"
    },
    {nome: "Laissa",
    idade: "Analista"
    }
    
];

nome2 = "DC Pereira"

console.log("Nome Novo")
console.log(nome2)

function alterarnome () {
    nome2 = "Horus";
    console.log("Nome Novo");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log("nome:");
    console.log(pessoa.nome);
    console.log("Idade:");
    console.log(pessoa.idade);
    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

console.log(pessoas);

function adicionarPessoas(pessoa){
    pessoas
}

