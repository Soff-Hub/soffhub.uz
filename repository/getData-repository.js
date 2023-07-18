import clinet, { baseDomain } from "./repository";

class GetData {
  getPromise(value) {
    const endPoint = `${value}`;
    const data = clinet
      .get(baseDomain + endPoint)
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
