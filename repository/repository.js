import axios from "axios";

export const baseDomain = 'https://admin.soffhub.uz/api/v1/';
// export const baseDomain = 'http://192.168.1.15:8000/api/v1/';


const clinet = axios.create({
  baseURL: baseDomain,
  headers: "Header",
});

export default clinet;
