<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./pages/Home/Home.vue";

export default defineComponent({
  name: "App",
  components: { Home },
});
</script>

<style>
@import "./assets/css/index.css";

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--c-0);
  height: 100vh;
}
</style>
