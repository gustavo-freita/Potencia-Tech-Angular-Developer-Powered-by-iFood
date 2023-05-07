/*
====================================================
Bootcamp Potência Tech Angular Developer - Powered by iFood
====================================================
2/5 - Calculando-Preço_final-De-Um-Pedido
====================================================

Desafio
Você está criando um aplicativo de entrega de comida e precisa calcular o preço final do pedido do usuário. O usuário escolheu alguns itens do cardápio e é preciso calcular o preço total do pedido.

Entrada:
A entrada deve receber os valores abaixo:

valorHamburguer: o valor unitário de um hambúrguer.
quantidadeHamburguer: a quantidade de hambúrgueres que o usuário deseja.
valorBebida: o valor unitário de uma bebida.
quantidadeBebida: a quantidade de bebidas que o usuário deseja.
valorPago: o valor pago pelo usuário.
Saída:
A saída deve retornar um texto informando o valor total do pedido e a quantidade de troco que será necessário. Por exemplo, se tivermos os seguintes valores de entrada:

valorHamburguer = 10.00;
quantidadeHamburguer = 2;
valorBebida = 5.00;
quantidadeBebida = 1;
valorPago = 30.00;
De acordo com esses valores de entrada, o cálculo do preço final do pedido ficaria assim:

Valor total dos hambúrgueres: 10.00 * 2 = 20.00
Valor total da bebida: 5.00 * 1 = 5.00
Preço total do pedido: 20.00 + 5.00 = 25.00
Troco necessário: 30.00 - 25.00 = 5.00
Como o usuário pagou R$ 30.00 e o preço total do pedido ficou em R$ 25.00, o troco necessário é de R$ 5.00. Portanto, a saída esperada para esse exemplo seria:

O preço final do pedido é R$ 25.00. Seu troco é R$ 5.00.

SOLUÇÃO ABAIXO:
*/

const valorHamburguer = parseFloat(gets());
const quantidadeHamburguer = parseInt(gets());
const valorBebida = parseFloat(gets());
const quantidadeBebida = parseInt(gets());
const valorPago = parseFloat(gets());

const valorTotalDosHamburgueres = valorHamburguer * quantidadeHamburguer; 
const valorTotalDosBebidas = valorBebida * quantidadeBebida; 
const precoTotalDoPedido = valorTotalDosHamburgueres + valorTotalDosBebidas; 
const trocoNecessario = valorPago - precoTotalDoPedido;
console.log(`O preço final do pedido é R$ ${precoTotalDoPedido.toFixed(2)}. Seu troco é R$ ${trocoNecessario.toFixed(2)}. `);