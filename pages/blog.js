import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";
import getDataRepository from "../repository/getData-repository";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { BallTriangle, Triangle } from "react-loader-spinner";

export default function Home() {
  const { t } = useTranslation();
  const [blog, setBlog] = useState([]);
  const [limit, setLimit] = useState(3);
  const languageData = useSelector((state) => state.translations.data);

  const getBlog = async () => {
    const blogPromise = await getDataRepository.getPromise(
      `blog/?limit=${limit}&offset=0`,
      `${languageData.language}`
    );
    if (blogPromise) {
      setBlog(blogPromise.data.results);
    }
  };

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight, scrollY } =
      document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 640) {
      setLimit((limit) => limit + 3);
    }
  };

  useEffect(() => {
    getBlog();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit]);


  return (
    <>
      <Head>
        <title>Soff Hub | {t("B_title")}</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-10 col-lg-12">
                {blog.length <= 0 ? (
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <div className="blogSpinner">
                        <Triangle
                          height="80"
                          width="80"
                          color="#0EA5EA"
                          ariaLabel="triangle-loading"
                          wrapperStyle={{}}
                          wrapperClassName=""
                          visible={true}
                        />
                      </div>
                    </div>
                  </div>
                ) : blog.length === 0 ? (
                  <>
                    <div className="row align-items-end mt-50">
                      <div className="col-lg-12 text-center">
                        <div className="text-start mt-5">
                          <span className="project-style me-3"></span>{" "}
                          <h3 className="color-linear d-inline-block  animate__animated animate__fadeInUp ">
                            {t("B_title")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <p className="color-white text base fs-5  wow animate__animated animate__fadeIn">
                          {t("B_no_data")}
                        </p>
                        <div className="border-bottom border-gray-800 mt-30 mb-30" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="row align-items-end mt-50">
                      <div className="col-lg-12 text-center">
                        <div className="text-start mt-5 ">
                          <span className="project-style me-3"></span>{" "}
                          <h3 className="color-linear d-inline-block  animate__animated animate__fadeInUp ">
                            {t("B_title")}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-50">
                      {blog.slice(0, 5).map((item, i) => (
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 text-center">
                          <div className="blog-content ">
                            <h5 className="blog-content--title">
                              {item.title}
                            </h5>
                            <div className="blog-thumbnail">
                              <img
                                src={`${item.image}`}
                                alt={`${item.title}`}
                              />
                            </div>

                            <div className="blog-info position-relative">
                              <p>{item.description}</p>
                              {/* <p>{item.created_at}</p> */}

                              <Link
                                className="blog-detail-link text-center d-inline-block text-aligin-center"
                                href={`blogId/${item.slug}`}
                              >
                               {t('more')}
                                <i class="fa-solid fa-angles-right fa-fade ms-2"></i>
                              </Link>

                              <span className="blog-btn-hover"></span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
