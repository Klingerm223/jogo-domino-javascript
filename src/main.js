import { jogoDomino } from "../models/jogoDomino.mjs";
import { Jogador } from "../models/Jogador.mjs";
import { Jogo } from "../models/Jogo.mjs";

var jogador1 = new Jogador('Klinger', 28);
var jogador2 = new Jogador('Andre', 25);
var jogador3 = new Jogador('Marcelo', 30);
var jogador4 = new Jogador('Miqueias', 42);

var jogadores = [];
jogadores = [jogador1, jogador2, jogador3, jogador4];


console.log('====================================================================================')
var jogo1 = new Jogo(jogadores, 223);
jogo1.iniciaJogo();
//jogo1.destribuir();

//jogo1.getPecas(jogador1);
jogador1.printJogo();
//jogo1.getPecas(jogador2);
jogador2.printJogo();
//jogo1.getPecas(jogador3);
jogador3.printJogo();
//jogo1.getPecas(jogador4);
jogador4.printJogo();
//jogo1.getPecas(jogador4);

console.log('Jogador com carroca de sena: '+jogo1.getSaido().getNome());
console.log('====================================================================================')

