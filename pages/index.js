import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";
import AboutHeader from "../components/elements/about-header";
import HomePagePortfolio from "../components/elements/homePage-portfolio";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import getDataRepository from "../repository/getData-repository";
import Brand from "../components/slider/Brand";
import Progres from "../components/elements/progres";
import Team from "../components/elements/team";
import Router from "next/router";

export default function Home() {
  const { t } = useTranslation();

  const [servicesApi, setServicesApi] = useState([]);
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

  function handliClickService(id){
    Router.push(`/portfolio?filter=${id}`)
  }

  useEffect(() => {
    getServices();
  }, [select.language]);

  return (
    <>
      <Head>
        <title>Soff Hub</title>
      </Head>
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="banner mb-70 ">
                  <div className="row mb-5 " style={{ minHeight: "300px" }}>
                    <div className="col-xl-5 col-lg-5  col-md-5 d-flex justify-content-center  col-sm-12 col-xs-12  pt-50 text-center align-content-center">
                      <h3 className=" text-center header--title  color-gray-50  color-linear  wow animate__animated animate__fadeInUp">
                        {t("H_title")}
                      </h3>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 text-center mb-5">
                      <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                        <img
                          src="/assets/imgs/page/about/home-page-upg.webp"
                          alt="soff banner image"
                          className="mb-70 mt-sm-5 soff-img-header"
                        />
                        <div className="pattern-1">
                          <img
                            src="assets/imgs/page/home/soff study logo.png"
                            alt="soffhub image"
                          />
                        </div>
                        <div className="pattern-2">
                          <img
                            src="assets/imgs/template/pattern-2.svg"
                            alt="soffhub image"
                          />
                        </div>
                        <div className="pattern-3">
                          <img
                            src="assets/imgs/template/pattern-3.svg"
                            alt="soffhub image"
                          />
                        </div>
                        <div className="pattern-4">
                          <img
                            src="assets/imgs/template/pattern-4.svg"
                            alt="soffhub image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row text-center mt-70  mb-50">
                  {/* yo'nalishlar tillar */}
                  <div className="text-center  mt-50">
                    <ul className="list-tags-col-5 list-tags-col-md-4 col-xl-12 col-lg-6 col-md-6 col-sm-4 col-2  mb-50 text-center d-flex">
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0s"
                        >
                          <div className="card-image">
                            <Link href="#">
                              <img
                                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="#">
                              React.js
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0s"
                        >
                          <div className="card-image">
                            <Link href="#">
                              <img
                                src="https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
                              Next.js
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="card-image">
                            <Link href="">
                              <img
                                src="https://develop365.gitlab.io/nuxtjs-2.8.X-doc/en/logos/nuxt-icon-white.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
                              Vue.js
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="card-image">
                            <Link href="">
                              <img
                                src="https://w7.pngwing.com/pngs/702/915/png-transparent-ruby-on-rails-round-logo-tech-companies-thumbnail.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
                              Rails
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.3s"
                        >
                          <div className="card-image">
                            <Link href="">
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
                              Node.js
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <div className="card-image">
                            <Link href="">
                              <img
                                src="https://pbs.twimg.com/profile_images/1110148780991623201/vlqCsAVP_400x400.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
                              Nest.js
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.0s"
                        >
                          <div className="card-image">
                            <Link href="">
                              <img
                                src="https://e7.pngegg.com/pngimages/969/723/png-clipart-functional-programming-in-python-computer-programming-programming-language-python-programming-practice-workshop-program-logo-text-logo-thumbnail.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
                              Python
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="card-image">
                            <Link href="">
                              <img
                                src="https://seeklogo.com/images/A/azure-sql-database-logo-D7A32C9CD9-seeklogo.com.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
                              SQL
                            </Link>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div
                          className="card-style-2 hover-up hover-neon wow animate__animated animate__fadeInUp"
                          data-wow-delay="0.1s"
                        >
                          <div className="card-image">
                            <Link href="">
                              <img
                                src="https://www.openxcell.com/wp-content/uploads/2021/11/Group-56816.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
                              NoSQL
                            </Link>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Progres />

        <AboutHeader />

        <div className="cover-hover1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="row mt-70  wow animate__animated animate__fadeIn hover-up">
                  {/* team */}
                  <Team />
                </div>
                <div className="row mt-70  wow animate__animated animate__fadeIn hover-up">
                  <h2 className="color-linear d-inline-block mb-2">
                    {t("I_portfolio")}
                  </h2>

                  {/* Portfolio componenta */}
                  <HomePagePortfolio />

                  <div className="col-lg-12"></div>
                </div>
                {/* sevices */}
                <div className="row mt-70 mb-50 border-gray-800 index-service ">
                  <h2 className="typewrite color-linear mb-50">
                    {t("I_our_services")}
                  </h2>
                  <div className="row mb-10 ">
                    {servicesApi.length > 0 &&
                      servicesApi.slice(0, 6).map((item, i) => (
                        <div
                          className="col-lg-6 col-md-6 col-sm-12 col-xs-12 "
                          key={i}
                          style={{cursor: "pointer"}}
                          onClick={() => handliClickService(item.id)}
                        >
                          <div
                            className="services-card card-style-2 d-flex justify-content-between px-3 hover-up hover-neon wow animate__animated animate__fadeInUp"
                            data-wow-delay="0s"
                          >
                            <div className="service-cart__content">
                              <h3 className="color-white mb-15 d-block">
                                {item.title}
                              </h3>
                              <p className="text-base color-gray-700">
                                {item.description}
                              </p>
                            </div>
                            <div className="ms-1">
                              <div className="item-icon bg-gray-950 ">
                                <i class={`${item.icon}`}></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="row mt-50">
                    <h2 className=" color-linear mb-50">{t("A_partners")}</h2>
                    <div className="col">
                      <Brand />
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
