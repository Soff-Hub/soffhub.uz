import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import GetData from "../../repository/getData-repository";

const Footer = () => {
  const { t } = useTranslation();

  const [social_links, setSocial_links] = useState([]);

  const getSocial_links = async () => {
    const servicesPromise = await GetData.getPromise("social_link/", "en");
    if (servicesPromise) {
      setSocial_links(servicesPromise.data.results);
    }
  };

  useEffect(() => {
    getSocial_links();
  }, []);

  // console.log("links", social_links);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-1 bg-gray-850 border-gray-800">
            <div className="row">
              <div className="col-lg-8 mb-30">
                <Link
                  className="wow animate__animated animate__fadeInUp"
                  href="/"
                >
                  <img
                    src="/assets/imgs/page/about/soffhub-removebg-preview.png"
                    width="150px"
                    alt="Soff white logo"
                  />
                </Link>
                <p className="mb-20 mt-20 text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                  {t("F_desc")}
                </p>
                <h6 className="color-white mb-5 wow animate__animated animate__fadeInUp">
                  {t("F_address")}
                </h6>
                <p className="text-sm color-gray-500 wow animate__animated animate__fadeInUp">
                  {t("F_address_uzb")} <br />
                  {t("F_address_full")}
                </p>
              </div>
              <div className="col-lg-4 text-cenetr   mb-30">
                <h6 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                  {t("F_categories")}
                </h6>
                <div className="row">
                  <div className="col-6">
                    <ul className="menu-footer">
                      <li className="wow animate__animated animate__fadeInUp">
                        <Link className="color-gray-500" href="/about">
                          {t("N_about")}
                        </Link>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <Link className="color-gray-500" href="/services">
                          {t("N_services")}
                        </Link>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <Link className="color-gray-500" href="/portfolio">
                          {t("N_portfolio")}
                        </Link>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="menu-footer" >
                    <li className="wow animate__animated animate__fadeInUp">
                        <Link className="color-gray-500" href="/vacancies">
                          {t("N_vacancies")}
                        </Link>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <Link className="color-gray-500" href="/blog">
                          {t("N_blog")}
                        </Link>
                      </li>
                      <li className="wow animate__animated animate__fadeInUp">
                        <Link className="color-gray-500" href="/contact">
                          {t("N_contact")}
                        </Link>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4 mb-30">
                <h4 className="text-lg mb-30 color-white wow animate__animated animate__fadeInUp">
                  {t("F_contact")}
                </h4>

                <div className="form-newsletters mt-15 wow animate__animated animate__fadeInUp">
                  <form action="#">
                    <div className="form-group">
                      <input
                        className="input-name border-gray-500"
                        type="text"
                        placeholder={t("F_placholder_name")}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="input-email border-gray-500"
                        type="number"
                        placeholder={t("F_placholder_number")}
                      />
                    </div>
                    <div className="form-group mt-20">
                      <button className="btn btn-linear hover-up">
                        {t("F_subscribe")}
                        <i className="fi-rr-arrow-small-right" />
                      </button>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>


            <div className="footer-bottom border-gray-800">
              <div className="row">
                <div className="col-lg-12 text-center text-lg-end">
                  <div className="box-socials">
                    {social_links.length > 0 &&
                      social_links.map((item, i) => {
                        return (
                          <div
                            key={item.id}
                            className="d-inline-block mr-30 wow animate__animated animate__fadeIn"
                            data-wow-delay=".0s"
                          >
                            <Link
                              target="blank"
                              className={`d-felx align-content-center color-gray-500`}
                              href={`${item.url}`}
                            >
                              <i className={`${item.icon} icon-socials color-gray-500`}></i>
                             
                            <p> {item.name}</p>
                            </Link>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
