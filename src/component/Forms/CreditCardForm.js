import React from "react";

const CreditCardForm = () => {
  return (
    <>
      <div className="card-title mt-4">
        <h3 className="text-center">Pay Invoice</h3>
      </div>
      <hr className="bg-secondary " />
      <form>
        <div className="form-group d-flex justify-content-center gap-2 p-3">
          <a href="#" type="button" className="text-decoration-none">
            <i className="fa-brands fa-cc-visa fs-3 text-black"></i>
          </a>
          <a href="#" type="button" className="text-decoration-none">
            <i className="fa-brands fa-cc-mastercard fs-3 text-black"></i>
          </a>
          <a href="#" type="button" className="text-decoration-none">
            <i className="fa-brands fa-cc-amex fs-3 text-black"></i>
          </a>
          <a href="#" type="button" className="text-decoration-none">
            <i className="fa-brands fa-cc-discover fs-3 text-black"></i>
          </a>
        </div>
        <div className="form-group">
          <label className="form-control-label mb-1">Payment amount</label>
          <input type="number" defaultValue="1000.0" className="form-control" />
        </div>
        <div className="form-group mt-3">
          <label className="form-control-label mb-1">Name on card</label>
          <input
            type="text"
            placeholder="Card name "
            className="form-control"
          />
        </div>
        <div className="form-group mt-3">
          <label className="form-control-label mb-1">Card number</label>
          <input
            type="text"
            placeholder="Card number"
            className="form-control"
          />
        </div>
        <div className="form-group d-flex gap-2  justify-content-between mt-3">
          <dir>
            <label className="form-control-label mb-1">Expiration</label>
            <input type="text" placeholder="MM/YY" className="form-control" />
          </dir>
          <div className="form-group ">
            <label className="form-control-label mb-1">Expiration</label>
            <div className="d-flex expiration-field">
              <input
                type="text"
                className="form-control"
                placeholder="Security code"
              />
              <span className="input-group-text fw-bold">
                <i className="fa fa-question-circle"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <button
            type="submit"
            className="btn btn-lg btn-block btn-info w-100 text-white"
          >
            <i className="fa fa-lock fa-md"></i>
            {"  "}
            <span className="fs-5">Pay $100.00</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default CreditCardForm;
