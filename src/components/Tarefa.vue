<template>
  <Box>
    <div class="columns">
      <div class="column is -4">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column is -3">
        {{ tarefa.projeto?.nome || "N/D" }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import Itarefa from "../interface/Itarefa";
import Box from "../components/Box.vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Tarefa",
  components: {
    Cronometro,
    Box,
  },
  props: {
    tarefa: {
      type: Object as PropType<Itarefa>,
      required: true,
    },
  },
});
</script>
