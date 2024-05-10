import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper';
import axios from 'axios';

export default function Clients() {

    const [clients, setClients] = useState([])

    const getClients = async () => {
        const resp = await axios.get(`https://admin.soffhub.uz/api/v1/opinions/`)
        setClients(resp.data?.results)
    }

    useEffect(() => {
        getClients()
    }, [])

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                // speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Navigation]}
                className="mySwiper"
                loop
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                ></div>
                {
                    clients.map(el => (
                        <SwiperSlide key={el.id}>
                            <div className="title" data-swiper-parallax="-300" style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={el.photo} width={'px'} height={100} style={{ borderRadius: '50%' }} />
                            </div>
                            <div className="text" data-swiper-parallax="-200" style={{ textAlign: 'center' }}>
                                <h5 style={{ color: 'white', fontWeight: '500', margin: '10px 0 0' }}>{el.full_name}</h5>
                                <p style={{ margin: '0 0 10px' }}>{el.position}</p>
                            </div>
                            <div className="text" data-swiper-parallax="-100">
                                <p style={{ maxWidth: '600px', textAlign: 'center', margin: '0 auto' }}>
                                    {el.opinion}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}
