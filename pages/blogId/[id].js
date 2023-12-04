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

  const blogIdData = async (ID) => {
    const blogIdPromise = await getDataRepository.getPromise(
      `blog/${ID}`,
      languageData.language
    );
    if (blogIdPromise) {
      setBlogId(blogIdPromise.data);
    }
  };

  useEffect(() => {
    if (id) {
      blogIdData(id);
    }
  }, [id]);

  console.log("blog id data", blogId);

  return (
    <>
      <Layout>
        <div className="cover-home3 mb-70 mt-70">
          <div className="container">
            <div className="row ">
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
                      <span>{blogId && blogId.title}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mt-30">
              <div className="col-lg-7">
                <div className="bac">
                  <div className="image-card">
                    <img src={blogId?.image} alt="blog image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="row mt-50">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-10">
                    <h3 className="color-linear">{blogId?.title}</h3>
                    <p className="color-gray-500 my-2">{blogId?.body}</p>
                    <h6 className="color-white">{blogId?.created_at}</h6>
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
