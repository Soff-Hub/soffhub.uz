import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import data from "../../util/blogData";
import PortfolioCarousel from "../../components/slider/portfolio-carousel";
import portfolio from "../../util/portfolio";
import { useTranslation } from "react-i18next";
import BootstrapCarousel from "../../components/slider/carousel-portfolio";
import Carousel from "../../components/slider/carousel-portfolio";
import FullscreenImage from "../../components/slider/carousel-full-screen";
import Header from "../../components/layout/Header";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";

const BlogDetails = () => {
  let Router = useRouter();
  const { t } = useTranslation();

  const [blogPost, setBlogPost] = useState(null);

  const { id } = Router.query;

  const languageData = useSelector((state) => state.translations.data);

  const idPortfolioData = async (ID) => {
    const idPortfolioPromise = await getDataRepository.getPromise(
      `portfolio/${ID}`,
      `${languageData.language}`
    );
    if (idPortfolioPromise) {
      setBlogPost(idPortfolioPromise.data);
    }
  };

  useEffect(() => {
    if (id) {
      idPortfolioData(id);
    }
  }, [id, languageData.language]);

  console.log("id", id);
  return (
    <>
      <Layout>
        {blogPost && (
          <>
            <div className="cover-home3 portfolioId">
              <div className="container">
                <div className="row">
                  <div className="col-xl-1 col-sm-1 col-xs-1" />
                  <div className="col-xl-12 col-lg-12">
                    <div className="pt-30  pb-20">
                      <div className="box-breadcrumbs">
                        <ul className="breadcrumb">
                          <li>
                            <Link className="home" href="/">
                              {t("Id_Home")}
                            </Link>
                          </li>
                          <li>
                            <Link href="/portfolio">{t("P_portfolio")}</Link>
                          </li>
                          <li>
                            <span>{blogPost.title}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-50 position-relative">
                      <div className="col-lg-4 col-md-8 col-sm-6 col-6">
                        <div className="mb-20 d-flex flex-column justify-content-end mb-2">
                          <div className="d-flex aligin-content-center my-3 justify-content-start flex-column">
                            <Link target="blank" href={`${blogPost.demo_link}`}>
                              <img
                                className="d-inline-block me-3 mb-2 portfolio-detail-logo"
                                src={`${blogPost.logo_detail}`}
                                alt={`${blogPost.logo_detail}`}
                                style={{ maxHeight: "60px", height: "100%" }}
                              />
                            </Link>
                            <span className="d-inline-block">
                              {" "}
                              - {blogPost.category}
                            </span>
                          </div>
                          <div className="author-info mt-5"></div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-2 col-sm-6 col-6 d-flex justify-content-end align-content-center col-md-4 ">
                        <div className="bg-gray border-gray-800 d-flex justify-content-end align-content-center ">
                          {blogPost.demo_link !== null ? (
                            <Link
                              className="d-inline-block mt-4"
                              target="blank"
                              href={`${blogPost.demo_link}`}
                            >
                              <h6 className="d-inline-block go-to-the-site color-gray-500  card-style-2 px-md-2 px-lg-3 py-lg-3 hover-up  hover-neon wow animate__animated animate__fadeInUp">
                                {t("Id_Go_the")}
                              </h6>
                            </Link>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                      <div className="row  portfolio-technology hover-up    hover-neon wow animate__animated animate__fadeInUp">
                        <div className="col-12 d-flex aligin-content-center justify-content-start flex-wrap ">
                          <h5 className=" tools color-white d-flex align-content-center justify-content-center py-3">
                            {" "}
                            {t("Id_Used_tools")} :
                          </h5>
                          {blogPost.tools &&
                            blogPost.tools.map((item, i) => {
                              return (
                                <div
                                  key={i}
                                  className="mx-2 d-flex portfolio-tec-icons "
                                >
                                  <Link href="#">
                                    <img
                                      className="d-inline-block id-logo-image "
                                      src={`${item.image}`}
                                      alt="logo"
                                    />
                                  </Link>
                                </div>
                              );
                            })}
                        </div>
                        {/* <div className={`col-${10-blogPost.icons.length*2}`}></div> */}
                      </div>
                    </div>
                    <div className="row mt-70 portfolio-image-detaile">
                      <div className="col-xl-12  card-style-1 hover-up p-3 hover-neon mt-5 wow animate__animated animate__fadeInUp">
                        <img
                          className="border-radius-5"
                          src={`${blogPost.image_detail}`}
                          alt={`${blogPost.image_detail}`}
                        />
                      </div>
                      {blogPost.description && (
                        <h5 className="color-gray-500 my-5">
                          {blogPost.description}
                        </h5>
                      )}
                    </div>
                    <div
                      className={
                        blogPost.description
                          ? "row"
                          : "row portfolio-detail-gallery"
                      }
                    >
                      <div className="col-12 my-70">
                        <div className="row ">
                          {blogPost.image.map((item, index) => {
                            return (
                              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-6 my-2 p-0 ">
                                <FullscreenImage src={`${item.image}`} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default BlogDetails;
