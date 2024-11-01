import axios from "axios";
import https from "https";

export const baseDomain = "https://admin.soffhub.uz/api/v1/";
// export const baseDomain = 'http://192.168.1.15:8000/api/v1/';

const cert = process.env.NEXT_PUBLIC_CLIENT_CERT.replace(/\\n/g, "\n");
const key = process.env.NEXT_PUBLIC_CLIENT_KEY.replace(/\\n/g, "\n");
const ca = process.env.NEXT_PUBLIC_ROOTCA_PEM.replace(/\\n/g, "\n");

export const httpsAgent = new https.Agent({
  cert,
  key,
  ca,
});

const clinet = axios.create({
  baseURL: baseDomain,
});

clinet.interceptors.request.use((config) => {
  config.httpsAgent = httpsAgent;

  return config;
});

export default clinet;
