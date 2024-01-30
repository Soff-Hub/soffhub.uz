import React, { useEffect, useState } from "react";
import Head from "next/head";
import PortfolioFilter from "../components/elements/PortfolioFilter";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import getDataRepository from "../repository/getData-repository";
import { useRouter } from "next/router";

const Portfolio = () => {
  const { t } = useTranslation();
  const [servicesApi, setServicesApi] = useState([]);
  const Router = useRouter()
  const {filter} = Router.query
  

  const select = useSelector((state) => state.translations.data);

  const getServices = async () => {
    const servicesPromise = await getDataRepository.getPromise(
      "service/",
      `${select.language}`
    );
    if (servicesPromise) {
      setServicesApi(servicesPromise.data.results);
    }
  };

  const filterPortfolio = (id) => {
    Router.push(`/portfolio?filter=${id}`)
  }

  useEffect(() => {
    getServices();
  }, [select.language]);
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
                <div className="portfolio-title">
                  <div className="text-start">
                    <span className="project-style me-3"></span>{" "}
                    <h3 className="color-linear d-inline-block  animate__animated animate__fadeInUp ">
                      {t("A_projects")}
                    </h3>
                  </div>

                  <ul>
                    {servicesApi?.map((el) => (
                      <li className={`${Number(filter) === el.id ? "active_service" : ""}`} onClick={() => filterPortfolio(el.id)} >{el.title}</li>
                    ))}
                  </ul>
                </div>
                <PortfolioFilter  col={6} show={6} />

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
