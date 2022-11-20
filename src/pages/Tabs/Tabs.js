import React from "react";
import Tab from "../../component/Tab/Tab";

const Tabs = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="bg-white">
            <Tab
              tabData={[
                {
                  id: 1,
                  title: "Home",
                },
                {
                  id: 2,
                  title: "Profile",
                },
                {
                  id: 3,
                  title: "Messages",
                },
              ]}
              titleListStyle="nav nav-tabs"
              tabPageStyle="border-top"
            ></Tab>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="bg-white">
            <Tab
              tabData={[
                {
                  id: 1,
                  icon: "fa fa-home",
                },
                {
                  id: 2,
                  icon: "fa-sharp fa-solid fa-user",
                },
                {
                  id: 3,
                  icon: "fa fa-comments",
                },
              ]}
              titleListStyle="nav nav-tabs"
              tabPageStyle="border-top"
            ></Tab>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="bg-white">
            <Tab
              tabData={[
                {
                  id: 1,
                  title: "Home",
                  icon: "fa fa-home",
                },
                {
                  id: 2,
                  title: "Profile",
                  icon: "fa-sharp fa-solid fa-user",
                },
                {
                  id: 3,
                  title: "Messages",
                  icon: "fa fa-comments",
                },
              ]}
              titleListStyle="nav nav-tabs"
              tabPageStyle="border-top"
            ></Tab>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="bg-white">
            <Tab
              tabData={[
                {
                  id: 1,
                  title: "Home",
                  icon: "fa fa-home",
                },
                {
                  id: 2,
                  title: "Profile",
                  icon: "fa-sharp fa-solid fa-user",
                },
                {
                  id: 3,
                  title: "Messages",
                  icon: "fa fa-comments",
                },
              ]}
              tablistStyle="d-flex"
              titleListStyle="p-0 mt-3"
              tabPageStyle="border-start"
            ></Tab>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
