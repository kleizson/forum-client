import axios from "axios";
import { auth } from "../config/fiorebase-config";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL_API,
};

const api = axios.create(config);

api.interceptors.request.use(async (config) => {
  const idToken = await auth.currentUser?.getIdToken();

  if (config.headers) config.headers["x-access-token"] = idToken as string;
  return config;
});

export default api;
