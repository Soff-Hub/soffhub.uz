import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import getDataRepository from "../../repository/getData-repository";
import { useDispatch, useSelector } from "react-redux";
import { setLanguageData } from "../../store/translationSlice";


const Header = ({ handleOpen, handleRemove, openClass }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const [servicesApi, setServicesApi] = useState([]);

  const languageData = useSelector((state) => state.translations.data);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    if (language == "en") {
      dispatch(setLanguageData("en"));
    } else if (language == "uz") {
      dispatch(setLanguageData("uz"));
    }
  };

  const getServices = async () => {
    const servicesPromise = await getDataRepository.getPromise(
      "service/",
      `${languageData.language}`
    );
    if (servicesPromise) {
      setServicesApi(servicesPromise.data.results);
    }
  };

  useEffect(() => {
    getServices();
  }, [languageData.language]);

  const [scroll, setScroll] = useState(0);
  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const [coloring1Usestate, setcoloring1Usestate] = useState("color-gray-500");
  const [coloring2Usestate, setcoloring2Usestate] = useState("color-gray-500");
  const [coloring3Usestate, setcoloring3Usestate] = useState("color-gray-500");
  const [coloring4Usestate, setcoloring4Usestate] = useState("color-gray-500");
  const [coloring5Usestate, setcoloring5Usestate] = useState("color-gray-500");
  const [coloring6Usestate, setcoloring6Usestate] = useState("color-gray-500");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);

  function coloring1(params) {
    setcoloring1Usestate("active color-linear");
    setcoloring2Usestate("color-gray-500");
    setcoloring3Usestate("color-gray-500");
    setcoloring4Usestate("color-gray-500");
    setcoloring5Usestate("color-gray-500");
    setcoloring6Usestate("color-gray-500");
  }
  function coloring2(params) {
    setcoloring1Usestate("color-gray-500");
    setcoloring2Usestate("active  color-linear");
    setcoloring3Usestate("color-gray-500");
    setcoloring4Usestate("color-gray-500");
    setcoloring5Usestate("color-gray-500");
    setcoloring6Usestate("color-gray-500");
  }
  function coloring3(params) {
    setcoloring1Usestate("color-gray-500");
    setcoloring2Usestate("color-gray-500");
    setcoloring3Usestate("active  color-linear");
    setcoloring4Usestate("color-gray-500");
    setcoloring5Usestate("color-gray-500");
    setcoloring6Usestate("color-gray-500");
  }
  function coloring4(params) {
    setcoloring1Usestate("color-gray-500");
    setcoloring2Usestate("color-gray-500");
    setcoloring3Usestate("color-gray-500");
    setcoloring4Usestate("active  color-linear");
    setcoloring5Usestate("color-gray-500");
    setcoloring6Usestate("color-gray-500");
  }
  function coloring2(params) {
    setcoloring1Usestate("color-gray-500");
    setcoloring2Usestate("color-gray-500");
    setcoloring3Usestate("color-gray-500");
    setcoloring4Usestate("color-gray-500");
    setcoloring2Usestate("active  color-linear");
    setcoloring6Usestate("color-gray-500");
  }

  function coloring3(params) {}
  function coloring4(params) {}
  function coloring5(params) {}
  function coloring6(params) {}
  console.log("header services", servicesApi);

  return (
    <div className="position-relative">
      <header
        className={
          scroll
            ? "header sticky-bar bg-gray-900 stick"
            : "header sticky-bar bg-gray-900"
        }
      >
        <div className="container ">
          <div className="main-header services-header-parent-relative ">
            <div className="header-logo text-center">
              <Link className="d-flex justify-content-center" href="/">
                <img
                  width="130px"
                  height="29px"
                  className="d-inline-block "
                  alt="logo"
                  src="/assets/imgs/page/about/soffhub-removebg-preview.png"
                />
              </Link>
            </div>
            <div style={{ left: "-20px" }} className="header-nav ">
              <nav className="nav-main-menu d-none d-xl-block">
                <ul className="main-menu">
                  <li onClick={coloring1}>
                    <Link
                      className={`${coloring1Usestate} ${
                        router.asPath === "/about" ? "color-linear" : "reset"
                      }`}
                      href="/about"
                    >
                      {t("N_about")}
                    </Link>
                  </li>
                  <li
                    onClick={coloring2}
                    className="services-header d-inline position-static"
                  >
                    <Link
                      className={`${coloring2Usestate} ${
                        router.asPath === "/services" ? "color-linear" : "reset"
                      }`}
                      href="/services"
                    >
                      {t("N_services")}
                    </Link>

                    <div className="cover-home3 services-hover">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-3 ps-70  d-flex justify-content-center align-content-end">
                            <h3 className="color-linear mt-70">
                              {t("N_services")}
                            </h3>
                          </div>
                          <div className="col-xl-9 col-lg-8">
                            <div className="row">
                              {servicesApi.length > 0 &&
                                servicesApi.map((item, i) => {
                                  return (
                                    <div className="col-4">
                                      <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                        {item.title}
                                      </h5>
                                    </div>
                                  );
                                })}
                              {/* <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  {t("N_Frontend_Development")}
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  {t("N_Backend_Web_Development")}
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  {t("N_CRM_Systems")}
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  {t("N_design")}
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  {t("N_AWS_Serverless")}
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  {t("N_Mobile_apps")}
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  {t("N_Cybersecurity")}
                                </h5>
                              </div>
                              <div className="col-4">
                                <h5 className=" color-white py-3 text-base wow animate__animated animate__fadeIn">
                                  {t("N_Branding")}
                                </h5>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li onClick={coloring3}>
                    <Link
                      className={`${coloring3Usestate} ${
                        router.asPath === "/portfolio"
                          ? "color-linear"
                          : "reset"
                      }`}
                      href="/portfolio"
                    >
                      {t("N_portfolio")}
                    </Link>
                  </li>

                  <li onClick={coloring4}>
                    <Link
                      className={`${coloring4Usestate} ${
                        router.asPath === "/vacancies"
                          ? "color-linear"
                          : "reset"
                      }`}
                      href="/vacancies"
                    >
                      {t("N_vacancies")}
                    </Link>
                  </li>
                  <li onClick={coloring5}>
                    <Link
                      className={`${coloring5Usestate} ${
                        router.asPath === "/blog" ? "color-linear" : "reset"
                      }`}
                      href="/blog"
                    >
                      {t("N_blog")}
                    </Link>
                  </li>
                  <li onClick={coloring6}>
                    <Link
                      className={`${coloring6Usestate} ${
                        router.asPath === "/contact" ? "color-linear" : "reset"
                      }`}
                      href="/contact"
                    >
                      {t("N_contact")}
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                className={`burger-icon burger-icon-white ${
                  openClass && "burger-close"
                }`}
                onClick={() => {
                  handleOpen();
                  handleRemove();
                }}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
            <div className="header-right position-relative d-flex justify-content-end ">
              <p className="tel_nomer color-white">(90) 930-35-54 </p>

              <div>
                <Link
                  href="tel:+998 90 930 35 54 "
                  className="color-white  d-inline-block tel_animatsiya text-center home-contact-fixed tel-icon   d-sm-inline-block  wow animate__animated animate__fadeInUp  typewrite color-linear"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-telephone "
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                  </svg>
                </Link>
              </div>
              <div className="language-div">
                <Link
                  onClick={() => changeLanguage("en")}
                  href="#"
                  className=" color-white text-center home-contact-fixed   d-sm-inline-block  wow animate__animated animate__fadeInUp  typewrite color-linear"
                >
                  <i class="fa-solid fa-earth-americas"></i>
                </Link>

                <div className="language-items">
                  <Link
                    onClick={() => changeLanguage("uz")}
                    href="#"
                    className="color-white text-center home-contact-fixed   d-sm-inline-block  wow animate__animated animate__fadeInUp  typewrite color-linear "
                  >
                    uz
                  </Link>

                  <Link
                    onClick={() => changeLanguage("en")}
                    href="#"
                    className="color-white text-center home-contact-fixed   d-sm-inline-block  wow animate__animated animate__fadeInUp  typewrite color-linear"
                  >
                    en
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
