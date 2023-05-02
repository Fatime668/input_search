import axios from "axios";
import { baseUrl } from "./baseUrl";

const instance = axios.create({
  baseURL: baseUrl,
});
export const getData = async () => {
  return await instance.get();
};
