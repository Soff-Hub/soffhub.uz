import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import getDataRepository from "../repository/getData-repository";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

export default function Home() {
  const { t } = useTranslation();
  const [vacansyData, setVacansyData] = useState();

  const languageData = useSelector((state) => state.translations.data);

  const VacansyData = async () => {
    const promise = await getDataRepository.getPromise(
      "vacancy/",
      languageData.language
    );
    if (promise) {
      setVacansyData(promise.data.results);
    }
  };

  useEffect(() => {
    VacansyData();
  }, []);

  var parse = require("html-react-parser");

  return (
    <>
      <Head>
        <title>Soff Hub | {t("V_vacancies")}</title>
      </Head>
      <Layout>
        <div className="banner banner-home4 bg-gray-850 mb-70">
          <div className="container">
            {vacansyData && vacansyData.length <= 0 ? (
              <div className="row align-items-start">
                <div className="col-xl-12 col-lg-12">
                  <div className="pt-20">
                    <div className="box-banner-4">
                      <div className="banner-info text-start">
                        <span className="text-sm-bold color-gray-600">
                          {t("V_Hello_Everyone")}
                        </span>
                        <h3 className="color-linear d-block mt-10 mb-15">
                          {t("V_no")}
                        </h3>
                        <div className="box-socials justify-content-start">
                          <Link
                            className="bg-gray-800 hover-up"
                            href="https://www.facebook.com/people/Soff-Hub/100094700573775/"
                          >
                            <span className="fb" />
                          </Link>
                          <Link
                            className="bg-gray-800 hover-up"
                            href="https://instagram.com/soffhub_uz"
                          >
                            <span className="inst" />
                          </Link>
                          <Link
                            className="bg-gray-800 hover-up"
                            href="https://www.linkedin.com/company/soffhub/"
                          >
                            <span className="snap" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                {vacansyData &&
                  vacansyData.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="col-xl-12 col-lg-12 mb-70 mt-5 col-md-12"
                      >
                        <div className="vacansy-card p-4 card-style-1 hover-up p-3 hover-neon mt-5 wow animate__animated animate__fadeInUp">
                          <div className="vacansy-card__header">
                            <div className="row">
                              <div className="col-xl-4">
                                <h4 className="color-linear mb-3">
                                  {" "}
                                  {item.title}
                                </h4>
                                <div className="row">
                                  <div className="col-12 pb-2">
                                    <i className="fa-solid fa-calendar-day fa-beat-fade"></i>{" "}
                                    <span className="ms-2">
                                      {" "}
                                      {item.from_day} - {item.to_day}
                                    </span>
                                  </div>
                                  <div className="col-12">
                                    <i className="fa-regular fa-clock fa-spin-pulse"></i>{" "}
                                    <span className="ms-2">
                                      {item.start_time} - {item.end_time}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-8 vacansy-header-right ">
                                <div
                                  className="color-white mt-2"
                                  style={{ color: "#fff" }}
                                >
                                  {" "}
                                  {parse(item?.description)}
                                </div>
                                <Link
                                  className="view-more-vacansy-btn"
                                  href={`vacansy/${item.id}`}
                                >
                                  {t("View_more")}{" "}
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="vacansy-card__main"></div>
                          <div className="vacansy-card__footer"></div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
