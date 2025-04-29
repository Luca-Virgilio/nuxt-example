<template>
  <div>
    <div
      class="flex lg:hidden z-50 w-full h-full items-center justify-between p-4"
    >
      <Logo></Logo>
      <Icon
        size="30"
        class="cursor-pointer z-50 left-2 top-2"
        name="solar:hamburger-menu-outline"
        @click="open = true"
      />
      <div
        v-if="open"
        class="fixed bg-white w-full h-full h-screen top-0 left-0 z-[999]"
      >
        <Icon
          size="30"
          class="absolute cursor-pointer z-50 right-4 top-4"
          name="material-symbols:close"
          @click="open = false"
        />
        <SidebarMenu @changeRoute="open = false" />
      </div>
    </div>

    <div
      class="hidden lg:flex w-[250px] h-screen flex flex-col justify-between border-r"
    >
      <SidebarMenu @changeRoute="open = false" />
      <div class="mb-4">
        <UserItem></UserItem>
      </div>
    </div>
  </div>
</template>

<script setup>
const open = ref(true);
</script>
