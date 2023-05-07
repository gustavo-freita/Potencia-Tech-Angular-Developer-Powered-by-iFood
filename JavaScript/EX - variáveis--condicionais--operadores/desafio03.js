/* Desafio 3

Faça um algoritimo que dado os 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela a baixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;*/

const primeriaNota = 10;
const segundaNota = 2;
const terceiraNota = 10;

const notaFinal = (primeriaNota + segundaNota + terceiraNota) / 3;

console.log(notaFinal.toFixed(2));

if (notaFinal < 5)  {
    console.log("Você está reprovado");
} else if (notaFinal >= 5 && notaFinal <= 7) {
    console.log("Você esta de recuperação");
} else {
    console.log("Você esta aprovado");
} 