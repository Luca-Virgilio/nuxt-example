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
          <highchart :options="chartOption"></highchart>
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
import { defineAsyncComponent } from "vue";

const Today = defineAsyncComponent(
  () => import("../components/Tabs/Today.vue")
);

let cTab = ref("today");
const tabList = [
  { name: "Today", value: "today", component: resolveComponent("Today") },
  { name: "This week", value: "week", component: "<div>This week</div>" },
  { name: "This month", value: "month", component: "<div>This month</div>" },
  { name: "This year", value: "year", component: "<div>This year</div>" },
];

let data: number[] = ref([]);
function generateRandomData(number = 10) {
  let generateRandomData: number[] = [];
  for (let i = 0; i < number; i++) {
    generateRandomData.push(Math.floor(Math.random() * 10000));
  }

  console.log("generateRandomData", generateRandomData);
  data.value = [...generateRandomData];
  return data;
}

function generateMonthCategory() {
  let date = new Date();
  //get the number of days for this month and update categories
  let month = date.getMonth();
  //create day array
  let daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
  let monthArray = [];
  for (let i = 1; i <= daysInMonth; i++) {
    monthArray.push(i.toString());
  }
  //console.log("monthArray", monthArray);
  categories.value.month = monthArray;
}

onMounted(() => {
  generateRandomData(7);
  //get current month
  generateMonthCategory();
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
      generateRandomData(categories.value.month.length);
      break;
    case "year":
      generateRandomData(12);
      break;
    default:
      break;
  }
  currentCategory.value = value;
};

let currentCategory = ref("today");
let categories = ref({
  //every 2h hours
  today: [
    "00:00",
    "02:00",
    "04:00",
    "06:00",
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
  ],
  week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  month: [],
  year: [
    "Jen",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
const chartOption = computed(() => {
  return {
    chart: {
      type: "line",
      animation: {
        enabled: false,
      },
    },
    legend: {},
    title: {
      text: "",
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    xAxis: {
      gridLineColor: "transparent",
      categories: categories.value[currentCategory.value],
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        enableMouseTracking: true,
      },
    },
    series: [
      {
        name: "line",
        lineWidth: "4px",
        color: {
          linearGradient: {},
          stops: [
            [0, "rgba(252,176,69,1)"],
            [0.33, "rgba(253,29,29,1)"],
            [0.66, "rgba(131,58,180,1)"],
            [1, "green"],
          ],
        },
        data: data.value,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
});
</script>
