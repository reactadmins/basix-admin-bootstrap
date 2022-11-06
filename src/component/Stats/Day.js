import React from "react";
import { BarChart, Bar } from "recharts";
import img1 from "../../images/avatar/1.jpg";
import img2 from "../../images/avatar/2.jpg";
import img3 from "../../images/avatar/3.jpg";
import img4 from "../../images/avatar/4.jpg";
import img5 from "../../images/avatar/6.jpg";

const Day = () => {
  const data = [
    {
      name: "Page A",
      uv: 300,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 4000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 6000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 5000,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 7000,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 3000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 4000,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="table-stats p-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col text-center">Numbers</th>
            <th scope="col">Stats</th>
            <th scope="col">State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle">
              <div className="user-img">
                <a href="#">
                  <img src={img1} alt="img" className="rounded-circle" />
                </a>
                <span>Louis Stanley</span>
              </div>
            </td>
            <td className="align-middle">
              <span className="user-count">3765879</span>
            </td>
            <td className="align-middle">
              <BarChart width={60} height={50} data={data}>
                <Bar dataKey="uv" fill="#42A5F5" />
              </BarChart>
            </td>
            <td className="align-middle">
              <i className="fa fa-caret-up" style={{ color: "#4dbd74" }}></i>
              <span
                className="mx-1"
                style={{
                  color: "#343a40",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                54%
              </span>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <div className="user-img">
                <a href="#">
                  <img src={img2} alt="img" className="rounded-circle" />
                </a>
                <span>Gregory Dixon</span>
              </div>
            </td>
            <td className="align-middle">
              <span className="user-count">3765879</span>
            </td>
            <td className="align-middle">
              <BarChart width={60} height={50} data={data}>
                <Bar dataKey="uv" fill="#EF5350" />
              </BarChart>
            </td>
            <td className="align-middle">
              <i className="fa fa-caret-up" style={{ color: "#4dbd74" }}></i>
              <span
                className="mx-1"
                style={{
                  color: "#343a40",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                54%
              </span>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <div className="user-img">
                <a href="#">
                  <img src={img3} alt="img" className="rounded-circle" />
                </a>
                <span>Catherine Flores</span>
              </div>
            </td>
            <td className="align-middle">
              <span className="user-count">3765879</span>
            </td>
            <td className="align-middle">
              <BarChart width={60} height={50} data={data}>
                <Bar dataKey="uv" fill="#66BB6A" />
              </BarChart>
            </td>
            <td className="align-middle">
              <i className="fa fa-caret-up" style={{ color: "#4dbd74" }}></i>
              <span
                className="mx-1"
                style={{
                  color: "#343a40",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                54%
              </span>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <div className="user-img">
                <a href="#">
                  <img src={img4} alt="img" className="rounded-circle" />
                </a>
                <span>Mary Silva</span>
              </div>
            </td>
            <td className="align-middle">
              <span className="user-count">3765879</span>
            </td>
            <td className="align-middle">
              <BarChart width={60} height={50} data={data}>
                <Bar dataKey="uv" fill="#5C6BC0" />
              </BarChart>
            </td>
            <td className="align-middle">
              <i className="fa fa-caret-up" style={{ color: "#4dbd74" }}></i>
              <span
                className="mx-1"
                style={{
                  color: "#343a40",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                54%
              </span>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <div className="user-img">
                <a href="#">
                  <img src={img5} alt="img" className="rounded-circle" />
                </a>
                <span>Johnny Stephens</span>
              </div>
            </td>
            <td className="align-middle">
              <span className="user-count">3765879</span>
            </td>
            <td className="align-middle">
              <BarChart width={60} height={50} data={data}>
                <Bar dataKey="uv" fill="#FFA726" />
              </BarChart>
            </td>
            <td className="align-middle">
              <i className="fa fa-caret-up" style={{ color: "#4dbd74" }}></i>
              <span
                className="mx-1"
                style={{
                  color: "#343a40",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                54%
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Day;
