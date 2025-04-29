<template>
  <div>
    <highchart :options="chartOption"></highchart>
  </div>
</template>

<script setup>
let props = defineProps(["currentCategory", "data"]);
let data = props.data || [];
let currentCategory = props.currentCategory || "Today";
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
      categories: categories.value[currentCategory],
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
        data: data,
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

onMounted(() => {
  generateMonthCategory();
});
</script>

<style></style>
