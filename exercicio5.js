const carro = {
    marca: "Mitsubishi",
    modelo: "Lancer Evolution X",
    ano: "2014",
    cor: "preto",
    ligado: false
};

const carroNovo = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2023,
    cor: "Azul"
};

const carroComNovosDetalhes = { ...carro, ...carroNovo };

console.log("Carro com Novos Detalhes:");
console.log(carroComNovosDetalhes);

carroComNovosDetalhes.modelo = "Type R";

console.log("\nCarro com Detalhes Modificados:");
console.log(carroComNovosDetalhes);