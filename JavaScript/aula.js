/* Para ver seo número é par ou impar

const numero = 3;

const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numeroPar) {
    console.log('Par'); 
} else {
    console.log('Impar')
} */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Saber se o número é divisível por ele. 
const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numeroDivisivelPor5) {
    console.log('Sim'); 
} else {
    console.log('Não')
} */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* const numero = 5;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroDivisivelPor5) {
    console.log('Sim'); 
} else {
    console.log('Não');
} */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('Gustavo'); */
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo; 
}

console.log(incrementarJuros(100, 10)); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* function escrevaSeuNome(nome) {
    console.log('meu nome é: ' + nome);
}

escrevaSeuNome('Gustavo'); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* function maiorDeIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
}

maiorDeIdade(5); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* const gustavo = {
    nome: 'Gustavo Freitas',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}; */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`meun nome é ${this.name} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa();
vitor.nome = 'Vitor J Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan J Paula';
renan.idade = 30;

console.log(vitor);
console.log(renan); */

/* class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade
    }

    descrever() {
        console.log(`meun nome é ${this.name} e minha idade é ${this.idade}`);
    }
}

const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

console.log(vitor); */
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* const alunos = ['J0ão', 'Vitor', 'Marina'];

console.log(alunos); */

/* const alunos = ['João', 'Vitor', 'Marina'];

console.log(alunos[0]); */

/* const alunos = ['João', 'Vitor', 'Marina'];

alunos.push('Renan');

alunos[4] = 'Gustavo';

console.log(alunos); */

/* const alunos = [];

alunos.push('Gustavo');

alunos.push(10);

console.log(alunos); */

/* const alunos = ['1', '2','3'];

console.log(alunos);

console.log(alunos.pop()); 

console.log(alunos); */

/* const alunos = ['1', '2','3'];

console.log(alunos);

console.log(alunos.shift()); 

console.log(alunos); */

/* const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]; 

console.log(soma / notas.length ou pode colocar direto a quantidade que seria 5 );*/

/* const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]; 

console.log(soma / notas.length); */ 


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);