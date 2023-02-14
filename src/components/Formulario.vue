<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="formulario para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <section>
            <strong>{{ tempoEmSegundos }}</strong>
          </section>
          <button class="button" @click="iniciar">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="Finalizar">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioItem",
  data() {
    return {
      tempoEmSegundos: 0,
    };
  },
  methods: {
    iniciar() {
      // inicia a contagem
      setInterval(() => {
        console.log("incrementando o contador");
        this.tempoEmSegundos += 1;
      }, 1000);
    },
    Finalizar() {
      // termina a contagem
      console.log("finalizando");
    },
  },
});
</script>
