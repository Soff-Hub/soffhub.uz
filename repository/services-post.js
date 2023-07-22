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
}

export default new PostApplication();
