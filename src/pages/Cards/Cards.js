import React from "react";
import ProfileImg from "../../images/admin.jpg";
import NotificationCart from "../../component/Card/NotificationCart";
import ProfileCard from "../../component/Card/ProfileCard";
import InfoCard from "../../component/Card/InfoCard";
import OverlayCard from "../../component/Card/OverlayCard/OverlayCard";
import NormalCard from "../../component/Card/NormalCard";
import CardImage from "../../component/Card/CardImage";

const Cards = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-4">
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <ProfileCard cardHeader="Profile Card" cardImg={ProfileImg} />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <ProfileCard cardImg={ProfileImg} cardFooter="Profile Card" />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <ProfileCard
            cardHeader="Profile Card"
            icon="fa-solid fa-user"
            cardImg={ProfileImg}
          />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NotificationCart />
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <InfoCard></InfoCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <OverlayCard></OverlayCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="rgba(0,0,0,.125)"
            headerBgColor="#f7f7f7"
            cardTitle="Card with switch"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#878787"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="rgba(0,0,0,.125)"
            headerBgColor="#f7f7f7"
            cardTitle="Card with switch"
            badgeText="Success"
            badgeBg="badge bg-success"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#878787"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="rgba(0,0,0,.125)"
            headerBgColor="#f7f7f7"
            cardTitle="Card with switch"
            badgeText="49"
            badgeBg="badge bg-danger"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#878787"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="#007bff"
            headerBgColor="#f7f7f7"
            cardTitle="Card Outline"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#878787"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="#868e96"
            headerBgColor="#f7f7f7"
            cardTitle="Card Outline"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#878787"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="#28a745"
            headerBgColor="#f7f7f7"
            cardTitle="Card Outline"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#878787"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="#DC3545"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#f8f9fa"
            cardBodyBg="#DC3545"
            footerText="Someone famous in Source Title"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="#ffc107"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#f8f9fa"
            cardBodyBg="#ffc107"
            footerText="Someone famous in Source Title"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="#007bff"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#f8f9fa"
            cardBodyBg="#007bff"
            footerText="Someone famous in Source Title"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="rgba(0,0,0,.125)"
            headerBgColor="#868e96"
            cardTitle="Card Header"
            cardTitleColor="#fff"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#f8f9fa"
            cardBodyBg="#007bff"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="rgba(0,0,0,.125)"
            headerBgColor="#343a40"
            cardTitle="Card Header"
            cardTitleColor="#fff"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#f8f9fa"
            cardBodyBg="#dc3545"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <NormalCard
            cardBorderColor="rgba(0,0,0,.125)"
            headerBgColor="#28a745"
            cardTitle="Card Header"
            cardTitleColor="#fff"
            cardBodyText="Some quick example text to build on the card title and make up the bulk of the card's content."
            cardBodyTextColor="#f8f9fa"
            cardBodyBg="#ffc107"
          ></NormalCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <CardImage></CardImage>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <CardImage></CardImage>
        </div>
        <div className="col-12 col-md-6 col-lg-4 col-xl-4">
          <CardImage></CardImage>
        </div>
      </div>
    </div>
  );
};

export default Cards;
