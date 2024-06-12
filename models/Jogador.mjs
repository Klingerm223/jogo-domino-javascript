export class Jogador {
    #nome;
    #idade;
    #jogo = [];

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;

    }
    getNome() {
        return this.#nome;
    }

    getIdade() {
        return this.#idade;
    }

    recebePedra(pedras) {
        this.#jogo = pedras;
        // return null;
    }

    getPedras() {
        return this.#jogo;
    }

    printJogo() {
        let aux = '';
        this.#jogo.forEach(jogo => {
            aux = jogo.toStringNome() + ', ' + aux;
        })

        console.log(this.getNome() + ': ' + aux);
    }

}