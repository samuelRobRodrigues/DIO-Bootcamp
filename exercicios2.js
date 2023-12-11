class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcImc() {
        return this.peso / (this.altura * this.altura );
    }
    classificarImc(){
        const imc = this.calcImc();
        if (imc < 18.5){
            return (`Abaixo do peso`)
        } else if (imc > 18.5 && imc < 30){
            return (`Peso normal`)
        } else {
            return (`Obeso`)
        }
    }
}

const samuel = new Pessoa('Samuel', 73, 1.70)
const mario = new Pessoa('Mario', 105, 1.69)

console.log(mario,mario.calcImc(),mario.classificarImc())
console.log(samuel,samuel.calcImc(),samuel.classificarImc())
