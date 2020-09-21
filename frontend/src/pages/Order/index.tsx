import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiRefund2Line } from "react-icons/ri";
import { BsBagX } from "react-icons/bs";
import { VscCircleFilled } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";
// import styles from "./index.module.scss";

const OrderPage: React.FC = () => {
  return (
    <div className="mt-28 py-16 px-4">
      <div className="lg:px-32 md:px-24 px-0">
        <div className="text-center text-5xl font-extrabold py-16">
          Need Help with Orders?
        </div>
        <div className="bg-white p-14 rounded-md">
          <div className="text-center pb-14 text-2xl font-bold">
            Select Your Order
          </div>
          {/* <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            <div className="border bg-[--main-color] p-3 shadow-lg rounded-md hover:cursor-pointer">
              <div className="flex items-center text-green-600 border-b pb-2">
                <IoMdCheckmarkCircleOutline className="text-2xl me-2" />
                <p className="font-bold text-2xl">Successfully Delivered</p>
              </div>
              <div className="text-xl font-semibold pt-3">
                Order ID: FN2854505240
              </div>
              <div className="pt-4 p-2">
                <img
                  className="w-[300px] h-[350px] rounded-md"
                  src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740"
                  alt=""
                />
              </div>
            </div>

            <div className="border bg-[--main-color] p-3 shadow-lg rounded-md hover:cursor-pointer">
              <div className="flex items-center text-blue-600 border-b pb-2">
                <RiRefund2Line className="text-2xl me-2" />
                <p className="font-bold text-2xl">Refund initiated</p>
              </div>
              <div className="text-xl font-semibold pt-3">
                Order ID: RN2854505442
              </div>
              <div className="pt-4 p-2">
                <img
                  className="w-[300px] h-[350px] rounded-md"
                  src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740"
                  alt=""
                />
              </div>
            </div>

            <div className="border bg-[--main-color] p-3 shadow-lg rounded-md hover:cursor-pointer  ">
              <div className="flex items-center text-red-600 border-b pb-2">
                <BsBagX className="text-2xl me-2" />
                <p className="font-bold text-2xl">Cancelled</p>
              </div>
              <div className="text-xl font-semibold pt-3">
                Order ID: DD285458511
              </div>
              <div className="pt-4 p-2">
                <img
                  className="w-[300px] h-[350px] rounded-md"
                  src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740"
                  alt=""
                />
              </div>
            </div>
          </div> */}
          <div className="bg-[--main-color] p-10">
            <div className="flex items-center">
              <div className="pe-2">
                <IoMdCheckmarkCircleOutline className="text-5xl text-green-600 me-2" />
              </div>
              <div className="">
                <p className="text-green-600 font-extrabold">Delivered</p>
                <p className="text-xl font-bold">On Mon, 20 May</p>
              </div>
            </div>
            <div className="flex items-center bg-white mt-5 p-5">
              <div className="pe-10">
                <img
                  className="w-36"
                  src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740"
                  alt=""
                />
              </div>
              <div>
                <p>T-shirt</p>
                <p>Men Peforations T-shirt</p>
                <p>Size: 8</p>
              </div>
            </div>
            <div className="bg-white mt-2 p-5">
              <div className="flex items-center">
                <VscCircleFilled className="text-xl" />
                <p className="text-2xl font-bold">
                  Exchange/Return window closed on 3 Jun
                </p>
              </div>
            </div>
            <div className="bg-white mt-2 p-5">
              <div className="flex items-center gap-3 ps-2 text-3xl">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="font-semibold text-2xl pt-2">
                Rate & Review to{" "}
                <span className="font-extrabold">earn E-com Credit</span>
              </div>
            </div>
          </div>

          <div className="bg-[--main-color] mt-7 p-10">
            <div className="flex items-center">
              <div className="pe-2">
                <RiRefund2Line className="text-5xl text-blue-600 me-2" />
              </div>
              <div className="">
                <p className="text-blue-600 font-extrabold">Refund Initiated</p>
                <p className="text-xl font-bold">On Mon, 20 May</p>
              </div>
            </div>
            <div className="flex items-center bg-white mt-5 p-5">
              <div className="pe-10">
                <img
                  className="w-36"
                  src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740"
                  alt=""
                />
              </div>
              <div>
                <p>T-shirt</p>
                <p>Men Peforations T-shirt</p>
                <p>Size: 8</p>
              </div>
            </div>
            <div className="bg-white mt-2 p-5">
              <div className="flex items-center">
                <VscCircleFilled className="text-xl" />
                <p className="text-2xl font-bold">
                  Exchange/Return window closed on 3 Jun
                </p>
              </div>
            </div>
            <div className="bg-white mt-2 p-5">
              <div className="flex items-center gap-3 ps-2 text-3xl">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="font-semibold text-2xl pt-2">
                Rate & Review to{" "}
                <span className="font-extrabold">earn E-com Credit</span>
              </div>
            </div>
          </div>

          <div className="bg-[--main-color] mt-7 p-10">
            <div className="flex items-center">
              <div className="pe-2">
                <BsBagX className="text-5xl text-red-600 me-2" />
              </div>
              <div className="">
                <p className="text-red-600 font-extrabold">Cancelled</p>
                <p className="text-xl font-bold">On Mon, 20 May</p>
              </div>
            </div>
            <div className="flex items-center bg-white mt-5 p-5">
              <div className="pe-10">
                <img
                  className="w-36"
                  src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740"
                  alt=""
                />
              </div>
              <div>
                <p>T-shirt</p>
                <p>Men Peforations T-shirt</p>
                <p>Size: 8</p>
              </div>
            </div>
            <div className="bg-white mt-2 p-5">
              <div className="flex items-center">
                <VscCircleFilled className="text-xl" />
                <p className="text-2xl font-bold">
                  Exchange/Return window closed on 3 Jun
                </p>
              </div>
            </div>
            <div className="bg-white mt-2 p-5">
              <div className="flex items-center gap-3 ps-2 text-3xl">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="font-semibold text-2xl pt-2">
                Rate & Review to{" "}
                <span className="font-extrabold">earn E-com Credit</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderPage;
