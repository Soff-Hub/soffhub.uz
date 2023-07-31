import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import portfolio from "../../util/portfolio";
import { useRouter } from "next/router";

import { EffectCoverflow, Pagination, EffectCards, FreeMode, Navigation, Thumbs } from "swiper"; 
import FullscreenImage from "./carousel-full-screen";

export default function Carousel() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [blogPost, setBlogPost] = useState([]);
    const Router = useRouter()
  const { id } = Router.query;

  useEffect(() => {
    setTimeout(() => {
      setBlogPost(portfolio.find((item) => item.id == id));
    }, 2000);
  }, [id]);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        autoPlay={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
       
        coverflowEffect={{
          rotate: 50,
          stretch: 3,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"

// 2 chisi

        // effect={'cards'}
        // grabCursor={true}
        // modules={[EffectCards]}
        // autoplay={true}
        // className="mySwiper"


      >
        {blogPost.scren_group ? (
          blogPost.scren_group.map((item, i) => (
            <SwiperSlide>
              {/* <img  src={`/assets/imgs/page/about/${item}`}
                    alt="soffhub-portfolio" 
                    className="carousel-image"
                    /> */}
                    <FullscreenImage src={`/assets/imgs/page/about/${item}`} />
            </SwiperSlide>
          ))
        ) : (
          <> Carousel image not found</>
        )}

      </Swiper>
      
    </>
  );
}
