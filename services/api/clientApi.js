import axios from "axios";
import { API_URL } from "../../config/api";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export { axiosInstance as clientApi };