
import { jogoDomino } from "./jogoDomino.mjs";

export class Jogo {
    #mesaId;
    #mesa = new jogoDomino();
    #saido;
    #posicaoInicial;

    //cadeiras numeradas no sentido horario formato de cruz numero1 na parte inferior
    // #cadeira1;
    // #cadeira2;
    // #cadeira3;
    // #cadeira4;
    //#cadeiras;

    constructor(vet, mesaId) {
        this.#mesaId = mesaId;
        this.#saido = null;
        this.cadeiras = vet;
        this.#posicaoInicial = null;
    }



    iniciaJogo() {
        console.log('Id: ' + this.#mesaId);
        //console.log(this.#cadeira1.getNome());
        //var cento = ponta1 = ponta2 = ponta3 = ponta4 = 0;
        this._destribuir();
        this._jogar();

    }

    _proximoJogador() {
        this.#posicaoInicial == 3 ? this.#posicaoInicial = 0 : this.#posicaoInicial++;
        return this.cadeiras[this.#posicaoInicial]
    }

    _jogar() {
        
        var carrocaSena = this.#mesa.getPedraPorId(28); //carrocaDeSena
        var jogadorDaVez = this._getSaido();
        var pedra = carrocaSena;
        var x = 0;
        //const gerarNumeroUnico = this.createRandomNumberGenerator(1, 28);
        console.log("saido: " + jogadorDaVez.getNome());

        while ( jogadorDaVez.numeroDePecas() >= 1 )
        {

            if ( jogadorDaVez.temPedraAnalitica( pedra ) )
            {
                jogadorDaVez.joga( pedra );
                // console.log(jogadorDaVez.getNome() +" jogou");
            }
            else {
                //console.log(jogadorDaVez.getNome() +" passou");
            }
            // x = this._getRandomNumber();
            if (jogadorDaVez.numeroDePecas() != 0) {
                jogadorDaVez = this._proximoJogador();
                pedra = this.#mesa.getPedraPorId( this._getRandomNumber() );
            }
            
        }
        console.log("jogo terminado - Bateu :" + jogadorDaVez.getNome());

    }



    _setSaido(jogador) {
        this.#saido = jogador;
    }
    _getSaido() {
        return this.#saido;
    }

    _getRandomNumber() {
        return Math.floor(Math.random() * 28) + 1;
    }

    _destribuir() {

        var vet = [];
        var x = 0;

        const gerarNumeroUnico = this.createRandomNumberGenerator(1, 28);

        this.cadeiras.forEach(jogador => {
            // console.log(this.cadeiras.indexOf(jogador))
            for (var i = 0; i <= 6; i++) {
                x = gerarNumeroUnico();
                if (x == 28) {
                    this._setSaido(jogador);
                    this.#posicaoInicial = this.cadeiras.indexOf(jogador);
                }
                vet[i] = this.#mesa.getPedraPorId(x);
            }
            jogador.recebePedra(vet);
            vet = [];
        })
    }

    _getPecas(jogador) {
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