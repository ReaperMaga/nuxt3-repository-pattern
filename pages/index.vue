<script setup lang="ts">
import SimpleText from '~/components/SimpleText.vue'

const { $api } = useNuxtApp()

const coffees = await $api.products.getCoffees()
</script>

<template>
  <div class="w-screen h-screen bg-slate-950 flex items-center justify-center flex-col font-jetbrains-mono">
    <SimpleText v-for="coffee in coffees" :key="coffee.id" :text="coffee.title" />
  </div>
</template>

<style>
.font-jetbrains-mono {
  font-family: "JetBrains Mono", monospace;
}
</style>
