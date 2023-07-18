import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";
import data from "../util/blogData";
import PortfolioFilter from "../components/elements/PortfolioFilter";
import AboutHeader from "../components/elements/about-header";

export default function Home() {
  const { t } = useTranslation();


  return (
    <>
      <Head>
        <title>Soff Hub</title>
      </Head>
      <Layout>
        <div className="cover-home1">
          <div className="container">
            <div className="row">
              {/* <div className="col-xl-1" /> */}
              <div className="col-xl-12 col-lg-12">
                <div className="banner mb-5">
                  <div className="row mb-5 align-items-end">
                    <div className="col-xl-5 col-lg-5  col-md-5 d-flex justify-content-center  col-sm-12 col-xs-12  pt-50 text-center">
                      <h3
                        style={{ maxWidth: "600px" }}
                        className=" text-center header--title  color-gray-50  color-linear mt-20 mb-20 wow animate__animated animate__fadeInUp"
                      >
                        {t("H_title")}
                      </h3>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 text-center mb-5">
                      <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                        <img
                          src="/assets/imgs/page/about/soffhub-removebg-preview.png"
                          alt="soff banner image"
                          className="mb-70 mt-sm-5 soff-img-header"
                        />
                        <div className="pattern-1">
                          <img
                            src="assets/imgs/page/home/soff study logo.png"
                            alt="Genz"
                          />
                        </div>
                        <div className="pattern-2">
                          <img
                            src="assets/imgs/template/pattern-2.svg"
                            alt="Genz"
                          />
                        </div>
                        <div className="pattern-3">
                          <img
                            src="assets/imgs/template/pattern-3.svg"
                            alt="Genz"
                          />
                        </div>
                        <div className="pattern-4">
                          <img
                            src="assets/imgs/template/pattern-4.svg"
                            alt="Genz"
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
                            <Link href="">
                              <img
                                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png"
                                alt="Genz"
                              />
                            </Link>
                          </div>
                          <div className="card-info">
                            <Link className="color-gray-500" href="">
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
                            <Link href="">
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
                              Vue/Nuxt.js
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
                {/* about */}
                {/* <div className="row align-items-end">
                  <div className="col-lg-6 text-center ">
                    <div className="banner-img position-relative wow animate__animated animate__fadeIn">
                      <div className="row mb-70">
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 ">
                          <img
                            className="about-img hover-up  wow animate__animated animate__fadeIn "
                            src="assets/imgs/page/about/soff - japan - 1.png"
                            alt="soff"
                          />
                          <p className="color-white soffhub-text text-base mt-50 text-start">
                            Soff hub
                          </p>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 ">
                          <img
                            className="about-img hover-up mt-70  wow animate__animated animate__fadeIn"
                            src="assets/imgs/page/about/soff - japan - 2.png"
                            alt="soff"
                          />
                        </div>
                      </div>
                      <div className="pattern-1">
                        <img
                          src="assets/imgs/template/pattern-1.svg"
                          alt="Genz"
                        />
                      </div>
                      <div className="pattern-2">
                        <img
                          src="assets/imgs/template/pattern-2.svg"
                          alt="Genz"
                        />
                      </div>
                      <div className="pattern-3">
                        <img
                          src="assets/imgs/template/pattern-3.svg"
                          alt="Genz"
                        />
                      </div>
                      <div className="pattern-4">
                        <img
                          src="assets/imgs/template/pattern-4.svg"
                          alt="Genz"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-100 text-center">
                    <h3 className="text-center mb-50 color-linear">{t("A_about")}</h3>
                    <p
                      style={{ maxWidth: "400px" }}
                      className="text-base color-white text-center d-inline-block mb-20 wow animate__animated animate__fadeInUp"
                    >
                      {" "}
                      {t("A_desc")}
                    </p>
                  </div>
                </div> */}

              

              </div>
            </div>
          </div>
        </div>

     <AboutHeader/>


        <div className="cover-hover1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="row mt-70  wow animate__animated animate__fadeIn hover-up">
                  <h2 className="color-linear d-inline-block mb-10">
                    {t("I_portfolio")}
                  </h2>

                  {/* Portfolio componenta */}
                  <PortfolioFilter />

                  <div className="col-lg-12"></div>
                </div>
                {/* sevices */}
                <div className="row mt-70 mb-50 border-gray-800  ">
                  <h2 className="typewrite color-linear mb-50">
                    {t("I_our_services")}
                  </h2>
                  <div className="row mt-50 mb-10">
                    {data.map((item, i) => (
                      <div
                        className="col-lg-6 col-md-6 col-sm-12 col-xs-12 "
                        key={i}
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
                              <i class={`${item.iconClass}`}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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