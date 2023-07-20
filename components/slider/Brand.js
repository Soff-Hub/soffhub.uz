import React, { useEffect, useState } from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper';
import getDataRepository from '../../repository/getData-repository';
import Link from 'next/link';

SwiperCore.use([Autoplay, Navigation]);
const Brand = () => {
    const [partner, setPartner] = useState([])

    const data = [
        {
            img: "zhontaisolar-logo.png",
        },
        {
            img: "emu_logo.png",
        },
        {
            img: "Kvant_logo.svg",
        },
        {
            img: "greenbox_logo.png",
        },
        {
            img: "emu_logo.png",
        },
    ];


    const brands = async () => {
        const brandPromise = await getDataRepository.getPromise('partner/')
        if (brandPromise) {
            setPartner(brandPromise.data.results)
        }
    }

    useEffect(() => {
        brands()
    },[])

    console.log('partners', partner);

    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="swiper-wrapper pt-5 text-center"
            >
                { 
                partner.length > 0 &&
                partner.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide text-center"  >
                        <Link target="blank" style={{height: '100%', display: 'flex', alignItems: 'center'}} href={`${item.url}`}>
                            <img className='text-center partners-about-img'  src={`${item.logo}`} alt="soff hub partner" />
                          
                            </Link>
                    </SwiperSlide>
                ))}
            </Swiper>



        </>
    );
};

export default Brand;

