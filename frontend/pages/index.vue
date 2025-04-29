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
      <Tabs
        default-value="today"
        v-model="cTab"
        @update:modelValue="setCategory"
      >
        <TabsList class="max-w-[400px]">
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
          <Chart
            v-if="data.length > 0"
            :currentCategory="currentCategory"
            :data="data"
          />
        </TabsContent>
      </Tabs>
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
import { defineAsyncComponent, ref, resolveComponent, onMounted } from "vue";
import type { Ref } from "vue";
import type { CategoryType } from "../components/Chart.vue";

const Today = defineAsyncComponent(
  () => import("../components/Tabs/Today.vue")
);

const cTab: Ref<CategoryType> = ref("today");
const tabList = [
  { name: "Today", value: "today", component: resolveComponent("Today") },
  { name: "This week", value: "week", component: "<div>This week</div>" },
  { name: "This month", value: "month", component: "<div>This month</div>" },
  { name: "This year", value: "year", component: "<div>This year</div>" },
];

const data = ref<number[]>([]);
function generateRandomData(number = 10) {
  let generateRandomData: number[] = [];
  for (let i = 0; i < number; i++) {
    generateRandomData.push(Math.floor(Math.random() * 10000));
  }

  //console.log("generateRandomData", generateRandomData);
  data.value = generateRandomData;
  return generateRandomData;
}

onMounted(() => {
  generateRandomData(7);
});

const setCategory = () => {
  let value = cTab.value;
  switch (value) {
    case "today":
      generateRandomData(12);
      break;
    case "week":
      generateRandomData(7);
      break;
    case "month":
      let date = new Date();
      //get the number of days for this month and update categories
      let month = date.getMonth();
      //create day array
      let daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
      generateRandomData(daysInMonth);
      break;
    case "year":
      generateRandomData(12);
      break;
    default:
      break;
  }
  currentCategory.value = value;
};

const currentCategory: Ref<CategoryType> = ref("today");
</script>
