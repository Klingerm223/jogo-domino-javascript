export class NumeroAleatorioUnico {
    constructor(min, max) {
        this.numeros = this._embaralharArray(this._criarArray(min, max));
    }

    _criarArray(min, max) {
        const array = [];
        for (let i = min; i <= max; i++) {
            array.push(i);
        }
        return array;
    }

    _embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    _geraNumeroRamdon() {
        if (this.numeros.length === 0) {
            throw new Error("Todos os números já foram gerados.");
        }
        return this.numeros.pop();
    }
}