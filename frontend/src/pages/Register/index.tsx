import React, { useState } from "react";
import styles from "./index.module.scss";
import { FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { register } from "../../features/auth/authSlice";
import { NavLink } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { MdKey, MdVisibilityOff, MdVisibility } from "react-icons/md";
import img2 from "./../../images/shopping-bag_7610669.png";
import { IoPerson } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phonenumber: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(register(formData)).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="mt-28">
      <div className={`px-4 py-20  ${styles.maincomponent}`}>
        <div>
          <div className="shadow-lg rounded-xl max-w-2xl bg-white mx-auto lg:p-12 lg:py-20 md:p-12 md:py-20 p-6 py-10">
            <div className="flex items-center justify-center">
              <img className="w-20 me-3" src={img2} alt="Flowy" />
              <span className="text-5xl font-bold">Flowy</span>
            </div>
            <div className="text-4xl font-bold text-center pt-10">
              Create an Account
            </div>
            <div className="text-center font-semibold pt-3 text-2xl text-gray-600">
              Setup a new account in a minutes.{" "}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group mt-8">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <span className="text-gray-500 sm:text-sm">
                      <IoPerson className="text-xl" />
                    </span>
                  </div>
                  <input
                    type="text"
                    value={formData.name} onChange={handleChange}
                    name="name"
                    id="name"
                    className="block w-full bg-[--main-color] text-xl rounded-full border-0 py-4 ps-14 text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <span className="text-gray-500 sm:text-sm">
                      <SiGmail className="text-xl" />
                    </span>
                  </div>
                  <input
                    type="email"
                    value={formData.email} onChange={handleChange}
                    name="email"
                    id="email"
                    className="block w-full bg-[--main-color] text-xl rounded-full border-0 py-4 ps-14 text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <span className="text-gray-500 sm:text-sm">
                      <IoIosCall className="text-2xl" />
                    </span>
                  </div>
                  <input
                    type="text"
                    value={formData.phonenumber} onChange={handleChange}
                    name="phonenumber"
                    id="phonenumber"
                    className="block w-full bg-[--main-color] text-xl rounded-full border-0 py-4 ps-14 text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    placeholder="Enter Your Number"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-5">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <span className="text-gray-500 sm:text-sm">
                      <MdKey className="text-2xl" />
                    </span>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password} onChange={handleChange}
                    name="password"
                    id="password"
                    className="block w-full bg-[--main-color] text-xl rounded-full border-0 py-4 ps-14 text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                    placeholder="Enter Your Password"
                    required
                  />
                  <span
                    className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <MdVisibility className="text-2xl" />
                    ) : (
                      <MdVisibilityOff className="text-2xl" />
                    )}
                  </span>
                </div>
              </div>
              <div className="CTA text-center pt-10 ">
                <input
                  className="py-3 px-16 rounded-full font-semibold hover:bg-white border-2 border-black hover:text-black bg-black text-white hover:cursor-pointer"
                  type="submit"
                  value={"Register"}
                  // value={isLoading ? "Loading..." : "Login"}
                  // disabled={isLoading}
                />
                <div className="pt-10 flex justify-center">
                  Already have an account?&nbsp;
                  <NavLink
                    to={`/login`}
                    className="hover:cursor-pointer hover:text-gray-500"
                  >
                    Login Here
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;



        {/* <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <label>
            First Name:
            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            Last Name:
            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            Street:
            <input type="text" name="street" value={formData.street} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            State:
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            Zipcode:
            <input type="text" name="zipcode" value={formData.zipcode} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.formItem}>
          <label>
            Phone Number:
            <input type="text" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">Register</button>
      </form> */}
