export class PedraDomino {
    #ladoA;
    #ladoB;
    #nome;
    #id;
    nomes = ['As', 'Branco', 'Duque', 'Terno', 'Quadra', 'Quina', 'Sena'];

    constructor(ladoA, ladoB, id) {
        this.#ladoA = ladoA;
        this.#ladoB = ladoB;
        this.#id = id;
        this.#nome = this.associaNome(this.#ladoA, this.#ladoB);


    }

    // Métodos para acessar os valores dos atributos privados, se necessário
    getLadoA() {
        return this.#ladoA;
    }

    getLadoB() {
        return this.#ladoB;
    }

    getId() {
        return this.#id;
    }
    getNome() {
        return this.#nome;
    }

    toString() {
        let aux = `${this.#ladoA}|${this.#ladoB}`;;
        return aux;
    }

    toStringNome() {
        let aux = `${this.#id}-${this.#nome}`;;
        return aux;
    }

    associaNome(ladoA, ladoB) {

        if (ladoA == ladoB) {
            return `Carroca_${this.nomes[ladoA]}`;
        }
        else {
            return `${this.nomes[ladoA]}_${this.nomes[ladoB]}`;
        }

    }

}
