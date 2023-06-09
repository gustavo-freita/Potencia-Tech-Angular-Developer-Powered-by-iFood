/*
====================================================
Bootcamp Potência Tech Angular Developer - Powered by iFood
====================================================
5/5 - Gerenciamento-De-Pedidos-De-Comida-Online
====================================================

Desafio:
Você foi contratado para desenvolver um sistema que armazena informações dos pedidos de comida online realizados por um cliente. O sistema deve permitir ao cliente inserir novos pedidos, escolher um cupom de desconto (10% ou 20%) e exibir o valor total de todos os pedidos realizados até o momento, com o desconto aplicado.

Entrada:
A entrada é composta por:

Uma linha com um número inteiro n representando a quantidade de pedidos que o usuário deseja inserir;
n linhas, cada uma contendo uma string com o nome do pedido e um valor em ponto flutuante separados por espaço. O nome do pedido não contém espaços em branco;
Uma linha contendo o cupom de desconto escolhido (10% ou 20%).

Saída:
O programa deve exibir uma única linha contendo o valor total de todos os pedidos com o desconto aplicado, no seguinte formato:

Valor total: XX.YY, onde "XX.YY" é a soma de todos os pedidos com desconto em formato de duas casas decimais após a vírgula.

SOLUÇÃO ABAIXO:
*/

function calcularValorTotal(n, pedidos, cupom) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      let [nome, valor] = pedidos[i].split(' ');
      valor = parseFloat(valor);
      total += valor;
    }
    
    let desconto = 0;
    if (cupom === "10%") {
      desconto = total * 0.1;
    } else if (cupom === "20%") {
      desconto = total * 0.2;
    }
    
    total -= desconto;
    
    return total.toFixed(2);
  }
  
  const n = parseInt(gets());
  const pedidos = [];
  
  for (let i = 0; i < n; i++) {
    pedidos.push(gets());
  }
  
  const cupom = gets();
  
  const total = calcularValorTotal(n, pedidos, cupom);
  
  print("Valor total: " + total);