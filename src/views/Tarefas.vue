<template>
  <div class="column is-three-quarter conteudo">
    <FormularioItem @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
      <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
      <Box v-if="semTarefas"> Você não está muito produtivo hoje ;( </Box>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormularioItem from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interface/Itarefa";
import Box from "../components/Box.vue";

export default defineComponent({
  name: "App",
  components: {
    FormularioItem,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false,
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
  computed: {
    semTarefas(): boolean {
      return this.tarefas.length == 0;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.modo-escuro {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.conteudo {
  background-color: var(--bg-primary);
}
</style>
