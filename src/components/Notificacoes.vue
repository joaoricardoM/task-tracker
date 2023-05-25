<template>
  <div class="notificacoes">
    <article
      class="message is-success"
      v-for="notificao in notificacoes"
      :key="notificao.id"
      :class="contexto[notificao.tipo]"
    >
      <div class="message-header">{{ notificao.titulo }}</div>
      <div class="message-body">{{ notificao.texto }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { TipoNotificacao } from "@/interface/INotificacao";
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Notificacoes",
  data() {
    return {
      contexto: {
        [TipoNotificacao.sucesso]: "is-success",
        [TipoNotificacao.atencao]: "is-warning",
        [TipoNotificacao.falha]: "is-danger",
      },
    };
  },
  setup() {
    const store = useStore();
    return {
      notificacoes: computed(() => store.state.notificacao),
    };
  },
});
</script>

<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  width: 300px;
  padding: 8px;
  z-index: 105;
}
</style>
