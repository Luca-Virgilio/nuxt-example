<template>
  <div
    class="m-2 p-2 border rounded items-center flex justify-start gap-2 cursor-pointer hover:bg-neutral-50 transition"
  >
    <div
      class="flex items-center justify-center w-10 h-10 font-bold text-white bg-green-500 rounded-full"
    >
      {{ name[0] }}
    </div>
    <div>
      <p class="m-0 py-2 text-sm font-bold text-black leading-1">{{ name }}</p>
      <p class="m-0 text-xs">{{ role }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const name = ref("Luca V");
const role = ref("Full stack developer");
</script>

<style scoped></style>
