
import { jogoDomino } from "./jogoDomino.mjs";

export class Jogo {
    #mesaId;
    #mesa = new jogoDomino();
    #saido; 

    //cadeiras numeradas no sentido anti-horario cad1 a esquerda fica cad2 a esq fica cad3 e esq. fica cad4
    #cadeira1;
    #cadeira2;
    #cadeira3;
    #cadeira4;

    constructor(vet, mesaId) {
        this.#cadeira1 = vet[0];
        this.#cadeira2 = vet[1];
        this.#cadeira3 = vet[2];
        this.#cadeira4 = vet[3];
        this.#mesaId = mesaId;
        this.#saido =null;
    }

    _geraNumeroRamdon() {
        return Math.floor(Math.random() * 28) + 1;
    }


    iniciaJogo() {
        console.log('Id: ' + this.#mesaId);
        //console.log(this.#cadeira1.getNome());
        this._destribuir();

    }
    _setSaido(jogador) {
        this.#saido = jogador;
    }
    getSaido() {
        return this.#saido ;
    }

    _destribuir() {

        var vet = [];
        var x = 0;
        var cadeiras = [this.#cadeira1, this.#cadeira2, this.#cadeira3, this.#cadeira4];
        const gerarNumeroUnico = this.createRandomNumberGenerator(1, 28);

        cadeiras.forEach(jogador => {
            for (var i = 1; i <= 7; i++) {
                x = gerarNumeroUnico();
                if (x == 28) {
                    this._setSaido(jogador);
                }
                vet[i] = this.#mesa.getPedraPorId(x);
            }
            jogador.recebePedra(vet);
            vet = [];
        })
    }

    getPecas(jogador) {
        return jogador.getPedras();
    }

    createRandomNumberGenerator(min, max) {
        // Cria um array com números de min a max
        const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min);

        // Embaralha o array usando o algoritmo de Fisher-Yates
        for (let i = numbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }

        // Retorna uma função geradora que devolve um número único por chamada
        return function () {
            if (numbers.length === 0) {
                throw new Error("Todos os números já foram gerados.");
            }
            return numbers.pop();
        };
    }
}