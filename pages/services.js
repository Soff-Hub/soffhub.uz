import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import data from "../util/blogData";
import { useTranslation } from "react-i18next";
import GetData from '../repository/getData-repository'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const {t} = useTranslation()
  const [servicesApi, setServicesApi] = useState([])

     const select = useSelector(state => state.translations.data)
    console.log('select', select.language);

  const getServices = async () => {
    const servicesPromise = await GetData.getPromise('service/', `${select.language}`)
    if (servicesPromise) {
      setServicesApi(servicesPromise.data.results)
    }
  }

  useEffect(() => {
    getServices()
  },[select.language])

console.log('service api' ,servicesApi);
  return (
    <>
      <Head>
        <title>Soff Hub | {t("S_Services")}</title>
      </Head>
      <Layout>
        <div className="cover-home3">
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-12 col-lg-12">
                <div className="row align-items-end mt-50">
                  <div className="col-lg-7 mb-20">
                    <p className="color-gray-500 text-base wow animate__animated animate__fadeIn">
                      {t("S_PROBLEM")}
                    </p>
                    <h4 className="wow animate__animated animate__fadeInUp mt-20 color-gray-50  color-linear">
                      {t("S_What_solution")}
                    </h4>
                  </div>
                </div>
                <div className="mt-50 mb-50">
                  <div className="row mt-50 mb-10">
                    { servicesApi.length > 0 && 
                     servicesApi.map((item, i) => (
                      <div className="col-lg-6 col-md-6" key={i}>
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
                            <div className="item-icon bg-gray-950 " >
                            <i class={`${item.icon}`}></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-70" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
