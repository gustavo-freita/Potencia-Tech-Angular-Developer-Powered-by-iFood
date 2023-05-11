//TIPOS DE VARIAVEIS USADAS

//tipos primitivos: boolean, number, string
let ligado1: boolean = false;
let nome: string = "Gustavo";
let idade: number = 26;
let altura: number = 1.8;

//tipos especiais: null, undefined
let nulo : null = null;
let indefinido : undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = "qualquer coisa aqui";

//objetos aceita quais quer objetos e a quantidade que quiser (não é uma boa pratica passando sem presibilidade)
let produto: object = {
    name:"gustavo",
    cidade:"sp",
    iadade:"26",
};

//objeto tipado - com presibilidade (melhor jeito de criar objetos)
type produtoLoja = {
    nome: string;
    preco: number;
    unidade: number;
};

let meuProduto: produtoLoja = {
    nome:"macarrão",
    preco: 89.99,
    unidade: 55,
}

//ARRAYS - duas maneiras de declarar um array
let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

//arrays de Multi Types - so aceita números e letras 
let infos: (string | number)[] = ["gustavo", 28, "artur", 32];

//TUPLAS - deve ser seguido na ordem que foi criada
let boleto: [string, number, number] = ["agua conta", 199.9, 15146];

//ARRAYS MÉTODOS - igual do JavaSxript
dados.pop();

//DATAS - permite amarzenar data e hora
let aniversario: Date = new Date("2022-12-01 21:00");
console.log(aniversario.toString());