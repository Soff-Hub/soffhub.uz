import Head from "next/head";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AboutHeader from "../components/elements/about-header";
import FullscreenImage from "../components/slider/carousel-full-screen";
import Team from "../components/elements/team";

export default function Home() {
  const { t } = useTranslation();
  const [gallery, setGalley] = useState([]);

  const data = [
    {
      image: "/assets/imgs/page/about/soff - japan - 4-min.png",
    },
    {
      image: "/assets/imgs/page/about/soff - japan - 5-min.png",
    },
    {
      image: "/assets/imgs/page/about/soff - japan - 2-min.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Soff Hub | {t("A_about")}</title>
      </Head>
      <Layout>
        <AboutHeader />

        <div className="cover-home1 " style={{ position: "relative" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 mt-50">
                <Team />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-12 col-lg-12">
                <div className="banner">
                  <div className="row mt-100">
                    {gallery &&
                      data.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center my-2"
                          >
                            <FullscreenImage src={item.image} />
                          </div>
                        );
                      })}
                  </div>
                </div>

                <div className="text-center mt-70 "></div>

                <div className="row align-items-end mt-30">
                  <div className="col-lg-9 wow animate__animated animate__fadeIn">
                    <h3 className="color-linear">{t("A_partners")}</h3>
                  </div>
                  <div
                    className="col-lg-3 text-lg-end mt-15 hover-up wow animate__animated animate__fadeIn"
                    data-wow-delay="0.2s"
                  ></div>
                </div>
                <div className="list-logos mt-50 mb-30">
                  <div className="container">
                    <div className="row">
                      <div className="swiper-container swiper-group-1">
                        <div className="swiper-wrapper wow animate__animated animate__fadeIn">
                          <Brand />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
