import axiosConfig from "../../app/axiosConfig";
import { Login } from "../../types/auth";
import { Register } from "../../types/register"

const login = async (userData: Login) => {
  const response = await axiosConfig.post("auth/login", userData);

  return response.data;
};

const register = async (userData: Register) => {
  const response = await axiosConfig.post("auth/register", userData);

  return response.data;
};

const getUser = async (userId: number) => {
  const response = await axiosConfig.get(`users/${userId}`);

  if (response.data) {
    localStorage.setItem("userDetails", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("userDetails");
};

const authService = {
  getUser,
  logout,
  login,
  register,
};

export default authService;
