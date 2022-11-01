/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Junior Silva';
const sobreNome = 'Rosa';
const idade = 42;
const peso = 112;
const alturaEmM = 1.68;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;

console.log(`${nome} ${sobreNome} tem ${idade}, pesa ${peso} kg.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento} .`);