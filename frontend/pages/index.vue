<template>
  <div class="grid w-full gap-4">
    <header class="flex item-start justify-between">
      <div>
        <p>Hi, welcome back Luca</p>
        <h1>Dashbaord</h1>
      </div>
      <div class="w-[120px] h-[36px] h-12 bg-neutral-200"></div>
    </header>
    <main class="grid gap-4">
      <div>here is a tab: Today, this week, this month, this year</div>
      <div class="flex itemms-center gap-3">
        <div v-for="(item, index) in 3" :key="index">
          <div class="w-[120px] h-[36px] h-12 bg-neutral-200"></div>
        </div>
      </div>
      <section>
        <div class="w-full h-[360px] h-12 bg-neutral-200"></div>
      </section>
    </main>
    <footer>
      <div class="flex items-center justify-around gap-4">
        <div v-for="(item, index) in 3" :key="index">
          <div class="w-[260px] h-[260px] h-12 bg-neutral-200"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
function handleClick() {
  console.log("Button clicked");
}
</script>
