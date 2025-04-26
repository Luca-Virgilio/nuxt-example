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
        <Tabs default-value="today" class="w-[400px]">
          <TabsList>
            <TabsTrigger
              v-for="(item, index) in tabList"
              :key="index"
              :value="item.value"
            >
              {{ item.name }}
            </TabsTrigger>
          </TabsList>
          <TabsContent
            v-for="(item, index) in tabList"
            :key="index"
            :value="item.value"
          >
            {{ item.component }}
          </TabsContent>
        </Tabs>
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

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const Today = defineAsyncComponent(
  () => import("../components/Tabs/Today.vue")
);

const tabList = [
  { name: "Today", value: "today", component: resolveComponent("Today") },
  { name: "This week", value: "week", component: "<div>This week</div>" },
  { name: "This month", value: "month", component: "<div>This month</div>" },
  { name: "This year", value: "year", component: "<div>This year</div>" },
];
</script>
