// import React from "react";
import "./sidebar.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaWarehouse } from "react-icons/fa";
import { TbScoreboard } from "react-icons/tb";
import { IoIosNotifications } from "react-icons/io";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { useState } from "react";

const SidebarComponent = () => {
  const [color, setcolor] = useState("link1");

  function handleClick(link) {
    setcolor(link);
  }

  return (
    <div>
      <section className="sidebar_container">
        <div className="sidebar_logo">
          <h3>TRADEVERSE</h3>
        </div>
        <div className="sidebar_contain_wrapper">
          <div className="section_first">
            <p>main menu</p>
            <div className="lower">
              <div
                className={color === "link1" ? "links active" : "links"}
                onClick={() => handleClick("link1")}
              >
                <AiOutlineGlobal className="icon" />
                <a href="#1">News Quant</a>
              </div>
              <div
                className={color === "link2" ? "links active" : "links"}
                onClick={() => handleClick("link2")}
              >
                <FaWarehouse className="icon" />
                <a href="#2">Real Economic Indicator</a>
              </div>
              <div
                className={color === "link3" ? "links active" : "links"}
                onClick={() => handleClick("link3")}
              >
                <TbScoreboard className="icon" />
                <a href="#3">One Score</a>
              </div>
              <div
                className={color === "link4" ? "links active" : "links"}
                onClick={() => handleClick("link4")}
              >
                <IoIosNotifications className="icon" />
                <a href="#4">Alert Central</a>
              </div>
              <div
                className={color === "link5" ? "links active" : "links"}
                onClick={() => handleClick("link5")}
              >
                <MdOutlinePermPhoneMsg className="icon" />
                <a href="#5">Customer Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SidebarComponent;
