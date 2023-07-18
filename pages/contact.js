import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Soff Hub | {t("C_contact")}</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <div className="text-center mt-70">
                  <h1 className="color-linear d-inline-block mb-30">
                    {t("C_title")}
                  </h1>
                  <p className="text-xl color-gray-500">{t("C_desc")}</p>
                </div>
                <div className="text-center d-flex justify-content-center align-content-center mt-30 flex-wrap">
                  <div className="d-inline-block  text-center support text-center">
                    <span className="d-inline-block mt-2">(90) 930-35-54</span>
                  </div>
                  <div className="d-inline-block location text-start">
                    8/1 Bunyodkor Avenue,
                    <br />
                    Tashkent 100115
                  </div>
                  <div className="d-inline-block plane text-start">
                    <span className="d-inline-block mt-2">
                      {" "}
                      zufarbek.abdurakhmonov@gmail.com
                    </span>
                  </div>
                </div>
                <div className="box-map mt-70 mb-50">
                  <iframe
                    className="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.3735993131915!2d69.21924630364744!3d41.28759221195305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2f5a84b25f%3A0xf934f004dd798141!2sSoff%20Study%20zamonaviy%20kasblar%20markazi!5e0!3m2!1sru!2s!4v1689081438449!5m2!1sru!2s"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  {/* <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2zVGjDoG5oIHBo4buRIE5ldyBZb3JrLCBUaeG7g3UgYmFuZyBOZXcgWW9yaywgSG9hIEvhu7M!5e0!3m2!1svi!2s!4v1666967642011!5m2!1svi!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
                </div>
                <div className="form-contact">
                  <div className="text-center">
                    <h3 className="color-linear d-inline-block mb-10">
                      {t("C_Drop_Us_a_Line")}
                    </h3>
                    <p className="text-xs color-gray-500">
                      {" "}
                      {t("C_required")} *
                    </p>
                  </div>
                  <div className="row mt-50">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          type="text"
                          placeholder={t("C_placholder_name")}
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Email *" />
                                            </div>
                                        </div> */}
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          type="text"
                          placeholder={t("C_placholder_number")}
                        />
                      </div>
                    </div>
                    {/* <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control bg-gray-850 border-gray-800 color-gray-500" type="text" placeholder="Subject *" />
                                            </div>
                                        </div> */}
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          rows={5}
                          placeholder={t("C_placholder_message")}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center mb-50">
                        <Link
                          href="#"
                          className="btn btn-linear btn-load-more btn-radius-8 hover-up"
                        >
                          {t("C_Send_Message")}
                          <i className="fi-rr-arrow-small-right" />
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
}
