import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
function Graph({ labelData, legendData }) {
  console.log(labelData, "labelData");
  const data = {
    labels: labelData,
    datasets: [
      {
        labels: "Poll",
        data: legendData,
        backgroundColor: [
          "#9fff96",
          "#2adcaa",
          "#00b3b6",
          "#2d8bba",
          "#005d92",
          "#41b8d5",
          "#5e9c9d",
          "#004659",
          "#9fff96",
          "#adaf7e",
          "#ffde59",
          "#b5c76b",
          "#74a660",
          "#5cadaf",
          "#005d4a",
        ],
        borderColor: "white",
        borderWidth: 5,
      },
    ],
    hoverOffset: 25,
  };
  var options = {
    plugins: { title: { display: false, text: "Custom Chart Title" } },
  };
  return <Doughnut data={data} options={options}></Doughnut>;
}
export default Graph;
