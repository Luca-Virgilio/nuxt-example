<template>
  <div class="grid w-full gap-4">
    <header class="flex item-start justify-between">
      <div>
        <p>Hi, welcome back Luca</p>
        <h1>Dashbaord</h1>
      </div>
      <ProductNew></ProductNew>
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
      <div class="grid lg:grid-cols-3 gap-4">
        <CardSale
          v-for="(item, index) in cards"
          :key="index"
          :cardDetail="item"
        >
        </CardSale>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, resolveComponent, onMounted } from "vue";
import type { Ref } from "vue";
import type { CategoryType } from "../components/Chart.vue";
import type { CardDetail } from "../components/CardSale.vue";

const cTab: Ref<CategoryType> = ref("today");

interface TabListType {
  name: string;
  value: string;
}

const tabList: TabListType[] = [
  { name: "Today", value: "today" },
  { name: "This week", value: "week" },
  { name: "This month", value: "month" },
  { name: "This year", value: "year" },
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

//cards
const cards: CardDetail[] = [
  {
    title: "Total Revenue",
    progression: 12,
    description: "Revenue from march 2024",
    amount: 30000,
    label: "View sales",
    icon: "solar:ticket-sale-outline",
  },
  {
    title: "Refunds",
    progression: 20,
    description: "refund since the beginning of the year",
    amount: 1200,
    label: "View refunds",
    icon: "heroicons-outline:receipt-refund",
  },
  {
    title: "Payouts",
    progression: 33,
    description: "Payouts of this week",
    amount: 899,
    label: "View payouts",
    icon: "tabler:zoom-money",
  },
];
</script>
