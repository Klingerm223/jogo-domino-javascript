export class Jogador {
    #nome;
    #idade;
    #jogo = new Set();

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
        pedras.forEach(pedra => {
            this.#jogo.add(pedra) ;    
        })
        
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

    numeroDePecas() {
       return this.#jogo.size;
    }

    joga(pedra) {
        this.#jogo.delete(pedra);
    }

    temPedra(pedra) {
        return this.#jogo.has(pedra);
    }

    temPedraAnalitica (pedra) {
        var aux = false;
        this.#jogo.forEach((minhaPedra) => {
            if ( (minhaPedra.ladoA == pedra.ladoA) || (minhaPedra.ladoA == pedra.ladoB)
                 || (minhaPedra.ladoB == pedra.ladoA)|| (minhaPedra.ladoB ==pedra.ladoB)) {

                    aux = true;
            }
        
        });
        return aux;
    }


}