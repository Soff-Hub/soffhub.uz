import clinet, { baseDomain } from "./repository";

class PostApplication {
  postMassage(data, language) {
    const endPoint = "service-application/";
    const Massage = clinet({
      url: baseDomain + endPoint,
      method: "POST",
      headers: { "Accept-Language": `${language}` },
      data: data,
    })
      .then((ress) => {
        return ress;
      })
      .catch((err) => {
        return err;
      });
    return Massage;
  }

  postVacansy(data, language){
    const endPoint = 'application/';
    const Vacansy = clinet ({
      url: baseDomain + endPoint,
      method:"Post",
      headers: {"Accept-Language": `${language}` ,
      'Content-Type': 'multipart/formdata',},
      data : data,
    })
    .then((ress) => {
      return ress;
    })
    .catch((err) => {
      return err;
    });
  return Vacansy;
  }
}

export default new PostApplication();
