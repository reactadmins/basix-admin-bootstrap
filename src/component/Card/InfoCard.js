import React from "react";
import ProfileImg from "../../images/admin.jpg";

const InfoCard = () => {
  return (
    <div className="card rounded-0">
      <div className="card-body">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <img src={ProfileImg} alt="" className="w-25 rounded-circle" />
          <h2>Kanye West</h2>
          <p className="text-secondary text-center fs-6 px-3">
            Just got a pretty neat project via{" "}
            <a href="#" className="text-decoration-none text-secondary">
              @ooomf
            </a>{" "}
            - Give it a try{" "}
            <a href="#" className="text-decoration-none text-secondary">
              http://t.co/e02DwGEeOJ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
