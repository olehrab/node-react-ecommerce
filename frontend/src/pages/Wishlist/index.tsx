import React from "react";
import { MdDelete } from "react-icons/md";
// import styles from "./index.module.scss";

const WishlistPage: React.FC = () => {
  return (
    <div className="mt-28 py-16 px-4">
      <div className="lg:px-32 md:px-24 px-0">
        <div className="text-5xl font-extrabold text-center py-14">My Wishlist</div>
        <div className="bg-white p-16">
         <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">

            <div className="border">
              <img className="w-[300px] h-[350px] border-b" src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740" alt="" />
              <div className="text-center px-5 pt-5">
                <p className="text-xl">Buda Jeans Co</p>
                <p className="text-xl font-bold py-2">Boys Tropical Print Shirt & Shorts Set</p>
                <p className="font-extrabold text-2xl">$12</p>
              </div>
              <div className="flex items-center gap-7 p-5 px-7">
                <div className="w-full bg-[--main-color] p-3.5 text-center text-xl font-extrabold rounded-lg hover:cursor-pointer hover:bg-gray-200">Add to Cart</div>
                <div className="bg-red-600 p-3 rounded-lg hover:cursor-pointer"><MdDelete className="text-3xl text-white" /></div>
              </div>
            </div>

            <div className="border">
              <img className="w-[300px] h-[350px] border-b" src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740" alt="" />
              <div className="text-center px-5 pt-5">
                <p className="text-xl">Buda Jeans Co</p>
                <p className="text-xl font-bold py-2">Boys Tropical Print Shirt & Shorts Set</p>
                <p className="font-extrabold text-2xl">$15</p>
              </div>
              <div className="flex items-center gap-7 p-5 px-7">
                <div className="w-full bg-[--main-color] p-3.5 text-center text-xl font-extrabold rounded-lg hover:cursor-pointer hover:bg-gray-200">Add to Cart</div>
                <div className="bg-red-600 p-3 rounded-lg hover:cursor-pointer"><MdDelete className="text-3xl text-white" /></div>
              </div>
            </div>

            <div className="border">
              <img className="w-[300px] h-[350px] border-b" src="https://img.freepik.com/premium-photo/white-blouse-isolated-white_392895-310758.jpg?w=740" alt="" />
              <div className="text-center px-5 pt-5">
                <p className="text-xl">Buda Jeans Co</p>
                <p className="text-xl font-bold py-2">Boys Tropical Print Shirt & Shorts Set</p>
                <p className="font-extrabold text-2xl">$18</p>
              </div>
              <div className="flex items-center gap-7 p-5 px-7">
                <div className="w-full bg-[--main-color] p-3.5 text-center text-xl font-extrabold rounded-lg hover:cursor-pointer hover:bg-gray-200">Add to Cart</div>
                <div className="bg-red-600 p-3 rounded-lg hover:cursor-pointer"><MdDelete className="text-3xl text-white" /></div>
              </div>
            </div>

          </div>
          </div>
      </div>
    </div>
  );
};

export default WishlistPage;
