// import React from "react";
import "./pie.css";
import { MdKeyboardArrowRight } from "react-icons/md";
const PieCharts = () => {
  return (
    <div className="wrapper">
      <div className="chart-container1">
        <div className="chart1"></div>
        <div className="center-text1">75%</div>
      </div>
      <div className="details">
        <span>75% about graph</span>
        <span>About Graph</span>
        <span className="seeDeatils">
          See All Details
          <MdKeyboardArrowRight />
        </span>
      </div>
    </div>
  );
};

export default PieCharts;
