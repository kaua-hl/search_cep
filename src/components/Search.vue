<template>
  <div v-if="!result" class="container">
    <h1>Pesquisar cep:</h1>
    <form @submit.prevent="startSearch" class="search__form">
      <input name="cep" id="cep" placeholder="Digite o cep" v-model="cep" />
      <button type="submit">Pesquisar</button>
    </form>
  </div>
  <Result v-if="result" @back="resetValues" :result="result" />
</template>

<script lang="ts">
import getApi from "@/services/getApi";
import { defineComponent } from "vue";
import Result from "./Result.vue";

export default defineComponent({
  data() {
    return {
      cep: "",
      result: null,
    };
  },
  methods: {
    async startSearch() {
      const api = await getApi(this.cep);
      this.result = api;
    },
    resetValues() {
      this.cep = "";
      this.result = null;
    },
  },
  components: { Result },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  background: var(--c-1);
  border-radius: 10px;
  min-height: 30vh;
  padding: 30px 35px;
  width: 100%;
}
.search__form {
  display: flex;
  align-items: center;
  margin-top: 30px;
  gap: 8px;
}
.search__form input,
button {
  padding: 12px;
}
.search__form input {
  border: 3px solid var(--c-3);
  border-radius: 3px;
  transition: 0.3s;
}
.search__form input:focus {
  outline: none;
  border-color: var(--c-2);
}
.search__form button {
  max-width: 180px;
  background: var(--c-5);
  border-radius: 3px;
  border: 3px solid transparent;
  cursor: pointer;
  transition: 0.3s;
}
.search__form button:hover {
  background: var(--c-2);
}
</style>
