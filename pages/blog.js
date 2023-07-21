import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";
import getDataRepository from "../repository/getData-repository";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Home() {
  const { t } = useTranslation();
  const [blog, setBlog] = useState([]);
  const languageData = useSelector((state) => state.translations.data);



  const getBlog = async () => {
    const blogPromise = await getDataRepository.getPromise("blog/", `${languageData.language}`);
    if (blogPromise) {
      setBlog(blogPromise.data.results);
    }
  };

  useEffect(() => {
    getBlog();
  }, [languageData.language]);

  console.log("blog api", blog);

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
                <div className="row align-items-end mt-50">
                  <div className="col-lg-12 text-center">
                    <div className="blog-page d-inline-block position-relative">
                      <h1 className="color-white mb-10 color-linear wow animate__animated animate__fadeIn">
                        {t("B_title")}
                      </h1>
                    </div>
                  </div>
                </div>
                {blog.length <= 0 ? (
                  <div className="row">
                    <div className="col-lg-12">
                      <p className="color-white text base fs-5  wow animate__animated animate__fadeIn">
                        {t("B_no_data")}
                      </p>
                      <div className="border-bottom border-gray-800 mt-30 mb-30" />
                    </div>
                  </div>
                ) : (
                  <div className="row mt-70">
                    <div className="col-xl-12 col-lg-12 col-12">
                      {/* <div className="card-blog-1 card-blog-2 hover-up wow animate__animated animate__fadeIn">
                                                <div className="card-image mb-20"><Link className="post-type" href="#" /><Link href="/single-sidebar"><img src="assets/imgs/page/homepage4/img5.jpg" alt="Genz" /></Link></div>
                                                <div className="card-info"><Link href="/single-sidebar">
                                                    <h4 className="color-white mt-30">I work best when my space is filled with
                                                        inspiration</h4>
                                                </Link>
                                                    <p className="mt-25 text-lg color-gray-700">Gosh jaguar ostrich quail one
                                                        excited dear hello and bound and the and bland moral misheard roadrunner
                                                        flapped lynx far that and jeepers giggled far and far</p>
                                                    <div className="row align-items-center mt-45">
                                                        <div className="col-7">
                                                            <div className="box-author"><img src="assets/imgs/page/homepage1/author.jpg" alt="Genz" />
                                                                <div className="author-info">
                                                                    <h6 className="color-gray-700">Joseph</h6><span className="color-gray-700 text-sm">25 April 2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-5 text-end"><Link className="readmore color-gray-500 text-sm" href="/single-sidebar"><span>Read more</span></Link></div>
                                                    </div>
                                                </div>
                                            </div> */}
                      <div className="box-list-posts mt-30">
                        {blog.slice(0, 5).map((item, i) => (
                          <div
                            className="card-list-posts wow animate__animated animate__fadeIn"
                            key={i}
                          >
                            <div className="card-image hover-up">
                              <Link href={`blogId/${item.id}`}>
                                <img
                                  src={`/assets/imgs/page/healthy/${item.img}`}
                                  alt="Genz"
                                />
                              </Link>
                            </div>
                            <div className="card-info">
                              <Link
                                className="btn btn-tag bg-gray-800 hover-up"
                                href={`blogId/${item.id}`}
                              >
                                {item.category}
                              </Link>
                              <Link href={`blogId/${item.id}`}>
                                <h4 className="mt-15 mb-20 color-white">
                                  {item.title}
                                </h4>
                              </Link>
                              <p className="color-gray-500">
                                {item.description}
                              </p>
                              <div className="row mt-20">
                                <div className="col-7">

                                  {
                                    item.tags.map((item, i) => {
                                      return (
                                        <Link
                                        className="color-gray-700 text-sm mr-15"
                                        href={`blogId/${item.id}`}
                                      >
                                        # {item.name}
                                      </Link>
                                      )
                                    })
                                  }
                                  {/* <Link
                                    className="color-gray-700 text-sm mr-15"
                                    href="/blog-archive"
                                  >
                                    # Travel
                                  </Link> */}
                                  {/* <Link
                                    className="color-gray-700 text-sm"
                                    href="/blog-archive"
                                  >
                                    # Lifestyle
                                  </Link> */}
                                </div>
                                <div className="col-5 text-end">
                                  <span className="color-gray-700 text-sm timeread">
                                   {item.created_at}
                                  </span>
                                </div>
                              </div>
                            </div>
                            {/* <div className="row">
                                  <div className="col-12">
                                      {item.body}
                                  </div>
                            </div> */}
                          </div>
                        ))}
                      </div>
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
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
