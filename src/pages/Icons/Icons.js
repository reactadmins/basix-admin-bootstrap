import { Icon } from "@iconify/react";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../component/Card/Card";
import Iconviewer from "../../component/Iconviewer/Iconviewer";

const Icons = () => {
  const [entypo, setEntypo] = useState([]);
  const [fontAwesome, setFontAwesome] = useState([]);

  useEffect(() => {
    fetch("entypo.json")
      .then((res) => res.json())
      .then((data) => setEntypo(data));
  }, []);
  useEffect(() => {
    fetch("font-awesome.json")
      .then((res) => res.json())
      .then((data) => setFontAwesome(data));
  }, []);

  const entypoIcons = entypo?.lists?.mainicons?.icons.slice(0, 18);
  const fontAwesomeIcons = fontAwesome?.lists?.applications?.icons.slice(0, 18);

  return (
    <>
      <Card
        cardHeader={
          <>
            <strong className="fs-6">Icons</strong>
          </>
        }
        cardBodyBg="bg-white"
        cardBody={
          <>
            <div className="container-fluid p-0">
              <div className="row gy-4 p-1">
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <Iconviewer
                    iconList="brandico.json"
                    iconName="brandico"
                    pageName="/brandico"
                  />
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div
                    className="position-relative"
                    style={{ backgroundColor: "#EEEEEE", padding: "30px" }}
                  >
                    <div className="row gy-5">
                      {entypoIcons?.map((icon) => (
                        <div className="col-2 p-0">
                          <div className="d-flex justify-content-center align-items-center">
                            <Icon
                              style={{ fontSize: ".85rem", cursor: "pointer" }}
                              icon={`entypo-${icon}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="w-100 position-absolute d-flex justify-content-center align-items-center"
                      style={{ top: "0", left: "0", bottom: "0" }}
                    >
                      <Link to="/entypo" className="btn btn-primary px-5">
                        {entypo?.name}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <div
                    className="position-relative"
                    style={{ backgroundColor: "#EEEEEE", padding: "30px" }}
                  >
                    <div className="row gy-5">
                      {fontAwesomeIcons?.map((icon) => (
                        <div className="col-2 p-0">
                          <div className="d-flex justify-content-center align-items-center">
                            <i className={`fas fa-${icon}`}></i>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="w-100 position-absolute d-flex justify-content-center align-items-center"
                      style={{ top: "0", left: "0", bottom: "0" }}
                    >
                      <Link to="/fontawesome" className="btn btn-primary px-5">
                        {fontAwesome?.name}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <Iconviewer
                    iconList="fontelico.json"
                    iconName="fontelico"
                    pageName="/fontelico"
                  />
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <Iconviewer
                    iconList="glyphicons.json"
                    iconName="glyphicon  glyphicon"
                    pageName="/fontelico"
                  />
                  <Icon
                    style={{ fontSize: ".85rem", cursor: "pointer" }}
                    icon="glyphicon:search"
                  />
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6">
                  <Iconviewer
                    iconList="glyphicons.json"
                    iconName="glyphicon  glyphicon"
                    pageName="/fontelico"
                  />
                  <Icon icon="Maki maki:aboveground-rail" />
                </div>
              </div>
            </div>
          </>
        }
      ></Card>
    </>
  );
};

export default Icons;
