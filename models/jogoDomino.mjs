import { PedraDomino } from './PedraDomino.mjs';

export class jogoDomino {
   pecas = new Set();

   constructor() {


      var id = 1;
      for (var i = 0; i < 7; i++) {
         for (var j = 0; j < 7; j++) {
            if (j <= i) {
               this.pecas.add(new PedraDomino(i, j, id++))
            }

         }

      }
   }

   toString() {
      var aux = '';
      this.pecas.forEach(pedra => {
         aux = aux + pedra.getId() + ' - ' + pedra.getLadoA() + ':' + pedra.getLadoB() + ' - ' + pedra.getNome() + ',' + '\n';
      });

      return aux;
   }

   getPedraPorId(id) {
      let aux = null;
      this.pecas.forEach(pedra => {
         if (pedra.getId() === id) {
            aux = pedra; // Atribui o próprio objeto pedra
         }
      });
      return aux;
   }


   numeroDePecas() {
      var total = 0;
      this.pecas.forEach(element => {
         total++;
      })
      return total;
   }

}