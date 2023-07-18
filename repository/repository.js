import axios from "axios";

export const baseDomain = "https://soffhubbackend01.pythonanywhere.com/api/v1/";


const clinet = axios.create({
  baseURL: baseDomain,
  headers: "Header",
});

export default clinet;
