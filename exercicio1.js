const pessoa = {
    nome: "Guilherme",
    notas: [8, 7, 9, 10],

    calcularMediaPessoa: function () {
        const somaNota = this.notas.reduce((soma, nota) => soma + nota, 0);
        const media = somaNota / this.notas.length;
        return media.toFixed(2)
    },

    classificarDesempenho: function () {
        media = this.calcularMediaPessoa()

        if(media >= 9){
            return "Desempenho excelente"
        } else if(media >= 7.6 && media <= 8.9) {
            return "Bom desempenho"
        } else if (media >= 6 && media <= 7.5) {
            return "Desempenho regular"
        } else {
            return "Desempenho insuficiente"
        }
    } 
}

const mediaCalculada = pessoa.calcularMediaPessoa();
console.log(`${pessoa.nome} tem uma média de notas de ${mediaCalculada}.`);

const categoriaDesempenho = pessoa.classificarDesempenho();
console.log(`${pessoa.nome} possui: ${categoriaDesempenho}.`);

