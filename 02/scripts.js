//Divisão de grupos
const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;
function divisaoDeGrupos (integrantes, tamanho){
    let grupo = 1;
    for (let i=0; i<= integrantes.length; i+=tamanho){
        console.log(`Grupo ${grupo}: ${integrantes.slice(i, (i+tamanho))}`)
        grupo +=1
    }
}
divisaoDeGrupos (nomes, tamanhoDoGrupo);