import { useEffect, useState } from "react";

import { VscSettings } from "react-icons/vsc";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import axios from "axios";
const Userlistpage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showNewCustomer, setShowNewCustomer] = useState(false);

  const toggleNewcustomerModel = () => {
    setShowNewCustomer(!showNewCustomer);
  };
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-[#FFFFFF] w-[95%] mt-10  shadow-2xl h-[500px] ml-7 relative table-fixed">
      <div className="flex justify-between items-center ml-10">
        <div className="text-xl font-bold ">All User’s (Total : 08)</div>
        <div>
          <button
            className="bg-[#047DCE] m-10 text-white w-[180px] h-[40px] font-semibold"
            onClick={toggleModal}
          >
            Send Notification
          </button>
          <button
            className="bg-[#047DCE] text-white mr-7  w-[180px] h-[40px] font-semibold"
            onClick={toggleNewcustomerModel}
          >
            Create New
          </button>
        </div>
      </div>
      <div className="flex justify-evenly items-center ">
        <VscSettings size={30} />
        <input
          placeholder="Start typing to search for user"
          className="w-11/12 h-[40px] outline-gray-600 bg-white border border-slate-300 p-4"
        />
      </div>

      {/* <hr className="ml-8 mr-8 mt-5" /> */}
      <div className="flex justify-center mt-5 ml-5 mr-5">
        <table className="border-separate border border-slate-400">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                S.NO
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                Name
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                Phone <br />
                Number
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                Email
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                Payment
                <br /> Mode
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                Created At
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                Status
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                Delivery <br /> Boy
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 ">
                Address Change
                <br /> Request
              </th>
              <th className="px-4 py-2 text-left border border-slate-300 "></th>
            </tr>
          </thead>

          <tbody>

              <tr>
              <td className="px-4 py-2 border border-slate-300 ">#1</td>
              <td className="px-4 py-2 border border-slate-300 ">name</td>
              <td className="px-4 py-1 border border-slate-300 ">4932492982</td>
              <td className="px-4 py-1 border border-slate-300 ">
                maria@gmail.com
              </td>
              <td className="text-[#00AB7F] px-4 py-1 border border-slate-300 ">
                prepaid
              </td>
              <td className="px-4 py-1 border border-slate-300 ">2023-12-10</td>
              <td className="text-[#00AB7F] px-4 py-1 border border-slate-300 ">
                Active
              </td>
              <td className="px-4 py-1 border border-slate-300 ">Suraj</td>
              <td className="px-4 py-1 border border-slate-300 ">
                <button className="bg-[#047DCE] text-white mr-10  w-[100px] h-[40px] font-semibold">
                  Active
                </button>
              </td>

              <td className="px-2 py-2 border border-slate-300 ">
                <MdOutlineDownloadForOffline
                  style={{ color: "#CEA204" }}
                  size={30}
                />
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div>
        <div>
          {showModal && (
            <div className="shadow-2xl w-[500px] h-[400px] absolute mt-[-33%] ml-[27%] bg-white ">
              <div className="flex justify-between ml-7 mr-10 mt-10">
                <div className="text-xl font-semibold">send notification</div>
                <IoIosCloseCircle
                  onClick={toggleModal}
                  size={40}
                  className="cursor-pointer"
                />
              </div>
              <span className="ml-7">Notification</span>
              <br />
              <input className="w-[450px] h-[200px] ml-7 mr-10 bg-white border border-slate-300"></input>
              <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
                submit
              </button>
            </div>
          )}
        </div>

        <div>
          {showNewCustomer && (
            <div className="shadow-2xl w-[900px] h-[700px] absolute mt-[-33%] ml-[10%] bg-white ">
              <div className="flex justify-between ml-7 mr-10 mt-10">
                <div className="text-xl font-semibold">Add New Customer</div>
              </div>
              <hr className="mt-2" />
              <form className="mt-2">
                <label className="ml-8 text-xl">First name</label>
                <br />
                <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
              </form>
              <hr className="mt-2" />

              <form className="mt-2">
                <label className="ml-8 text-xl">Last name</label>
                <br />
                <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
              </form>
              <hr className="mt-2" />

              <form className="mt-2">
                <label className="ml-8 text-xl">Phone Number</label>
                <br />
                <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
              </form>
              <hr className="mt-2" />
              <form className="mt-2">
                <label className="ml-8 text-xl">Email</label>
                <br />
                <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
              </form>
              <hr className="mt-2" />
              <form className="mt-2">
                <label className="ml-8 text-xl">Address</label>
                <br />
                <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
              </form>
              <hr className="mt-2" />
              <form className="mt-2">
                <label className="ml-8 text-xl">Delivery boy</label>
                <br />
                <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
              </form>
              <div className="flex justify-between mr-8">
                <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
                  submit
                </button>
                <button
                  className="bg-[#047DCE] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5"
                  onClick={toggleNewcustomerModel}
                >
                  Back
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  
  );
};

export default Userlistpage;
