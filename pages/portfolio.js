import React from "react";
import Head from "next/head";
import PortfolioFilter from "../components/elements/PortfolioFilter";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title> Soff Hub | {t("P_portfolio")}</title>
      </Head>
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-12 col-lg-12">
                <div className="text-start mt-70 mb-50">
                  <span className="project-style me-3"></span>{" "}
                  <h3 className="color-linear d-inline-block  animate__animated animate__fadeInUp ">
                    {t("A_projects")}
                  </h3>
                </div>
                <PortfolioFilter col={6} show={6} />

                <div className="list-logos mt-50 mb-30">
                  <div className="container">
                    <div className="row mt-70">
                      <h3 className="color-linear partners-bottom">
                        {t("A_partners")}
                      </h3>
                      <div className="swiper-container swiper-group-1">
                        <Brand />
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
};

export default Portfolio;
