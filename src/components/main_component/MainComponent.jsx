// import React from "react";
import BubbleCharts from "../Charts/BubbleCharts";
import PieCharts from "../Charts/PieCharts";
import "./main.css";
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

const MainComponent = () => {
  const tableData = [
    {
      id: 1,
      type: "ERU",
      color: "Yellow",
      news: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus",
      score: 1,
      imapact: "neutral",
      probability: "High",
    },
    {
      id: 2,
      type: "INR",
      color: "Blue",
      news: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus",
      score: 1,
      imapact: "High",
      probability: "High",
    },
    {
      id: 3,
      type: "CAD",
      color: "Brown",
      news: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus",
      score: 1,
      imapact: "medium",
      probability: "High",
    },
    {
      id: 4,
      type: "CAD",
      color: "Brown",
      news: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus",
      score: 1,
      imapact: "low",
      probability: "High",
    },
    {
      id: 5,
      type: "ERU",
      color: "green",
      news: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus",
      score: 1,
      imapact: "neutral",
      probability: "High",
    },
  ];
  const listData = [
    {
      id: 1,
      title: "Focus Topic 1",
      score: 1,
    },
    {
      id: 2,
      title: "Focus Topic 2",
      score: 1,
    },
    {
      id: 3,
      title: "Focus Topic 3",
      score: 1,
    },
    {
      id: 4,
      title: "Focus Topic 4",
      score: 1,
    },
    {
      id: 5,
      title: "Focus Topic 5",
      score: 1,
    },
    {
      id: 6,
      title: "Focus Topic 6",
      score: 1,
    },
    {
      id: 7,
      title: "Focus Topic 7",
      score: 1,
    },
    {
      id: 8,
      title: "Focus Topic 8",
      score: 1,
    },
    {
      id: 9,
      title: "Focus Topic 9",
      score: 1,
    },
    {
      id: 10,
      title: "Focus Topic 10",
      score: 1,
    },
  ];
  return (
    <div className="main_container">
      <section className="top_main_container">
        <div className="upper">
          <input
            type="text"
            placeholder="Search your question here or ask TiiA"
          />
          <div className="upper_right">
            <div className="icon">
              <IoIosNotifications />
            </div>
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="userImage"
            />
            <p>username</p>
          </div>
        </div>
        <div className="lower">
          <div className="lower_left">
            <h3>
              <span>Current Licence: </span> &nbsp; &nbsp;USD/CAD AUD/USD
            </h3>
          </div>
          <div className="lower_right">
            <span className="user">Welcome,username</span>
            <span className="welcome_text">Good to see you again!</span>
          </div>
        </div>
      </section>
      <section className="bottom_main_container">
        <div className="bottom_main_left">
          <BubbleCharts />
          <div className="lower_table">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Type</th>
                  <th scope="col">News</th>
                  <th scope="col">Score</th>
                  <th scope="col">Imapact</th>
                  <th scope="col">Probability</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item) => (
                  <tr key={item.id}>
                    <th scope="row" className="d-flex align-items-center gap-2">
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          background: `${item.color}`,
                          borderRadius: 5,
                        }}
                      ></div>
                      {item.type}
                    </th>
                    <td className="news">{item.news}</td>
                    <td>+{item.score}</td>
                    <td>{item.imapact}</td>
                    <td>
                      <button className="probability_button">
                        {item.probability}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bottom_main_right">
          <div className="bottom_upper">
            <span>Average Score</span>
            <PieCharts />
          </div>
          <div className="bottom_lower">
            <div className="list_header mb-2">Top 10 Focus Topics</div>
            <div className="list_content mb-0">
              <ol className="px-2 mb-0">
                {listData.map((item) => (
                  <li
                    key={item.id}
                    className="d-flex align-items-center justify-content-between "
                  >
                    <div className="left">
                      <span>{item.id}. </span>
                      <span>{item.title}</span>
                    </div>
                    <span className="score btn btn-primary py-0">
                      Score{item.score}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <span className="showallBtn text-primary">
              Show All
              <MdKeyboardArrowRight />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainComponent;
