<template>
  <div>
    <header
      class="flex items-center gap-2 p-4 hover:scale[101%] transition cursor-pinter"
    >
      <Logo></Logo>
      <p class="font-bold text-black">Example app</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink
          :to="item.path"
          v-for="(item, index) in menuItems"
          :key="index"
          class="flex items-center gap-2 px-2 py-1 transition hover:bg-neutral-100 rounded cursor-pointer"
          @click="handleRouteChange(item.path)"
        >
          <Icon :name="item.icon" size="20"></Icon>
          <span>{{ item.name }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["changeRoute"]);

//define list of menu items
const menuItems = [
  { name: "Dashboard", icon: "ri:dashboard-line", path: "/" },
  {
    name: "Transactions",
    icon: "mingcute:transfer-line",
    path: "/transactions",
  },
  { name: "Settings", icon: "lucide:settings", path: "/settings" },
  { name: "Profile", icon: "ix:user-profile", path: "/profile" },
];

const handleRouteChange = (path: string) => {
  setTimeout(() => {
    emit("changeRoute", path);
  }, 200);
};
</script>

<style></style>
