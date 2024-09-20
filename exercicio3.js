const carro = {
    marca: "Mitsubishi",
    modelo: "Lancer Evolution X",
    ano: "2014",
    cor: "preto",
    ligado: false,


    ligar: function () {
        if (!this.ligado) {
          this.ligado = true;
          console.log('O carro está ligado.');
        } else {
          console.log('O carro já está ligado.');
        }
    },

    desligar: function () {
        if (this.ligado) {
          this.ligado = false;
          console.log('O carro está desligado.');
        } else {
          console.log('O carro já está desligado.');
        }
    },

    obterDetalhes: function () {
        const estado = this.ligado ? 'ligado' : 'desligado';
        return `\nDetalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
    }
};

carro.ligar()
carro.desligar()
carro.desligar()
carro.ligar()
console.log(carro.obterDetalhes())
