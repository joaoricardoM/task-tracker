<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// eslint-disable-next-line vue/multi-word-component-names
export default defineComponent({ name: "Box" });
</script>

<style scoped>
.box {
  background: #faf0ca;
}
</style>
