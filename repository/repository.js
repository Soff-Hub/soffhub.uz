import axios from "axios";

export const baseDomain = process.env.BASE_URL;

const clinet = axios.create({
  baseURL: baseDomain,
  headers: "Header",
});

export default clinet;
