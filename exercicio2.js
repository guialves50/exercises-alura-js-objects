const carro = {
    marca: "Mitsubishi",
    modelo: "Lancer Evolution X",
    ano: "2014",
    cor: "preto",
}


console.log("As informações do carro são:\n");

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}

carro.cambio = "Automático"
carro.kmRodado = 60000

console.log("\nAs informações atualizadas do carro são\n");

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
}