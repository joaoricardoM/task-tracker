<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <form @submit.prevent="salvar">
      <div class="field">
        <label form="nomeDoProjeto" class="label"> Nome Do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">salvar</button>
      </div>
    </form>
    <table class="table is-fullWidth">
      <thead>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <th>{{ projeto.id }}</th>
          <th>{{ projeto.nome }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ID</td>
          <td>Nome</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import IProjeto from "@/interface/IProjeto";
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projetos",
  data() {
    return {
      nomeDoProjeto: "",
      projetos: [] as IProjeto[],
    };
  },
  methods: {
    salvar() {
      const projeto: IProjeto = {
        nome: this.nomeDoProjeto,
        id: new Date().toISOString(),
      };
      this.projetos.push(projeto);
      this.nomeDoProjeto = "";
    },
  },
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
