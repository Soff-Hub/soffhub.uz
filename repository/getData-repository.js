
import clinet, { baseDomain } from "./repository";


class GetData {
  getPromise(value, language) {
    const url = baseDomain+`${value}`
// console.log('language', language);
    const headers = {
      "Accept-Language" : `${language}`
    }

    const data = clinet
      .get( url, { headers } )
      .then((ress) => {
        return ress;
      })
      .catch((err) => {
        return err;
      });
    return data;
  }
  gallery(value) {
    const endPoint = `${value}`;

    const data = clinet
      .get( baseDomain + endPoint )
      .then((ress) => {
        return ress;
      })
      .catch((err) => {
        return err;
      });
    return data;
  }
}

export default new GetData();
