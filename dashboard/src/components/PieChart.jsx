import { Pie, 
  // Bar, Radar, Doughnut 
} from "react-chartjs-2";
// import ChartJs from "chart.js";
import { Chart, ArcElement, Legend, Title, Tooltip } from "chart.js";
import { Box } from "@mui/material";

Chart.register(Tooltip, Legend, ArcElement, Title);

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export default function PieChart() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Pie data={data} />
    </Box>
  );
}
