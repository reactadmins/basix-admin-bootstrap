import React from "react";
import { Line } from "peity-react";
import "./cartdatacount.scss";

const CartDataCount = ({ chadtColor = "", countName = "" }) => {
  return (
    <div className="cart-data-count">
      <div className={`d-flex justify-content-between ${chadtColor}`}>
        <div>
          <i
            className="fa fa-caret-up"
            style={{ color: "#4dbd74", fontSize: "14px" }}
          ></i>
          <span className="mx-1" style={{ fontSize: "14px" }}>
            65.79%
          </span>
        </div>
        <Line values={[5, 3, 9, 6, 5, 9, 7, 3, 5, 2]} width={60} height={16} />
      </div>
      <span
        className="text-uppercase"
        style={{ color: "#868e96", fontSize: "14px" }}
      >
        {countName}
      </span>
    </div>
  );
};

export default CartDataCount;
