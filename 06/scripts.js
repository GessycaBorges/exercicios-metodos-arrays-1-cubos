//Encontrar dono do pet
const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    }
]

function encontrarDono (lista, nomeDoPet){
    let mensagem = "";
    for (let i =0; i< lista.length; i++){
        if (lista [i].pets.includes(nomeDoPet)){
            mensagem = (`O(A) dono(a) do(a) ${nomeDoPet} é o(a) ${lista[i].nome}`);
            break;
        } else {
            mensagem = (`Que pena ${nomeDoPet}, não encontramos seu(sua) dono(a)`);
        }
    }
    console.log (mensagem);
}
encontrarDono(usuarios, "Max");