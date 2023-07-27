import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import getDataRepository from "../../repository/getData-repository";
import { useSelector } from "react-redux";
import PostAppliaction from "../../repository/services-post";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AlertComponent from "./alert";
import AlertComponentErr from "./alert-error";
import { t } from "i18next";

const ModalAntd = ({ title, id }) => {
  const [modal2Open, setModal2Open] = useState(false);
  const [vacanies, setVacancies] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("+998");
  const [vacansyId, setVacansyId] = useState(id);
  const [file, setFile] = useState(null);
  const [vac, setPostVac] = useState(null);

  const languageData = useSelector((state) => state.translations.data);

  const getVacanciesData = async () => {
    const promise = await getDataRepository.getPromise(
      "vacancy/",
      languageData.language
    );
    if (promise) {
      setVacancies(promise.data.results);
    }
  };

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const data = new FormData();
  data.append("full_name", name);
  data.append("phone_number", "+" + number);
  data.append("vacancy", vacansyId);
  data.append("cv", file);

  const handleClickPostApplication = async (e) => {
    e.preventDefault();
    const promise = await PostAppliaction.postVacansy(
      data,
      languageData.language
    );
    if (promise) {
      setPostVac(promise);
    }
    setName("");
    setNumber("");
  };

  useEffect(() => {
    getVacanciesData();
  }, []);

  console.log(vac);
  console.log("type", vacansyId, typeof vacansyId);
  return (
    <>
      <>
        {vac && vac.status === 201 ? (
          <AlertComponent />
        ) : vac && vac.name === "AxiosError" ? (
          <AlertComponentErr />
        ) : (
          <></>
        )}
      </>
      <p onClick={() => setModal2Open(true)}>{t("Ariza_topshirish")}</p>
      <Modal
        title={t("b_Vakansiya_uchun")}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <form
          className="vacansy-form"
          onSubmit={(e) => handleClickPostApplication(e)}
        >
          <div className="row  my-3">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label className="label">{t("b_Full_name")} *</label>
              <input
                required
                className="vacansy-input"
                value={name}
                placeholder={t("b_name_placholder")}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label className="label">{t("b_Phone_nuber")} *</label>
              <PhoneInput
                required
                placeholder="+998"
                country={"uz"}
                value={number}
                onChange={(number) => setNumber(number)}
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label className="label">{t("b_Vacancies")} *</label>
              <select
                className="vacansy-input"
                onChange={() => setVacansyId()}
                required
              >
                <option value={id} key="title">
                  {title}
                </option>
                {vacanies.length > 0 &&
                  vacanies
                    .filter((item) => item.title !== title)
                    .map((item, i) => (
                      <option key={i} value={`${item.id}`}>
                        {item.title}
                      </option>
                    ))}
              </select>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label className="label">
                {t("b_Resume")} *
                <span className="file-name">{t("b_Send_a_file")}</span>
                <input
                  required
                  className="vacansy-input img-v "
                  type="file"
                  onChange={handleChangeFile}
                />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="vacansy-submit"
                onClick={() => setModal2Open(false)}
              >
                {t("b_Submit")}
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};
export default ModalAntd;
