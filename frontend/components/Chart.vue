<template>
  <div>
    <highchart :options="chartOption"></highchart>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type {
  Options as HighchartsOptions,
  SeriesLineOptions,
  GradientColorObject,
} from "highcharts";

export type CategoryType = "today" | "week" | "month" | "year";

interface Categories {
  today: string[];
  week: string[];
  month: string[];
  year: string[];
}

interface ChartProps {
  currentCategory: CategoryType;
  data: number[];
}

const props = withDefaults(defineProps<ChartProps>(), {
  currentCategory: "today",
  data: () => [],
});

const categories = ref<Categories>({
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

const chartOption = computed<HighchartsOptions>(() => {
  return {
    chart: {
      type: "line",
      animation: false,
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
      categories: categories.value[props.currentCategory],
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
        type: "line",
        name: "line",
        lineWidth: 4,
        color: {
          linearGradient: {
            x1: 0,
            x2: 1,
            y1: 0,
            y2: 0,
          },
          stops: [
            [0, "rgba(252,176,69,1)"],
            [0.33, "rgba(253,29,29,1)"],
            [0.66, "rgba(131,58,180,1)"],
            [1, "green"],
          ],
        },
        data: props.data,
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
              layout: "horizontal" as const,
              align: "center" as const,
              verticalAlign: "bottom" as const,
            },
          },
        },
      ],
    },
  };
});

onMounted(() => {
  generateMonthCategory();
});
</script>

<style></style>
