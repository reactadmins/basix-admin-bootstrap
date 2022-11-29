import { EntypoIcon } from "@entypo-icons/react";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../component/Card/Card";

import IconHooks from "../../hooks/IconHooks";

const Entypo = () => {
  const [items] = IconHooks("entypo.json");

  return (
    <div className="container-fluid overflow-hidden p-0">
      <div className="row bg-white px-3 py-4 align-items-center border">
        <div className="col-4">
          <h2 className="fs-3 m-0">{items?.name}</h2>
        </div>
        <div className="col-8">
          <div className="d-flex gap-3 justify-content-cente align-items-center ">
            <Link to="/icons">
              <i className="fa-regular fa-hand-point-left fs-4 text-secondary"></i>
            </Link>
            <div className="col-md-4">
              <div className="form-group ">
                <form action="" className="d-flex gap-2">
                  <input
                    type="text"
                    className="form-control"
                    id="SearchIcon"
                    placeholder="Search Icon"
                    required
                  />
                  <button type="submit" className="btn btn-success">
                    <i className="fa fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Card
          titleCode={
            <>
              <strong className="fs-6">{items?.lists?.mainicons?.name}</strong>
            </>
          }
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.mainicons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <EntypoIcon size={30} color="black" icon={`${icons}`} />
                      <span className="mt-2">{icons}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        ></Card>
      </div>
      <div className="mt-4">
        <Card
          titleCode={
            <>
              <strong className="fs-6">
                {items?.lists?.socialicons?.name}
              </strong>
            </>
          }
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.socialicons?.icons.map((icon, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <EntypoIcon size={30} color="black" icon={`${icon}`} />
                      <span className="mt-2">{icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        ></Card>
      </div>
    </div>
  );
};

export default Entypo;
