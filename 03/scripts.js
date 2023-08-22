//Grupos de carros
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;
function grupoDeCarros (array, numero){
    let corte = array.slice(numero, numero + 3);
    corte = corte.join(" - ");
    console.log (corte);
}
grupoDeCarros(nomes, posicao);