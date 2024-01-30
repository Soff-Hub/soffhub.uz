import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import portfolio from "../../util/portfolio";

SwiperCore.use([Autoplay, Navigation]);
const PortfolioCarousel = () => {
  let Router = useRouter();

  const [blogPost, setBlogPost] = useState([]);

  const { id } = Router.query;

  useEffect(() => {
    setTimeout(() => {
      setBlogPost(portfolio.find((item) => item.id == id));
    }, 2000);
  }, [id]);

  // const data = [
  //     {
  //         img: "kvant-screen.jpg",
  //     },
  //     {
  //         img: "kvant-screen1.jpg",
  //     },
  //     {
  //         img: "kvant-screen2.jpg",
  //     },
  //     {
  //         img:"kvant-screen.jpg",
  //     },
  //     {
  //         img: "kvant-screen1.jpg",
  //     },
  // ];
  // console.log(blogPost.scren_group, portfolio,id, 'nnn');

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        autoPlay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev-style-3",
          nextEl: ".swiper-button-next-style-3",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          575: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          767: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1199: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1350: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
        className="swiper-wrapper pt-5"
      >
        {blogPost.scren_group ? (
          blogPost.scren_group.map((item, i) => {
            return (
             <>
              <SwiperSlide className="swiper-slide" key={i}>
                <a href="#">
                  <img
                    className="d-inline-block"
                    width={300}
                    src={`/assets/imgs/page/about/${item}`}
                    alt="soffhub-portfolio"
                  />
                </a>
              </SwiperSlide>

             
             </>
            );
          })
        ) : (
          <> Loading...</>
        )}
      </Swiper>


    </>
  );
};

export default PortfolioCarousel;
