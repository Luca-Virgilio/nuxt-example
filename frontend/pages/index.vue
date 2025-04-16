<template>
  <div>
    <div>
      <h1 class="text-3xl font-bold underline">Hello world</h1>
    </div>
    <div>
      <Button @click="handleClick">Click me</Button>
    </div>
  </div>
</template>

<script setup>
function handleClick() {
  console.log("Button clicked");
}
</script>
