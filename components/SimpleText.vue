<script lang="ts" setup>
const props = defineProps<{ text: string }>()
</script>

<template>
  <div class="text-white font-bold text-4xl">
    <p>{{ props.text }}</p>
  </div>
</template>
