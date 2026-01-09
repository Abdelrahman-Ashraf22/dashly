export const darkOptions = {
  plugins: {
    legend: {
      labels: {
        color: "#e0e0e0", // Light text for dark mode
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#b0b0b0",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.12)",
      },
    },
    y: {
      ticks: {
        color: "#b0b0b0",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.12)",
      },
    },
  },
};

export const lightOptions = {
  plugins: {
    legend: {
      labels: {
        color: "#1a1a1a", // Dark text for dark mode
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#1a1a1a",
      },
      grid: {
        color: "rgba(0, 0, 0, 0.12)",
      },
    },
    y: {
      ticks: {
        color: "#1a1a1a",
      },
      grid: {
        color: "rgba(0, 0, 0, 0.12)",
      },
    },
  },
};
