import { Pie, 
  // Bar, Radar, Doughnut, PolarArea 
} from "react-chartjs-2";
import {
  Chart,
  registerables
} from "chart.js";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import DataContext from "./dataContext";

Chart.register(...registerables);

export default function PieChart() {
  function getRandomColor() {
    const COLORS = [
      "#4dc9f690",
      "#f6701990",
      "#f5379490",
      "#537bc490",
      "#acc23690",
      "#166a8f90",
      "#00a95090",
      "#58595b90",
      "#8549ba90",
    ];
    // console.log(COLORS[Math.round((Math.random() * 10) % COLORS.length)]);
    return COLORS[Math.round((Math.random() * 10) % COLORS.length)];
  }
  const [data, setData] = useState({
    labels: ["red", "blue", "yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  });
  const values = useContext(DataContext);

  const drawChart = () => {
    let dataValue = {};
    values.forEach((el) => {
      if (el.region !== "")
        dataValue[el.region] = dataValue[el.region]
          ? ++dataValue[el.region]
          : 1;
    });
    console.log(dataValue);

    setData({
      labels: Object.keys(dataValue),
      datasets: [
        {
          label: "My First Dataset",
          data: Object.values(dataValue),
          backgroundColor: [
            "red",
            "green",
            "skyblue",
            "yellow",
            "orange",
            "purple",
            "pink",
            "brown",
            "grey",
            "#E0FFFF",
            "#FAFAD2",
            "#90EE90",
            "#FFB6C1",
            "#FFA07A",
            "#20B2AA",
            "#87CEFA",
            "#778899",
            "#32CD32",
            "#800000",
            "#7B68EE",
            "#48D1CC",
            "#FFE4E1",
            "#FFDEAD",
            "#000080",
            "#FDF5E6",
            "#6B8E23",
            "#FFA500",
            "#FF4500",
            "#DA70D6",
            "#AFEEEE",
            "#CD853F",
            "#800080",
            "#663399",
            "#FF0000",
          ],
          hoverOffset: 1,
        },
      ],
    });
  };
  console.log(data);

  useEffect(() => {
    drawChart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", minWidth:'300px' }}>
      <Pie data={data} />
    </Box>
  );
}
