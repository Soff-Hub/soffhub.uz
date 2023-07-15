import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";
import data from "../util/blogData";
import PortfolioFilter from "../components/elements/PortfolioFilter";

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
              <div className="col-xl-1" />
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
                          width="400px"
                          src="/assets/imgs/page/about/soffhub-removebg-preview.png"
                          alt="soff"
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
                  {/* <div className="col-xl-12 col-lg-6 col-md-6 col-sm-4 col-2"> */}
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
                  {/* </div> */}
                </div>

                <div className="row align-items-end">
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
                </div>

                <div className="row mt-70  wow animate__animated animate__fadeIn hover-up">
                  <h2 className="color-linear d-inline-block mb-10">
                    {t("I_portfolio")}
                  </h2>
                  {/* <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12">
                      <div
                        className="row-card card-image wow animate__animated animate__fadeIn"
                        width="100%"
                      >
                        <div className="portfolio-image middle">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/about/zhontaisolar.png"
                              alt="soff portfolio"
                              
                            />
                          </Link>
                          <div className="portfolio-info card-bg-2">
                            <div className="portfolio-info-bottom">
                              <h4 className="color-white">zhontaisolar.com</h4>
                              <p className="text-sm">Website</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 port-media-card col-xs-12 ">
                      <div
                        className="row-card  card-image wow animate__animated animate__fadeIn"
                        width="100%"
                      >
                        <div className="portfolio-image">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/portfolio/kvant.jpg"
                              alt="kvant portfolio"
                              height="100%"
                            />
                          </Link>
                          <div className="portfolio-info card-bg-2">
                            <div className="portfolio-info-bottom">
                              <h4 className="color-white">Kvant.uz</h4>
                              <p className="text-sm">Online Store</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="row-card  card-image wow animate__animated animate__fadeIn"
                        width="100%"
                      >
                        <div className="portfolio-image">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/about/boomirang.png"
                              alt="boomerang"
                              height="100%"
                            />
                          </Link>
                          <div className="portfolio-info card-bg-2">
                            <div className="portfolio-info-bottom">
                              <h4 className="color-white">Boomirang</h4>
                              <p className="text-sm">Website</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-8 col-md-12">
                      <div className="row-card">
                        <div className="col-6">
                          <div
                            className="card-image wow animate__animated animate__fadeIn"
                            width="100%"
                          >
                            <div className="portfolio-image middle">
                              <Link href="/single-sidebar">
                                <img
                                  src="assets/imgs/page/about/soff-parwaz-group-com.png"
                                  alt="parwaz portfolio img"
                                  height="100%"
                                />
                              </Link>
                              <div className="portfolio-info card-bg-2">
                                <div className="portfolio-info-bottom">
                                  <h4 className="color-white">
                                    Parwaz-group.com
                                  </h4>
                                  <p className="text-sm">Online Store</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="row-card">
                            <div
                              className="card-image wow animate__animated animate__fadeIn"
                              width="100%"
                            >
                              <div className="portfolio-image">
                                <Link href="/single-sidebar">
                                  <img
                                    src="assets/imgs/page/about/greenbox.jpg"
                                    alt="green box"
                                    height="100%"
                                  />
                                </Link>
                                <div className="portfolio-info card-bg-2">
                                  <div className="portfolio-info-bottom">
                                    <h4 className="color-white">Green box</h4>
                                    <p className="text-sm">Website</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row-card">
                            <div
                              className="card-image wow animate__animated animate__fadeIn"
                              width="100%"
                            >
                              <div className="portfolio-image small-img">
                                <Link href="/single-sidebar">
                                  <img
                                    src="assets/imgs/page/about/all-data.jpg"
                                    alt="all data"
                                    height="100%"
                                  />
                                </Link>
                                <div className="portfolio-info card-bg-2">
                                  <div className="portfolio-info-bottom">
                                    <h4 className="color-white">All data</h4>
                                    <p className="text-sm">Online Store</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div
                        className="row-card card-image wow animate__animated animate__fadeIn"
                        width="100%"
                      >
                        <div className="portfolio-image middle">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/about/emuni.png"
                              alt="Genz"
                            />
                          </Link>
                          <div className="portfolio-info card-bg-2">
                            <div className="portfolio-info-bottom">
                              <h4 className="color-white">Emuni.uz</h4>
                              <p className="text-sm">Website</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}


                  <PortfolioFilter/>


                
                  <div className="col-lg-12">
                    {/* <p className="text-lg color-gray-500">
                      Don't miss the latest trends
                    </p> */}
                    {/* <div className="box-list-posts mt-70">
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-1.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-2.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-3.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-4.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-list-posts wow animate__animated animate__fadeIn">
                        <div className="card-image hover-up">
                          <Link href="/single-sidebar">
                            <img
                              src="assets/imgs/page/homepage1/img-news-5.jpg"
                              alt="Genz"
                            />
                          </Link>
                        </div>
                        <div className="card-info">
                          <Link
                            className="btn btn-tag bg-gray-800 hover-up"
                            href="/blog-archive"
                          >
                            Working Tips
                          </Link>
                          <Link href="/single-sidebar">
                            <h4 className="mt-15 mb-20 color-white">
                              Helpful Tips for Working from Home as a Freelancer
                            </h4>
                          </Link>
                          <p className="color-gray-500">
                            Gosh jaguar ostrich quail one excited dear hello and
                            bound and the and bland moral misheard roadrunner
                            flapped lynx far that and jeepers giggled far and
                            far
                          </p>
                          <div className="row mt-20">
                            <div className="col-7">
                              <Link
                                className="color-gray-700 text-sm mr-15"
                                href="/blog-archive"
                              >
                                # Travel
                              </Link>
                              <Link
                                className="color-gray-700 text-sm"
                                href="/blog-archive"
                              >
                                # Lifestyle
                              </Link>
                            </div>
                            <div className="col-5 text-end">
                              <span className="color-gray-700 text-sm timeread">
                                3 mins read
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {/* <nav className="mb-50">
                      <ul className="pagination">
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".0s"
                        >
                          <Link className="page-link page-prev" href="#">
                            <i className="fi-rr-arrow-small-left" />
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".1s"
                        >
                          <Link className="page-link" href="#">
                            1
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".2s"
                        >
                          <Link className="page-link active" href="#">
                            2
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".3s"
                        >
                          <Link className="page-link" href="#">
                            3
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".4s"
                        >
                          <Link className="page-link" href="#">
                            ...
                          </Link>
                        </li>
                        <li
                          className="page-item wow animate__animated animate__fadeIn"
                          data-wow-delay=".5s"
                        >
                          <Link className="page-link page-next" href="#">
                            <i className="fi-rr-arrow-small-right" />
                          </Link>
                        </li>
                      </ul>
                    </nav> */}
                  </div>
                  
                </div>
                {/* sevices */}
                <div className="row mt-70 mb-50 border-gray-800  ">
                  <h2 className="typewrite color-linear mb-50">
                    {t("I_our_services")}
                  </h2>
                  <div className="row mt-50 mb-10">
                    {data.map((item, i) => (
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 " key={i}>
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
