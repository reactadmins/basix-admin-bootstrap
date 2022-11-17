import React from "react";

const InputGridDevicesForm = () => {
  return (
    <form className="form-horizontal">
      <div className="form-group mb-3">
        <div className="row gy-5">
          <div className="col-4">
            <input type="text" placeholder=".col-4" className="form-control" />
          </div>
          <div className="col-8">
            <input type="text" placeholder=".col-8" className="form-control" />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="row gy-5">
          <div className="col-5">
            <input type="text" placeholder=".col-5" className="form-control" />
          </div>
          <div className="col-7">
            <input type="text" placeholder=".col-7" className="form-control" />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="row gy-5">
          <div className="col-6">
            <input type="text" placeholder=".col-6" className="form-control" />
          </div>
          <div className="col-6">
            <input type="text" placeholder=".col-6" className="form-control" />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="row gy-5">
          <div className="col-7">
            <input type="text" placeholder=".col-7" className="form-control" />
          </div>
          <div className="col-5">
            <input type="text" placeholder=".col-5" className="form-control" />
          </div>
        </div>
      </div>
      <div className="form-group mb-3">
        <div className="row gy-5">
          <div className="col-8">
            <input type="text" placeholder=".col-8" className="form-control" />
          </div>
          <div className="col-4">
            <input type="text" placeholder=".col-4" className="form-control" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputGridDevicesForm;
