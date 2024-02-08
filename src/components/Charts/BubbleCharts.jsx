// import React from "react";
import { FaFilter } from "react-icons/fa";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bubble } from "react-chartjs-2";
import "./bubble.css";

const BubbleCharts = () => {
  ChartJS.register(...registerables);
  const data = {
    datasets: [
      {
        labels: ["asfas"],
        data: [
          {
            x: 20,
            y: 30,
            r: 15,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
          {
            x: 40,
            y: 10,
            r: 10,
          },
        ],
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };
  // const options = {};
  return (
    <div>
      <section className="main_chart">
        <header className="charts">
          <h3>News & Data Flow</h3>
          <div className="box">
            <div className="box_right">
              <span className="item1">5M</span>
              <span className="item2">15M</span>
              <span className="item3">30M</span>
              <span className="item4">1H</span>
              <span className="item5">2H</span>
              <span className="item6">4H</span>
              <span className="item7">All</span>
            </div>
            <button className="filter_class">
              <FaFilter />
              <span>Filter</span>
            </button>
          </div>
        </header>
        <main className="chart">
          <Bubble data={data} className="h-25 w-50" />
        </main>
      </section>
    </div>
  );
};

export default BubbleCharts;
