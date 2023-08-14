import { t } from "i18next";
import React, { useEffect, useState } from "react";
// import "../css/myCourses.css"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const MyCourses = () => {
  // const percentage = 90;
  const [progress, setProgress] = useState(1);
  const [progress1, setProgress1] = useState(1);
  const [progress2, setProgress2] = useState(1);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 120 ? 120 : prevProgress + 1
      );
    }, 15); // Change the time (in milliseconds) as per your requirement.

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress1((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 20); // Change the time (in milliseconds) as per your requirement.

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setProgress2((prevProgress) =>
        prevProgress >= 12 ? 12 : prevProgress + 1
      );
    }, 200); // Change the time (in milliseconds) as per your requirement.

    return () => clearInterval(interval1);
  }, []);


  

  return (
    <div className="container mb-70 pb-50">
      <div className="row text-center">
        {/* <div className="col-4">
          <div style={{ width: "200px" }} className="mt-3 col-4">
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={{ background: "red" }}
            />
            <h5 className="color-gray-500">Projects</h5>
          </div> */}

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 ">
          <div className="progres-div position-relative border-1">
            <div className="color-linear text-center progres-value">{progress}<span className="pluss color-linear">+</span></div>
          <i class="fa-solid fa-list-check icon-project"></i>
            <h5 className="color-gray-500 progres-name">{t("p_Projects")}</h5>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 ">
          <div className="progres-div2 position-relative border-1">
            <div className="color-linear text-center progres-value">{progress1}<span className="pluss color-linear">+</span></div>
            <i class="fa-solid fa-user-tie  icon-project"></i>
            <h5 className="color-gray-500 progres-name happy-clients">{t("p_Happy_clients")}</h5>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
          <div className="progres-div last-child-progress position-relative border-1">
            <div className="color-linear text-center progres-value">{progress2}<span className="pluss color-linear">+</span></div>
            <i class="fa-solid fa-users icon-project"></i>
            <h5 className="color-gray-500 progres-name">{t("p_Employes")}</h5>
          </div>
        </div>
        {/* <div className="col-4 text-center">
          <div className="progres-div border-1">
            <div className="color-linear progres-value">{progress1}</div>
            <h5 className="color-gray-500">Happy clients</h5>
          </div>
        </div>
        <div className="col-4 text-center">
          <div className="progres-div border-1">
            <div className="color-linear progres-value">{progress2}</div>
            <h5 className="color-gray-500">Employes</h5>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyCourses;
