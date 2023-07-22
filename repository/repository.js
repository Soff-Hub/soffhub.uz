import axios from "axios";

export const baseDomain = "http://3.88.192.131/api/v1/";


const clinet = axios.create({
  baseURL: baseDomain,
  headers: "Header",
});

export default clinet;
