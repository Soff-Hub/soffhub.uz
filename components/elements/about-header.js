import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function AboutHeader() {
  const [text, setText] = useState(1);
  const { t } = useTranslation();
  return (
    <div className="cover-home" style={{ position: "relative", top: "20px" }}>
      <video
        controls=""
        autoplay=""
        loop="true"
        muted="false"
        style={{
          width: "100%",
          height: "550px",
          objectFit: "cover",
          backgroundImage: "cover",
          clipRule: "evenodd",
        }}
        name="media"
        className="about-vedio"
      >
        <source src="/assets/vedio(6.77).mp4" type="video/mp4" />
      </video>


      <div className="about-header">
        <div className="about-text-group">
          {text === 1 ? (
            <div className="about-description">
              <h2 className="text-left mb-50 color-linear">{t("A_about1")}</h2>
              <h5 className=" color-white text-left d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                {t("A_desc1")}
              </h5>
            </div>
          ) : text === 2 ? (
            <div className="about-description">
              <h2 className="text-left mb-50 color-linear">{t("A_about2")}</h2>
              <h5 className=" color-white text-left d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                {t("A_desc2")}
              </h5>
            </div>
          ) : text === 3 ? (
            <div className="about-description">
              <h2 className="text-left mb-50 color-linear">{t("A_about3")}</h2>
              <h5 className=" color-white text-left d-inline-block mb-20 wow animate__animated animate__fadeInUp">
                {t("A_desc3")}
              </h5>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="about-header-button-group">
          <p
            className={` about-header-button-group--button about-header-button-group--button1 ${
              text === 1 ? "active-btnn" : ""
            }`}
            onClick={() => setText(1)}
          >
            {t("A_about1")}
          </p>
          <i class="fa-solid fa-angles-right mt-5 pt-5 icon-rightt"></i>
          <p
            className={`about-header-button-group--button about-header-button-group--button2 ${
              text === 2 ? "active-btnn" : ""
            } `}
            onClick={() => setText(2)}
          >
            {t("A_about2")}
          </p>
          <p
            className={`about-header-button-group--button about-header-button-group--button3 ${
              text === 3 ? "active-btnn" : ""
            } `}
            onClick={() => setText(3)}
          >
            {t("A_about3")}
          </p>
        </div>
      </div>

            <div className="black-background" ></div>
    </div>
  );
}
