import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
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
                      <p className="color-white text base fs-5  wow animate__animated animate__fadeIn">
                        {t("B_no_data")}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="border-bottom border-gray-800 mt-30 mb-30" />
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
