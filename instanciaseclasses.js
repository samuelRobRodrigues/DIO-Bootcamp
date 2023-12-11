class pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
        descrever() {
            console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
        }
}
const samuel = new pessoa('Samuel', 21);
const mario = new pessoa('Mario', 21)
samuel.descrever()
mario.descrever()