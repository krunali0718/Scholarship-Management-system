import axios from "axios";

export const registerUser = (user) => {
    return axios.post("http://localhost:8080/auth/register", user);
};

export const getUsers = () => {
    return axios.get("http://localhost:8080/auth/getRegisteredUsers");
};