import React from "react";
import "./SocialButtons.scss";
import Card from "../../component/Card/Card";

const SocialButtons = () => {
  return (
    <div className="container-flowit">
      <div className="row g-4">
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#f7f7f7"
            headerTitle="Social Buttons"
            headerTitleColot="#343a40"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  (Rounded)
                </small>
              </>
            }
            cardBodyBg="#ddd"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100">
                <a href="#" className="social__button mail">
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="#" className="social__button facebook ">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="social__button linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" className="social__button github">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="social__button codepen">
                  <i className="fa-brands fa-codepen"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#f7f7f7"
            headerTitle="Social Buttons"
            headerTitleColot="#343a40"
            titleCode={
              <>
                <small
                  className="mx-2"
                  style={{ fontSize: "80%", fontWeight: "400" }}
                >
                  (Square)
                </small>
              </>
            }
            cardBodyBg="#ddd"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social-square">
                <div className="social__square_button">
                  <a href="#" className="text-decoration-none">
                    <i className="fa-brands fa-facebook-f fs-4"></i>
                  </a>
                </div>
                <div className="social__square_button">
                  <a href="#" className="text-decoration-none">
                    <i className="fa-brands fa-twitter fs-4 "></i>
                  </a>
                </div>
                <div className="social__square_button">
                  <a href="#" className="text-decoration-none">
                    <i className="fa-brands fa-instagram fs-4 "></i>
                  </a>
                </div>
                <div className="social__square_button">
                  <a href="#" className="text-decoration-none">
                    <i className="fa-brands fa-vimeo-v fs-4 "></i>
                  </a>
                </div>
                <div className="social__square_button">
                  <a href="#" className="text-decoration-none">
                    <i className="fa-brands fa-behance fs-4 "></i>
                  </a>
                </div>
                <div className="social__square_button">
                  <a href="#" className="text-decoration-none">
                    <i className="fa-brands fa-dribbble fs-4"></i>
                  </a>
                </div>
                <div className="social__square_button">
                  <a href="#" className="text-decoration-none">
                    <i className="fa-brands fa-github fs-4 "></i>
                  </a>
                </div>
                <div className="social__square_button">
                  <a href="#" className="text-decoration-none">
                    <i className="fa-brands fa-pied-piper fs-4"></i>
                  </a>
                </div>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#f7f7f7"
            headerTitle="Aeneas Effect"
            headerTitleColot="#343a40"
            cardBodyBg="#ddd"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect aeneas">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#f7f7f7"
            headerTitle="Jaques Effect"
            headerTitleColot="#343a40"
            cardBodyBg="#ddd"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect jaques">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#f7f7f7"
            headerTitle="Egeon Effect"
            headerTitleColot="#343a40"
            cardBodyBg="#ddd"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect egeon">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#f7f7f7"
            headerTitle="Claudio Effect"
            headerTitleColot="#343a40"
            cardBodyBg="#ddd"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect claudio">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#f7f7f7"
            headerTitle="Claudio Effect"
            headerTitleColot="#343a40"
            cardBodyBg="#ddd"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect laertes">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
        <div className="col-md-12 col-lg-6 col-xl-6">
          <Card
            iconName={{
              icons: ["fa fa-cog", "fa fa-angle-down", "fa fa-times"],
            }}
            iconColor="#868e96"
            cardHeaderBg="#f7f7f7"
            headerTitle="Jinae Effect"
            headerTitleColot="#343a40"
            cardBodyBg="#ddd"
            cardBody={
              <div className="d-flex justify-content-center gap-3 w-100 py-2 social_buttons__effect jinae">
                <a href="#" className="text-decoration-none facebook">
                  <i className="fa-brands fa-facebook-f fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none twitter">
                  <i className="fa-brands fa-twitter fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  google">
                  <i className="fa-brands fa-google-plus-g fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  dribbble">
                  <i className="fa-brands fa-dribbble fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none vimeo">
                  <i className="fa-brands fa-vimeo-v fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none  pinterest">
                  <i className="fa-brands fa-pinterest-p fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none instagram">
                  <i className="fa-brands fa-instagram fs-4 text-light"></i>
                </a>
                <a href="#" className="text-decoration-none linkedin">
                  <i className="fa-brands fa-linkedin-in fs-4 text-light"></i>
                </a>
              </div>
            }
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;
