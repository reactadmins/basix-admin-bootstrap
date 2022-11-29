import React from "react";
import { Link } from "react-router-dom";
import Card from "../../component/Card/Card";
import IconHooks from "../../hooks/IconHooks";

const FontAwesome = () => {
  const [items] = IconHooks("font-awesome.json");
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
              <strong className="fs-6">
                {items?.lists?.applications?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.applications?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.accessibilityicons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.accessibilityicons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
              <strong className="fs-6">{items?.lists?.handicons?.name}</strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.handicons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.transportationicons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.transportationicons?.icons.map(
                  (icons, index) => (
                    <div
                      className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                      key={index}
                    >
                      <div className="icon-wrapper">
                        <i
                          style={{ fontSize: "30px" }}
                          className={`fa fa-${icons}`}
                        ></i>
                        <span className="mt-2">{icons}</span>
                      </div>
                    </div>
                  )
                )}
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
                {items?.lists?.gendericons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.gendericons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
              <strong className="fs-6">{items?.lists?.fileicons?.name}</strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.fileicons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.spinnericons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.spinnericons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.formcontrolicons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.formcontrolicons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.paymenticons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.paymenticons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
              <strong className="fs-6">{items?.lists?.charticons?.name}</strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.charticons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.currencyicons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.currencyicons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.texteditoricons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.texteditoricons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.directionalicons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.directionalicons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.videoplayericons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.videoplayericons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
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
                {items?.lists?.medicalicons?.name}
              </strong>
            </>
          }
          cardBodyBg="bg-white"
          cardBody={
            <>
              <div className="row  m-0">
                {items?.lists?.medicalicons?.icons.map((icons, index) => (
                  <div
                    className="col-6 col-md-4 col-lg-3 col-xl-2 m-0"
                    key={index}
                  >
                    <div className="icon-wrapper">
                      <i
                        style={{ fontSize: "30px" }}
                        className={`fa fa-${icons}`}
                      ></i>
                      <span className="mt-2">{icons}</span>
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

export default FontAwesome;
