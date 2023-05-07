/* Desafio 1

Faça um programa para calcular o valor gsto de combustivel em uma viagem. 

você terá 3 variáriaveis. Sendo elas: 
    1 - Preço do combustível;
    2 - Valor médio de combustível do carro por KM;
    3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

const precoCombustivel = 5.79;
const kmPorLitros  = 10;
const distanciaEmKm = 100; 

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2)); 