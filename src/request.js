import axios from "axios";

const BASE_URL = `${process.env.REACT_APP_BASE_URL}/userapp`
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});