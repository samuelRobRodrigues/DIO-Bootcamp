class Carro {
    modelo;
    marca;
    cor;
    gastoKm;
    
    constructor (modelo, marca, cor, gastoKm,) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.gastoKm = gastoKm;
    }
    calcGasto(distancia, precoCombustivel) {
        return distancia * this.gastoKm * precoCombustivel;
    }
}
const distancia = 73;
const precoCombustivel = 5.78;
const celta = new Carro('Celta','Chevrolet','Preta',1/12)
const palio = new Carro ('Palio', 'Fiat', 'Branco', 1/10)
const gastoTotal = palio.calcGasto(distancia, precoCombustivel)
console.log(celta);
console.log(palio);
console.log(gastoTotal)