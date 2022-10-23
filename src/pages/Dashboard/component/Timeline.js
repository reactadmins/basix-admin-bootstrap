import React from "react";
import Card from "../../../component/Card/Card";
import img1 from "../../../images/avatar/1.jpg";
import img2 from "../../../images/avatar/2.jpg";
import img3 from "../../../images/avatar/3.jpg";
import img4 from "../../../images/avatar/4.jpg";

const Timeline = () => {
  return (
    <div>
      <Card
        cardHeader={
          <div className="d-flex justify-content-between">
            <div>
              <strong className="fs-6">Timeline </strong>
            </div>
            <div className="card-actions d-flex gap-3">
              <a href="#" type="button" className="text-secondary">
                <i className="fa fa-cog"></i>
              </a>
              <a href="#" type="button" className="text-secondary">
                <i className="fa fa-angle-down"></i>
              </a>
              <a href="#" type="button" className="text-secondary">
                <i className="fa fa-times"></i>
              </a>
            </div>
          </div>
        }
        cardBodyBg="bg-light"
        cardBody={
          <div className="timeline w-100">
            <div className="d-flex gap-2 mb-2">
              <div>
                <i
                  className="fa-regular fa-file text-white rounded-circle text-center "
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "12px",
                    lineHeight: "30px",
                    backgroundColor: "#5c6bc0",
                  }}
                ></i>
              </div>
              <div className="border-bottom">
                <span style={{ fontSize: "14px", color: "#868e96" }}>
                  <a href="#" className="text-decoration-none mx-1 text-dark">
                    Anthony Marshal
                  </a>
                  added a new file in the project folder
                </span>
                <span
                  className="d-block"
                  style={{
                    fontSize: "12px",
                    margin: "5px 0 15px 0",
                    color: "#868e96",
                  }}
                >
                  5 Minutes ago
                </span>
              </div>
            </div>
            <div className="d-flex gap-2 mb-2">
              <div>
                <i
                  className="fa-solid fa-check text-white rounded-circle text-center "
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "12px",
                    lineHeight: "30px",
                    backgroundColor: "#4dbd74",
                  }}
                ></i>
              </div>
              <div className="border-bottom">
                <span style={{ fontSize: "14px", color: "#868e96" }}>
                  <a href="#" className="text-decoration-none mx-1 text-dark">
                    Maria Monica
                  </a>
                  added a new file in the project folder
                </span>
                <span
                  className="d-block"
                  style={{
                    fontSize: "12px",
                    margin: "5px 0 15px 0",
                    color: "#868e96",
                  }}
                >
                  5 Minutes ago
                </span>
              </div>
            </div>
            <div className="d-flex gap-2 mb-2">
              <div>
                <i
                  className="fa-solid fa-image text-white rounded-circle text-center "
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "12px",
                    lineHeight: "30px",
                    backgroundColor: "#ffa726",
                  }}
                ></i>
              </div>
              <div className="border-bottom">
                <span style={{ fontSize: "14px", color: "#868e96" }}>
                  <a href="#" className="text-decoration-none mx-1 text-dark">
                    Patricia Watkins
                  </a>
                  added 4 more photos to the album
                  <a href="#" className="text-decoration-none mx-1 text-dark">
                    WordPress Meetup
                  </a>
                </span>
                <div className="d-flex gap-2 my-3">
                  <img src={img1} alt="img" style={{ height: "40px" }} />
                  <img src={img2} alt="img" style={{ height: "40px" }} />
                  <img src={img3} alt="img" style={{ height: "40px" }} />
                  <img src={img4} alt="img" style={{ height: "40px" }} />
                </div>
                <span
                  className="d-block"
                  style={{
                    fontSize: "12px",
                    margin: "5px 0 15px 0",
                    color: "#868e96",
                  }}
                >
                  5 Minutes ago
                </span>
              </div>
            </div>
            <div className="d-flex gap-2 mb-2">
              <div>
                <i
                  className="fa-solid fa-user text-white rounded-circle text-center "
                  style={{
                    width: "30px",
                    height: "30px",
                    fontSize: "12px",
                    lineHeight: "30px",
                    backgroundColor: "#ef5350",
                  }}
                ></i>
              </div>
              <div>
                <span style={{ fontSize: "14px", color: "#868e96" }}>
                  <a href="#" className="text-decoration-none mx-1 text-dark">
                    Tiffany Scott
                  </a>
                  added 3 friends
                </span>
                <div className="d-flex gap-2 my-3">
                  <img src={img1} alt="img" style={{ height: "40px" }} />
                  <img src={img2} alt="img" style={{ height: "40px" }} />
                  <img src={img3} alt="img" style={{ height: "40px" }} />
                </div>
                <span
                  className="d-block"
                  style={{
                    fontSize: "12px",
                    margin: "5px 0 15px 0",
                    color: "#868e96",
                  }}
                >
                  5 Minutes ago
                </span>
              </div>
            </div>
          </div>
        }
      ></Card>
    </div>
  );
};

export default Timeline;
