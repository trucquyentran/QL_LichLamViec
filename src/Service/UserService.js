import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8090/api/v1/user";

const getUsers = () => {
    return axios.get(`${USER_API_BASE_URL}/getall`);
};

const createUser = (user) => {
    return axios.post(`${USER_API_BASE_URL}/save`, user);
};

const getUserById = (userId) => {
    return axios.get(`${USER_API_BASE_URL}/search/${userId}`);
};

const updateUser = (user, userId) => {
    return axios.put(`${USER_API_BASE_URL}/edit/${userId}`, user);
};

const deleteUser = (userId) => {
    return axios.delete(`${USER_API_BASE_URL}/delete/${userId}`);
};

export {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
