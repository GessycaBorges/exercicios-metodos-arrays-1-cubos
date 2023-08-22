//Teste suas habilidades
//a)
const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas.reverse();
const frutasString = frutas.join();
console.log(frutasString);

//b)
const frutasb = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutasb.splice(0, 1);
frutasb.splice((frutasb.length - 1), 1, "Melão");
console.log (frutasb)