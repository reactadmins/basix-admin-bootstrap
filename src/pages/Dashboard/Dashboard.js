import React from "react";
import FirstCounter from "../Widgets/components/FirstCounter";

const Dashboard = () => {
  return (
    <div className="container-fluid p-0 p-0">
      <div className="row">
        <div className="col-md-6 col-lg-3 col-xl-3 mb-4">
          <FirstCounter
            counterBg="revenue-bg"
            count={23569}
            dolar="$"
            count_name="Revenue"
            icon="fa-solid fa-cart-shopping"
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3  col-xl-3 mb-4">
          <FirstCounter
            counterBg="sales-increase-bg"
            count={85}
            percentage="%"
            count_name="Sales Increase"
            icon="fa-solid fa-cart-shopping"
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3 mb-4">
          <FirstCounter
            counterBg="total-clients-bg"
            count={6596}
            count_name="Total Clients"
            icon="fa-solid fa-user-group"
          ></FirstCounter>
        </div>
        <div className="col-md-6 col-lg-3 col-xl-3">
          <FirstCounter
            counterBg="users-bg"
            count={1490}
            count_name="New Users"
            icon="fa-solid fa-cart-shopping"
          ></FirstCounter>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
