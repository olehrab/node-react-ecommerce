import React, { useState } from "react";
import styles from "./index.module.scss";
import img2 from "./../../images/shopping-bag_7610669.png";
import { MdKey, MdVisibilityOff, MdVisibility } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ResetPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="mt-28 py-10 px-4">
      <div className={`py-20 ${styles.maincomponent}`}>
        <div className="shadow-lg rounded-xl max-w-2xl bg-white mx-auto lg:p-12 lg:py-20 md:p-12 md:py-20 p-6 py-10">
          <div className="flex items-center justify-center">
            <img className="w-20 me-3" src={img2} alt="Flowy" />
            <span className="text-5xl font-bold">Flowy</span>
          </div>
          <div className="text-4xl font-bold text-center pt-10">
            Reset Your Password
          </div>
          <div className="text-center font-semibold pt-3 text-2xl text-gray-600">
            Please enter your new password and confirm password.
          </div>
          <form>
            <div className="form-group mt-8">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                  <span className="text-gray-500 sm:text-sm">
                    <MdKey className="text-2xl" />
                  </span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="loginPassword"
                  id="loginPassword"
                  className="block w-full bg-[--main-color] text-xl rounded-full border-0 py-4 ps-14 text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="Enter Your New Password"
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
            <div className="form-group mt-8">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                  <span className="text-gray-500 sm:text-sm">
                    <MdKey className="text-2xl" />
                  </span>
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="loginPassword"
                  id="loginPassword"
                  className="block w-full bg-[--main-color] text-xl rounded-full border-0 py-4 ps-14 text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="Enter Your Confirm Password"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
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
                //   value={isLoading ? "Loading..." : "Login"}
                //   disabled={isLoading}
              />
              <div className=" pt-10 flex justify-center">
                Back to&nbsp;
                <NavLink
                  to={`/login`}
                  className="hover:cursor-pointer hover:text-gray-500"
                >
                  Login
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPage;
