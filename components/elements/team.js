import React, { useEffect, useRef, useState } from "react";
import SwiperCore, { Autoplay, Navigation, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from 'swiper';
import getDataRepository from "../../repository/getData-repository";
import Link from "next/link";

import { EffectCoverflow, Pagination } from "swiper";
import teamRepo from "../../repository/team-repo";
import { t } from "i18next";

SwiperCore.use([Virtual, Navigation, Pagination]);
const Team = () => {
  const [team, setTeam] = useState([]);

  const Team = async () => {
    const brandPromise = await teamRepo.getTeamData();
    if (brandPromise) {
      setTeam(brandPromise.data.results);
    }
  };

  useEffect(() => {
    Team();
  }, []);

  return (
    <>
      <h2 className={`${team.length > 0 ? "color-linear mb-20 " : "d-none"}`}>
      {t("Team")}
      </h2>
      <div className="row ">
        {team.length > 0 ? (
          team.map((item) => (
            <div
              key={item.id}
              className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 team-div"
            >
              <div className="team-div-border">
                <div className="team-image-back">
                <div className="team-card-blur" ></div>
                  <img
                    className="rasm"
                    style={{
                      position: "absolute",
                      zIndex: "11",
                      borderRadius: "50%",
                      width: "180px",
                      maxHeight:'180px',
                      padding:'10px',
                      display: "inline-block",
                      objectFit: "cover",
                      position:'center',
                      objectPosition:'top'
                    }}
                    src={`${item.image}`}
                    alt="soff hub partner"
                  />
                </div>
                <div className="team-desc">
                  
                  <div className="team-desc-parent">
                    <h4 className="color-linear my-2">{item.full_name}</h4>
                    <p className="team-pozitsiya color-white fs-5">
                      {item.position}
                    </p>
                  </div>
                  <ul>
                    {
                      item?.social_links?.map((el) => (
                        <li>
                        <Link href={el.url} target="_blank" >
                        <i class={el.icon}></i>
                        </Link>
                    </li>
                      ))
                    }
                   
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="d-none"></div>
        )}
      </div>
    </>
  );
};

export default Team;
