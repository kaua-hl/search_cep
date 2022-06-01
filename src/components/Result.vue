<template>
  <div class="result container">
    <div class="result__title">
      <h2>Sua Pesquisa:</h2>
      <span @click="$emit('back')">Voltar</span>
    </div>
    <ul v-for="(value, key) in result" :key="key">
      <li>
        <b>{{ firstUppercase(key) }}</b
        >: {{ value }};
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Result",
  props: ["result"],
  methods: {
    firstUppercase(value: string): string {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style scoped>
.result__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.result__title span {
  display: block;
  text-decoration: underline;
  cursor: pointer;
}
.result ul {
  margin-top: 12px;
}
</style>
