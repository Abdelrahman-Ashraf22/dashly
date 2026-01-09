import { months } from "../Util/helper";

// The Line chart data
export const lineChartData = {
  labels: months({ count: 12 }),
  datasets: [
    {
      label: "Transactions",
      data: [70, 50, 70, 90, 56, 55, 60, 49, 112, 72, 52, 43],
      fill: false,
      borderColor: "#0288d1",
      tension: 0.1,
    },
  ],
};

// The Pie chart data
export const doughnutChartData = {
  labels: ["Blue", "Purple", "Red"],
  datasets: [
    {
      label: "Transaction Dataset",
      data: [300, 50, 100],
      backgroundColor: ["#42a5f5", "#ce93d8", "#e57373"],
      hoverOffset: 4,
    },
  ],
};
