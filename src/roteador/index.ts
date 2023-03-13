import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Tarefas from "../views/Tarefas.vue";
import Projetos from "../views/Projetos.vue";
import formulario from "../views/Projetos/Formulario.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tarefas,
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: Projetos,
  },
  {
    path: "/projetos/novo",
    name: "Novo Projetos",
    component: formulario,
  },
  {
    path: "/projetos/:id",
    name: "Editar Projetos",
    component: formulario,
    props: true
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
