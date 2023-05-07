/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilômetro rodado. Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos de o valor gsto em reais para realizar este percurso. */

class Carro {
    marca;
    cor;
    gatoMedioPorKm;

    constructor(marca, cor, gatoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gatoMedioPorKm = gatoMedioPorKm;
    }

    descrever() {
        console.log(`A marca do seu carro é ${this.marca}, e a cor dele é ${this.cor}`);
    }

    calcularGstoDePercurso(distancia, precoCombustivel) {
        return distancia * this.gatoMedioPorKm * precoCombustivel;
    }
}

const carro = new Carro('Fiate', 'vermelho', 1/12);
console.log(carro.calcularGstoDePercurso(70, 5));