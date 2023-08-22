//Fila de atendimento 2.0
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

//a)
function agendarPaciente (lista, nome) {
    lista.splice((lista.length), 0, nome);
    console.log(lista.join(", "));
}
agendarPaciente(pacientes, "Clara");

//b)
function atenderPaciente (lista){
    lista.splice(0, 1);
    console.log(lista.join(", "));
}
atenderPaciente(pacientes);

//c)
function cancelarAtendimento (lista, nome) {
    let indice = lista.indexOf(nome);
    lista.splice(indice, 1);
    console.log(lista.join(", "));
}
cancelarAtendimento(pacientes, "Ana");