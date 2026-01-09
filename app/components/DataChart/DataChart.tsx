"use client";
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { darkOptions, lightOptions } from "./Themes";
import { ChartConfiguration } from "chart.js";
import { useColorScheme } from "@mui/material/styles";

Chart.register(...registerables);

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const { mode } = useColorScheme();

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart if it exists
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      // Select theme options based on current mode
      const themeOptions = mode === "dark" ? darkOptions : lightOptions;

      // Create new chart with theme-aware options
      chartInstanceRef.current = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...themeOptions,
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [data, options, props, mode]); // Added mode to dependencies

  return <canvas ref={chartRef} />;
};

export default DataChart;
