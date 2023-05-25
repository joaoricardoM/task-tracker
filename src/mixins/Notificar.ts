import { TipoNotificacao } from "@/interface/INotificacao";
import { NOTIFICAR } from "@/store/mutations";
import { store } from "@/store";

export const notificacaoMixin = {
  methods: {
    notificar(tipo: TipoNotificacao, titulo: string, texto: string): void {
      store.commit(NOTIFICAR, {
        titulo,
        texto,
        tipo,
      });
    },
  },
};
