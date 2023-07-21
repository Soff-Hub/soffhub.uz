import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { useTranslation } from "react-i18next";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";

const BlogID = () => {
  let Router = useRouter();
  const { t } = useTranslation();
  const { id } = Router.query;
  const [blogId, setBlogId] = useState({});

  const languageData = useSelector((state) => state.translations.data);

  const blogIdData = async () => {
    const blogIdPromise = await getDataRepository.getPromise(
      `blog/${id}`,
      languageData.language
    );
    if (blogIdPromise) {
      setBlogId(blogIdPromise.data);
    }
  };

  useEffect(() => {
    blogIdData();
  }, []);

  console.log("blog id data", blogId);

  return (
    <>
      <Layout>
        <div className="cover-home3 mb-70 mt-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-20 mt-50 text-start text-lg-start">
                <div className="box-breadcrumbs wow animate__animated animate__fadeIn">
                  <ul className="breadcrumb">
                    <li>
                      <Link className="home" href="/">
                        {t("Id_Home")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">{t("B_title")}</Link>
                    </li>
                    <li>
                      <span>Name</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mt-50">
              <div className="col-lg-12">
                <div className="card-blog-1 card-blog-2 hover-up wow animate__animated animate__fadeIn">
                  <div className="card-image mb-20">
                    <Link className="post-type" href="#" />
                    <Link href="/single-sidebar">
                      <img src={`${blogId.image}`} alt={`${blogId.title}`} />
                    </Link>
                  </div>
                  <div className="card-info">
                    <Link href="#">
                      <h4 className="color-white mt-30">{`${blogId.title}`}</h4>
                    </Link>
                    <p className="mt-25 text-lg color-gray-700">
                      Gosh jaguar ostrich quail one excited dear hello and bound
                      and the and bland moral misheard roadrunner flapped lynx
                      far that and jeepers giggled far and far
                    </p>
                    <div className="row align-items-center mt-45">
                      <div className="col-7">
                        <div className="box-author">
                          <img
                            src={`${blogId.image}`}
                            alt={`${blogId.title}`}
                          />
                          <div className="author-info">
                            <h6 className="color-gray-700">Joseph</h6>
                            <span className="color-gray-700 text-sm">
                              {`${blogId.created_at}`}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-5 text-end">
                        <Link
                          className="readmore color-gray-500 text-sm"
                          href="/single-sidebar"
                        >
                          <span>Read more</span>
                        </Link>
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

export default BlogID;
