import React, { useEffect, useRef, useState } from 'react';
import SwiperCore, { Autoplay, Navigation , Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from 'swiper';
import getDataRepository from '../../repository/getData-repository';
import Link from 'next/link';


// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';
import teamRepo from '../../repository/team-repo';

SwiperCore.use([Virtual, Navigation, Pagination]);
const Team = () => {
    const [team, setTeam] = useState([])

    const data = [
        {
            img: "Zufarbek Abdurahmonov Image 2.png",
        },
        {
            img: "Zufarbek Abdurahmonov Image 2.png",
        },
        {
            img: "Zufarbek Abdurahmonov Image 2.png",
        },
        {
            img: "Zufarbek Abdurahmonov Image 2.png",
        },
        {
            img: "Zufarbek Abdurahmonov Image 2.png",
        },
        {
            img: "Zufarbek Abdurahmonov Image 2.png",
        },
        {
            img: "Zufarbek Abdurahmonov Image 2.png",
        },
        {
            img: "Zufarbek Abdurahmonov Image 2.png",
        },

    ];


    const brands = async () => {
        const brandPromise = await teamRepo.getTeamData()
        if (brandPromise) {
            setTeam(brandPromise.data.results)
        }
    }

    useEffect(() => {
        brands()
    },[])



    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        // data
    //   Array.map((_, index) => `Slide ${index + 1}`)
    );
  
    const prepend = () => {
      setSlides([
        `Slide ${prependNumber.current - 2}`,
        `Slide ${prependNumber.current - 1}`,
        ...slides,
      ]);
      prependNumber.current = prependNumber.current - 2;
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    // prepend()
  
    const append = () => {
      setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };
  
    const slideTo = (index) => {
      swiperRef.slideTo(index - 1, 0);
    };
// console.log(team);
    return (
        <>
        <h2 className={`${team.length > 0 ? 'color-linear mb-70 ' : "d-none"}`} >Team</h2>
            <Swiper
                // slidesPerView={5}
                // spaceBetween={30}
                // loop={true}
                // pagination={{
                //     clickable: true
                // }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                // navigation={{
                //     prevEl: ".swiper-button-prev-style-3",
                //     nextEl: ".swiper-button-next-style-3",
                // }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 4,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 4,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 5,
                //         spaceBetween: 30,
                //     },
                // }}
                // modules={[Pagination]}
                // className="swiper-wrapper pt-5 text-center"

                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                // pagination={true}
                navigation={true}
                virtual
                className={`${team.length > 0 ? '' : "d-none"}`}
            >
                { 
                team.length > 0 ?
                team.map((item, i) => (
                    <SwiperSlide key={i}  >
                            <img className='rasm' style={{border: "1px solid #fff", borderRadius:"50%", width:'250px', height:'250px', display:"inline-block"}}   src={`${item.image}`} alt="soff hub partner" />
                         <div className='swiper-item-title '>
                         <h4 className='color-linear my-2' >{item.full_name}</h4>
                         <p className='team-pozitsiya color-white fs-5'>{item.position}</p>
                         </div>
                    </SwiperSlide>
                )):
                <div className='d-none'>
                </div>
            } 
                
            </Swiper>



        </>
    );
};

export default Team;

