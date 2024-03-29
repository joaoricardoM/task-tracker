export enum TipoNotificacao {
  sucesso,
  falha,
  atencao,
}

export interface INotificacao {
  titulo: string;
  texto: string;
  tipo: TipoNotificacao;
  id: number;
}
