<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale[101%] transition cursor-pinter"
    >
      <div class="colored-square rounded"></div>
      <p class="font-bold">Example app</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          class="flex items-center gap-2 px-2 py-1 transition hover:bg-neutral-100 rounded cursor-pointer"
          @click="$router.push(item.path)"
        >
          <Icon :name="item.icon" size="20"></Icon>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//define list of menu items
const menuItems = [
  { name: "Dashboard", icon: "ri:dashboard-line", path: "/dashboard" },
  {
    name: "Transactions",
    icon: "mingcute:transfer-line",
    path: "/transactions",
  },
  { name: "Settings", icon: "system-uicons:settings", path: "/settings" },
  { name: "Profile", icon: "ix:user-profile", path: "/profile" },
];
</script>

<style>
.colored-square {
  width: 40px;
  height: 40px;
  background-color: #3498db;
}
</style>
