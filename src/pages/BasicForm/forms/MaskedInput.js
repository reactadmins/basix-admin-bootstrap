import React from "react";

const MaskedInput = ({ title = "", icon = "", textMuted = "" }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor="" className="mb-2">
        {title}
      </label>
      <div className="input-group">
        <span className="input-group-text" id="inputGroupPrepend2">
          <i style={{ color: "#495057" }} className={`${icon}`}></i>
        </span>
        <input
          type="text"
          className="form-control"
          id="validationDefaultUsername"
          aria-describedby="inputGroupPrepend2"
          required
        />
      </div>
      <small style={{ marginTop: "4px", fontSize: "14px", color: "#868e96" }}>
        {textMuted}
      </small>
    </div>
  );
};

export default MaskedInput;
