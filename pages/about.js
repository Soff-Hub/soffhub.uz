import Link from "next/link";
import Head from "next/head";
import Accordion from "../components/elements/Accordion";
import PortfolioFilter from "../components/elements/PortfolioFilter";
import Layout from "../components/layout/Layout";
import Brand from "../components/slider/Brand";
import Testimonial from "../components/slider/Testimonial";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import GetData from "../repository/getData-repository";
import { useEffect, useState } from "react";
import AboutHeader from "../components/elements/about-header";
import FullscreenImage from "../components/slider/carousel-full-screen";


export default function Home() {
  const { t } = useTranslation();
  const [gallery, setGalley] = useState([]);

  const data = [
    {
      image : 'assets/imgs/page/about/soff - japan - 4.png'
    },
    {
      image : 'assets/imgs/page/about/soff - japan - 5.png'
    },
    {
      image : 'assets/imgs/page/about/soff - japan - 2.png'
    },
  ]

  // const getGallery = async () => {
  //   const galleryPromise = await GetData.gallery("gallery/");
  //   if (galleryPromise) {
  //     setGalley(galleryPromise.data);
  //   }
  // };


  // useEffect(() => {
  //   getGallery();
  // }, []);

  

  console.log('gallery', gallery);

  return (
    <>
      {/* <Typewriter
        options={{
          wrapperClassName: "typewrite color-linear",
          strings: ["Brian Clark", "Designer", "Creator"],
          autoStart: true,
          loop: true,
        }}
      /> */}
      <Head>
        <title>Soff Hub | {t("A_about")}</title>
      </Head>
      <Layout>

     

<AboutHeader/>

        <div className="cover-home1 " style={{ position: "relative" }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-1" />
              <div className="col-xl-12 col-lg-12">
                <div className="banner">
                 
                  <div className="row mt-100">
                    {gallery &&
                      data.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center my-2"
                          >
                            {/* <img
                              className="about-imgs hover-up   wow animate__animated animate__fadeIn "
                              src={item.image}
                              alt="soff"
                            /> */}
                            <FullscreenImage  src={item.image} />
                          </div>
                        );
                      })}

                    {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center my-2 position-relative">
                      <img
                        className="about-imgs hover-up   wow animate__animated animate__fadeIn "
                        src="assets/imgs/page/about/soff - japan - 4.png"
                        alt="soff"
                      />
                      <div className="bg"></div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center my-2">
                      <img
                        className="about-imgs hover-up   wow animate__animated animate__fadeIn "
                        src="assets/imgs/page/about/soff - japan - 5.png"
                        alt="soff"
                      />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center my-2">
                      <img
                        className="about-imgs hover-up   wow animate__animated animate__fadeIn "
                        src="assets/imgs/page/about/soff - japan - 2.png"
                        alt="soff"
                      />
                    </div> */}
                    
                  </div>
                </div>

                <div className="text-center mt-70 ">
                  {/* <p className="text-lg color-gray-500 wow animate__animated animate__fadeInUp">The convention is the main event of the year for professionals in<br className="d-none d-lg-block" />the world of design and architecture.</p> */}
                </div>

                <div className="row align-items-end mt-30">
                  <div className="col-lg-9 wow animate__animated animate__fadeIn">
                    <h3 className="color-linear">{t("A_partners")}</h3>
                  </div>
                  <div
                    className="col-lg-3 text-lg-end mt-15 hover-up wow animate__animated animate__fadeIn"
                    data-wow-delay="0.2s"
                  ></div>
                </div>
                <div className="list-logos mt-50 mb-30">
                  <div className="container">
                    <div className="row">
                      <div className="swiper-container swiper-group-1">
                        <div className="swiper-wrapper wow animate__animated animate__fadeIn">
                          <Brand />
                        </div>
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
