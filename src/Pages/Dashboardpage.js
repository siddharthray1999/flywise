import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";



const Dashboardpage = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-evenly">
        <div className="bg-[#3C335D] w-[45%] h-[150px] rounded-2xl shadow-2xl flex justify-around items-center ">
          <div className="flex flex-col">
            <div className="text-white text-xl">All Product</div>
            <div className="text-white font-extrabold text-5xl">61</div>
          </div>

          <div>
            <FaShoppingCart className="text-white" size={60} />
          </div>
        </div>
        <div className="bg-[#023B5B] w-[45%] h-[150px] rounded-2xl shadow-2xl flex justify-around items-center ">
          <div className="flex flex-col">
            <div className="text-white text-xl">All Category</div>
            <div className="text-white font-extrabold text-5xl">61</div>
          </div>

          <div>
            <MdCategory className="text-white" size={60} />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-5">
        <div className="bg-[#72909E] w-[45%] h-[150px] rounded-2xl shadow-2xl flex justify-around items-center ">
          <div className="flex flex-col">
            <div className="text-white text-xl">All Sub- Category</div>
            <div className="text-white font-extrabold text-5xl">61</div>
          </div>

          <div>
            <MdCategory className="text-white" size={60} />
          </div>
        </div>

        <div className="bg-[#2F6967] w-[45%] h-[150px] rounded-2xl shadow-2xl flex justify-around items-center ">
          <div className="flex flex-col">
            <div className="text-white text-xl">All User</div>
            <div className="text-white font-extrabold text-5xl">61</div>
          </div>

          <div>
            <FaUser className="text-white" size={60} />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-5">
        <div className="bg-[#04649B] w-[45%] h-[150px] rounded-2xl shadow-2xl flex justify-around items-center ">
          <div className="flex flex-col">
            <div className="text-white text-xl">All Sub- Category</div>
            <div className="text-white font-extrabold text-5xl">61</div>
          </div>

          <div>

            <FaShoppingCart className="text-white" size={60} />
          </div>
        </div>
        <div className="bg-[#FF9B3F] w-[45%] h-[150px] rounded-2xl shadow-2xl flex justify-around items-center ">
          <div className="flex flex-col">
            <div className="text-white text-xl">Not Delivered</div>
            <div className="text-white font-extrabold text-5xl">61</div>
          </div>

          <div>
            <TbTruckDelivery className="text-white" size={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
