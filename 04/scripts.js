//Fila de atendimento
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function filaDeAtendimento (lista, tipo, nome) {
    if (tipo === "agendar"){
        lista.splice((lista.length), 0, nome);
    } else if (tipo === "atender"){
        lista.splice(0, 1);
    }
    let listaAtualizada = lista.join(", ");
    console.log(listaAtualizada);
}
filaDeAtendimento(pacientes);
filaDeAtendimento(pacientes, "agendar", "Clara");
filaDeAtendimento(pacientes, "atender");