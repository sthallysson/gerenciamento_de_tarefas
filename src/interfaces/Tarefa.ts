import Usuario from "./Usuario";

interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
  responsavel: Usuario;
}

export default Tarefa;
