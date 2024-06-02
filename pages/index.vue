<script setup lang="ts">
import SimpleText from '~/components/SimpleText.vue'

const { coffee } = useApi()

const coffees = await coffee.getCoffees()
</script>

<template>
  <div class="w-screen h-screen bg-slate-950 flex items-center justify-center flex-col font-jetbrains-mono">
    <SimpleText v-for="cof in coffees" :key="cof.id" :text="cof.title" />
  </div>
</template>

<style>
.font-jetbrains-mono {
  font-family: "JetBrains Mono", monospace;
}
</style>
