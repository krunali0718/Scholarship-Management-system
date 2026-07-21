import axios from "axios";
import api from "./api";

export const registerUser = (user) => {
    return axios.post("http://localhost:8080/auth/register", user);
};

export const getUsers = () => {
    return api.get("/auth/getRegisteredUsers");
};