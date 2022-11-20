import React from "react";
import Card from "../Card/Card";
import img1 from "../../images/avatar/1.jpg";
import img2 from "../../images/avatar/2.jpg";
import img3 from "../../images/avatar/3.jpg";
import img4 from "../../images/avatar/4.jpg";

const Timeline = () => {
  return (
    <div className="overflow-hidden">
      <Card
        iconName={{
          icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
        }}
        iconColor="#868e96"
        cardHeaderBg="#fafafa"
        headerTitle="Timeline"
        titleFontSize=".875em"
        titlefontWeight="600"
        headerTitleColot="#343a40"
        cardBodyBg="bg-light"
        cardBody={
          <div className="timeline w-100" style={{ padding: "5px" }}>
            <div className="d-flex gap-2 mt-xl-3 mb-3">
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
              <div className="border-bottom w-100">
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
            <div className="d-flex gap-2 mb-3">
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
              <div className="border-bottom w-100">
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
            <div className="d-flex gap-2 mb-3">
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
              <div className="border-bottom w-100">
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
            <div className="d-flex gap-2 mb-3">
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
                  className="d-block mb-2"
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
