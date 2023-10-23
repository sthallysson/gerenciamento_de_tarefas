import Tarefa from "./interfaces/Tarefa";
import Usuario from "./interfaces/Usuario";

let tarefas: Array<Tarefa> = [];
let usuarios: Array<Usuario> = [];

function adicionarTarefa(
  titulo: string,
  descricao: string,
  responsavel: Usuario,
) {
  //usar uuid seria mais facil
  const id = Math.floor(Math.random() * 10000000);

  const tarefa: Tarefa = {
    id,
    titulo,
    descricao,
    responsavel,
    concluida: false,
  };

  tarefas = [...tarefas, tarefa];
}

function adicionarUsuario(nome: string, email: string) {
  const id = Math.floor(Math.random() * 10000000);

  const usuario: Usuario = {
    id,
    nome,
    email,
  };

  usuarios = [...usuarios, usuario];
}

adicionarTarefa("Tare", "dawdadad ", {
  email: "dawdadad@gmail.com",
  id: 1,
  nome: "afaer",
});

adicionarTarefa("Tare", "dawdadad ", {
  email: "dawdadad@gmail.com",
  id: 1,
  nome: "afaer",
});

adicionarTarefa("Tare", "dawdadad ", {
  email: "dawdadad@gmail.com",
  id: 1,
  nome: "afaer",
});

const listarTarefas = () => {
  const listaDeTarefas = tarefas.map(
    ({ id, concluida, descricao, titulo, responsavel }) => ({
      id,
      titulo,
      descricao,
      concluida,
      responsavel: responsavel.nome,
    }),
  );

  console.log(listaDeTarefas);
};

listarTarefas();

adicionarUsuario("Usuario", "daw@gmail.com");
adicionarUsuario("Usuario", "daw@gmail.com");
adicionarUsuario("Usuario", "daw@gmail.com");
adicionarUsuario("Usuario", "daw@gmail.com");

/* console.log("tarefas: ", tarefas);
console.log("usuarios:", usuarios); */
