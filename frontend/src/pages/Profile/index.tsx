import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { PiCube } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { VscCircleFilled } from "react-icons/vsc";
// import styles from "./index.module.scss";

const ProfilePage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "Adam Vance",
    gender: "Male",
    email: "adam@gmail.com",
    phone: "9638527410",
    address: "A-807, Infolanze Tech, Empire Business Hub, Sola, Ahmedabad, 380060.",
  });

  const handleEditClick = () => {
    setIsPopupOpen(true);
  };

  const handleSaveClick = () => {
    setIsPopupOpen(false);
  };

  const handleCancelClick = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="mt-28 py-16 px-4">
      <div className="lg:px-32 md:px-24 px-0">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-7">
          <div>
            <div className="bg-white p-5 h-max rounded-lg">
              <div className="flex items-center">
                <div className="">
                  <img
                    className="w-20 rounded-full"
                    src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                    alt="User Profile"
                  />
                </div>
                <div className="ps-5">
                  <p className="text-xl font-bold">Hello,</p>
                  <p className="font-extrabold">Adam Vance</p>
                </div>
              </div>
              <div className="mt-7 border rounded-md p-5">
                <Link
                  to="/profile"
                  className="bg-[--main-color] border p-3 rounded-md flex items-center"
                >
                  <CgProfile className="text-4xl me-3" />
                  <div className="font-bold text-2xl">Profile</div>
                </Link>
                <Link
                  to="/order"
                  className="bg-[--main-color] border p-3 mt-3 rounded-md flex items-center"
                >
                  <PiCube className="text-4xl me-3" />
                  <div className="font-bold text-2xl">Order</div>
                </Link>
                <Link
                  to="/wishlist"
                  className="bg-[--main-color] border p-3 mt-3 rounded-md flex items-center"
                >
                  <FaRegHeart className="text-4xl me-3" />
                  <div className="font-bold text-2xl">Wishlist</div>
                </Link>
                <Link
                  to="/"
                  className="bg-[--main-color] border p-3 mt-3 rounded-md flex items-center"
                >
                  <TbLogout className="text-4xl me-3" />
                  <div className="font-bold text-2xl">Logout</div>
                </Link>
              </div>
            </div>
            <div className="bg-white mt-7 p-5 h-max rounded-lg">
              <div className="font-bold text-xl pb-4">Legal</div>
              <div>
                <Link
                  to="/terms"
                  className="bg-[--main-color] border p-3 mt-3 rounded-md flex items-center"
                >
                  <div className="font-bold text-2xl">Terms of Use</div>
                </Link>
              </div>
              <div>
                <Link
                  to="/privacy-policy"
                  className="bg-[--main-color] border p-3 mt-3 rounded-md flex items-center"
                >
                  <div className="font-bold text-2xl">Privacy Policy</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-3 bg-white rounded-lg p-10 py-16">
            <div className="mb-16 text-center">
              <p className="text-5xl font-bold">Personal Information</p>
              <p className="font-semibold text-2xl pt-3">
                Hey there! Fill in your details for a personalized E-commerce shopping
                experience.
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <div className="bg-[--main-color] p-4 border rounded-md font-semibold text-2xl">
                Name: {userDetails.name}
              </div>
              <div className="bg-[--main-color] p-4 border rounded-md font-semibold text-2xl mt-7">
                Gender: {userDetails.gender}
              </div>
              <div className="bg-[--main-color] p-4 border rounded-md font-semibold text-2xl mt-7">
                Email: {userDetails.email}
              </div>
              <div className="bg-[--main-color] p-4 border rounded-md font-semibold text-2xl mt-7">
                Phone: {userDetails.phone}
              </div>
              <div className="bg-[--main-color] p-4 border rounded-md font-semibold text-2xl mt-7">
                Address: {userDetails.address}
              </div>
            </div>
            <div className="text-center">
              <button
                className="bg-black text-white font-bold text-2xl rounded-md py-3 px-16 mt-10 hover:bg-white hover:text-black outline"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>
            <div className="pt-10">
              <div className="text-3xl font-extrabold">FAQs</div>
              <div className="pt-6">
                <p className="text-2xl font-extrabold pb-2 flex items-center">
                  <VscCircleFilled className="me-1" />
                  What happens when I update my email address (or mobile number)?
                </p>
                <p className="text-2xl font-semibold">
                  Your login email id (or mobile number) changes, likewise.
                  You'll receive all your account related communication on your
                  updated email address (or mobile number).
                </p>
              </div>
              <div className="pt-6">
                <p className="text-2xl font-extrabold pb-2 flex items-center">
                  <VscCircleFilled className="me-1" />
                  What happens to my existing e-commerce account when I update my email address (or mobile number)?
                </p>
                <p className="text-2xl font-semibold">
                  Updating your email address (or mobile number) doesn't
                  invalidate your account. Your account remains fully functional.
                  You'll continue seeing your Order history, saved information
                  and personal details.
                </p>
              </div>
              <div className="pt-6">
                <p className="text-2xl font-extrabold pb-2 flex items-center">
                  <VscCircleFilled className="me-1" />
                  Does my Seller account get affected when I update my email address?
                </p>
                <p className="text-2xl font-semibold">
                  Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white p-8 w-[500px] max-w-2xl rounded-lg shadow-lg">
            <div className="mb-5">
              <label className="block text-gray-700 text-xl font-extrabold" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full font-bold py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-xl font-extrabold" htmlFor="gender">
                Gender
              </label>
              <input
                type="text"
                name="gender"
                value={userDetails.gender}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full font-bold py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-xl font-extrabold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full font-bold py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-xl font-extrabold" htmlFor="phone">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full font-bold py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-xl font-extrabold" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full font-bold py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCancelClick}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
