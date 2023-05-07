/* Desafio 2

Faça um programa para calcular o valor gsto de combustivel em uma viagem. 

você terá 3 variáriaveis. Sendo elas: 
    1 - Preço do etanol;
    2 - Preço do gasolina;
    3 - O tipo de combustível que está no seu carro;
    4 - Valor médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros  = 10;
const distanciaEmKm = 100;
const tipoDoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
} 