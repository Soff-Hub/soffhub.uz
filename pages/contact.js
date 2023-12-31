import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import PostApplication from "../repository/services-post";
import { useSelector } from "react-redux";
import AlertComponent from "../components/elements/alert";
import getDataRepository from "../repository/getData-repository";
import AlertComponentErr from "../components/elements/alert-error";
import Cleave from "cleave.js/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Home() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [comName, setComName] = useState("");
  const [service, setService] = useState("");
  const [body, setBody] = useState("");
  const [Message, setMessage] = useState(null);

  const select = useSelector((state) => state.translations.data);

  let n = number.split("");
  n.splice(0, 0, "+");
  let a = n.reduce((acc, cur) => acc + cur);

  const data = {
    full_name: name,
    phone_number: a,
    company_name: comName,
    body: body,
    service: service,
  };

  const handleClickPostApplication = async (e) => {
    e.preventDefault();
    const promise = await PostApplication.postMassage(data, select.language);
    if (promise) {
      setMessage(promise);
    }
    setName("");
    setNumber("");
    setBody("");
    setComName("");
    setService("");
    // window.location.reload()
    // resetFormFields()
  };

  const [servicesApi, setServicesApi] = useState([]);

  const lan = useSelector((state) => state.translations.data);
  console.log("select", lan.language);

  const getServices = async () => {
    const servicesPromise = await getDataRepository.getPromise(
      "service/",
      `${lan.language}`
    );
    if (servicesPromise) {
      setServicesApi(servicesPromise.data.results);
    }
  };

  useEffect(() => {
    getServices();
  }, [number]);
console.log("Message", Message);
  return (
    <>
     <>
        {Message && ( Message.status === 201 || Message.status === 200 ) ? (
          <AlertComponent />
        ) : Message ? (
          <AlertComponentErr />
        ) : (
          <></>
        )}
      </>
      <Head>
        <title>Soff Hub | {t("C_contact")}</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">

            <div className="row">
              <div className="col-xl-10 col-lg-12 m-auto">
                <div className="text-center mt-70">
                  <h3 className="color-linear d-inline-block mb-30">
                    {t("C_title")}
                  </h3>
                  {/* <p className="text-xl color-gray-500">{t("C_desc")}</p> */}
                </div>
                <div className="text-center d-flex justify-content-center align-content-center mt-30 flex-wrap">
                  <div className="d-inline-block  text-center support text-center">
                    <span className="d-inline-block mt-2">(91) 008 67 89</span>
                  </div>
                  <div className="d-inline-block location text-start">
                    8/1 Bunyodkor Avenue,
                    <br />
                    Tashkent 100115
                  </div>
                  <div className="d-inline-block plane text-start">
                    <span className="d-inline-block mt-2">
                      {" "}
                      soffhub.hr@gmail.com
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
                </div>
                <form
                  onSubmit={(e) => handleClickPostApplication(e)}
                  className="form-contact"
                >
                  <div className="text-center">
                    <h5 className="d-inline-block mb-10">
                      <span className=" contact-email ">
                        {t("C_Drop_Us_a_Line1")}
                      </span>
                      <Link
                        target="blank"
                        // href='soffhub.hr@gmail.com'
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=soffhub.hr@gmail.com&su=Subject&body=Body%20Text"
                        className="color-linear"
                      >
                        {t("C_Drop_Us_a_Line2")}
                      </Link>
                      <span className=" contact-email ">
                        {t("C_Drop_Us_a_Line3")}
                      </span>
                    </h5>
                    {/* <p className="text-xs color-gray-500">
                      {" "}
                      {t("C_required")} *
                    </p> */}
                  </div>

                  <div className="row mt-50">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          required
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          type="text"
                          placeholder={t("C_placholder_name")}
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group contact-number-input ">
                        <PhoneInput
                          className=" bg-gray-850 border-gray-800 color-gray-500"
                          required
                          placeholder="+998"
                          country={"uz"}
                          value={number}
                          onChange={(number) => setNumber(number)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          required
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          type="text"
                          placeholder={t("C_Company_name")}
                          onChange={(e) => setComName(e.target.value)}
                          value={comName}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select
                          required
                          onChange={(e) => setService(e.target.value)}
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                        >
                          {servicesApi &&
                            servicesApi.map((item, i) => {
                              return (
                                <option selected defaultValue={item.id} value={item.id} key={i}>
                                  {item.title}
                                </option>
                              );
                            })}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="form-control bg-gray-850 border-gray-800 color-gray-500"
                          rows={5}
                          placeholder={t("C_placholder_message")}
                          defaultValue={""}
                          onChange={(e) => setBody(e.target.value)}
                          value={body}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="text-center mb-50">
                        <button
                          type="submit"
                          className="btn btn-linear btn-load-more btn-radius-8 hover-up"
                        >
                          {t("C_Send_Message")}
                          <i className="fi-rr-arrow-small-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
