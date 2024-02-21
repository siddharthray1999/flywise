import React, { Children } from "react";
import vector from "../../src/Svg/Vector.png";
import user from "../Svg/mdi_user.png";
import product from "../Svg/mdi_cart.png";
import subcat from "../Svg/dashicons_category (1).png";
import cat from "../Svg/material-symbols_category-rounded.png";
import onetimeorder from "../Svg/solar_bag-2-bold.png";
import subbag from "../Svg/solar_bag-check-bold (1).png";
import welcomebar from "../Svg/welcomebar.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import banner from "../Svg/solar_gallery-bold.png";
import privacy from "../Svg/material-symbols_privacy-tip.png";
import help from "../Svg/gridicons_help.png";
import term from "../Svg/fa-solid_fan.png";
import coupon from "../Svg/mdi_coupon.png";
import aboutus from "../Svg/fluent_contact-card-16-filled.png";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between">
      <div className="bg-[#00AB7F] w-2/12 h-[100%]">
        <div className="text-center text-white text-2xl pt-10">ADMIN PANEL</div>
        <ul className="">
          <Link to="/">
            <li
              className={`flex pl-[50px] pt-[12px] pb-[12px] mt-10 items-center cursor-pointer ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <img src={vector} alt="" />

              <span className="text-white ml-2 font-semibold ">Dashboard</span>
            </li>
          </Link>

          <Link to="/userlist">
            <li
              className={`flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer ${
                location.pathname === "/userlist" ? "active" : ""
              }`}
            >
              <img src={user} alt="" />

              <div className="text-white ml-2 font-semibold">User List</div>
            </li>
          </Link>
          <Link to="/category">
            <li
              className={`flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer ${
                location.pathname === "/category" ? "active" : ""
              }`}
            >
              <img src={cat} alt="" />

              <span className="text-white ml-2 font-semibold">Category</span>
            </li>
          </Link>
          <Link to="/Subcategorypage">
            <li
              className={`flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer ${
                location.pathname === "/Subcategorypage" ? "active" : ""
              }`}
            >
              <img src={subcat} alt="" />

              <span className="text-white ml-2 font-semibold">
                Sub- Category
              </span>
            </li>
          </Link>
          <Link to="/productpage">
            <li
              className={`flex pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer ${
                location.pathname === "/productpage" ? "active" : ""
              }`}
            >
              <img src={product} alt="" />

              <span className="text-white ml-2 font-semibold">Product</span>
            </li>
          </Link>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE]">
            <img src={onetimeorder} alt="" />

            <span className="text-white ml-2 font-semibold">
              One Time Order
            </span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE]">
            <img src={subbag} alt="" />

            <span className="text-white ml-2 font-semibold">
              Subscribed Order
            </span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE]">
            <img src={cat} alt="" />

            <span className="text-white ml-2 font-semibold">
              Unconfirmed Order
            </span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE]">
            <img src={help} alt="" />

            <span className="text-white ml-2 font-semibold">Help</span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE]">
            <img src={banner} alt="" />

            <span className="text-white ml-2 font-semibold">Banner</span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE]">
            <img src={term} alt="" />

            <span className="text-white ml-2 font-semibold">Terms</span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE] ">
            <img src={privacy} alt="" />

            <span className="text-white ml-2 font-semibold">
              Privacy Policy
            </span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE] ">
            <img src={coupon} alt="" />

            <span className="text-white ml-2 font-semibold">Coupon</span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer  hover:bg-[#047DCE]">
            <img src={aboutus} alt="" />

            <span className="text-white ml-2 font-semibold">About Us</span>
          </li>
          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE] ">
            <img src={cat} alt="" />

            <span className="text-white ml-2 font-semibold">Contact</span>
          </li>

          <li className="flex  pl-[50px] pt-[12px] pb-[12px] items-center cursor-pointer hover:bg-[#047DCE] ">
            <img src={cat} alt="" />

            <span className="text-white ml-2 font-semibold">Category</span>
          </li>
        </ul>
      </div>
      <div className="bg-[#00AB7F] w-4/5 h-20 mr-5 mt-5 flex flex-col ">
        <div className="flex justify-between items-center mt-7">
          <div className="ml-10">
            <img src={welcomebar} alt="" />
          </div>
          <div className="font-semibold text-white mr-10">WELCOME</div>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
