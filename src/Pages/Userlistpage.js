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
    // <div className="bg-[#FFFFFF] w-[95%] mt-10  shadow-2xl h-[500px] ml-7 relative table-fixed">
    //   <div className="flex justify-between items-center ml-10">
    //     <div className="text-xl font-bold ">All User’s (Total : 08)</div>
    //     <div>
    //       <button
    //         className="bg-[#047DCE] m-10 text-white w-[180px] h-[40px] font-semibold"
    //         onClick={toggleModal}
    //       >
    //         Send Notification
    //       </button>
    //       <button
    //         className="bg-[#047DCE] text-white mr-7  w-[180px] h-[40px] font-semibold"
    //         onClick={toggleNewcustomerModel}
    //       >
    //         Create New
    //       </button>
    //     </div>
    //   </div>
    //   <div className="flex justify-evenly items-center ">
    //     <VscSettings size={30} />
    //     <input
    //       placeholder="Start typing to search for user"
    //       className="w-11/12 h-[40px] outline-gray-600 bg-white border border-slate-300 p-4"
    //     />
    //   </div>

    //   {/* <hr className="ml-8 mr-8 mt-5" /> */}
    //   <div className="flex justify-center mt-5 ml-5 mr-5">
    //     <table className="border-separate border border-slate-400">
    //       <thead>
    //         <tr>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             S.NO
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             Name
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             Phone <br />
    //             Number
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             Email
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             Payment
    //             <br /> Mode
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             Created At
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             Status
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             Delivery <br /> Boy
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 ">
    //             Address Change
    //             <br /> Request
    //           </th>
    //           <th className="px-4 py-2 text-left border border-slate-300 "></th>
    //         </tr>
    //       </thead>

    //       <tbody>

    //           <tr>
    //           <td className="px-4 py-2 border border-slate-300 ">#1</td>
    //           <td className="px-4 py-2 border border-slate-300 ">name</td>
    //           <td className="px-4 py-1 border border-slate-300 ">4932492982</td>
    //           <td className="px-4 py-1 border border-slate-300 ">
    //             maria@gmail.com
    //           </td>
    //           <td className="text-[#00AB7F] px-4 py-1 border border-slate-300 ">
    //             prepaid
    //           </td>
    //           <td className="px-4 py-1 border border-slate-300 ">2023-12-10</td>
    //           <td className="text-[#00AB7F] px-4 py-1 border border-slate-300 ">
    //             Active
    //           </td>
    //           <td className="px-4 py-1 border border-slate-300 ">Suraj</td>
    //           <td className="px-4 py-1 border border-slate-300 ">
    //             <button className="bg-[#047DCE] text-white mr-10  w-[100px] h-[40px] font-semibold">
    //               Active
    //             </button>
    //           </td>

    //           <td className="px-2 py-2 border border-slate-300 ">
    //             <MdOutlineDownloadForOffline
    //               style={{ color: "#CEA204" }}
    //               size={30}
    //             />
    //           </td>
    //         </tr>

    //       </tbody>
    //     </table>
    //   </div>

    //   <div>
    //     <div>
    //       {showModal && (
    //         <div className="shadow-2xl w-[500px] h-[400px] absolute mt-[-33%] ml-[27%] bg-white ">
    //           <div className="flex justify-between ml-7 mr-10 mt-10">
    //             <div className="text-xl font-semibold">send notification</div>
    //             <IoIosCloseCircle
    //               onClick={toggleModal}
    //               size={40}
    //               className="cursor-pointer"
    //             />
    //           </div>
    //           <span className="ml-7">Notification</span>
    //           <br />
    //           <input className="w-[450px] h-[200px] ml-7 mr-10 bg-white border border-slate-300"></input>
    //           <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
    //             submit
    //           </button>
    //         </div>
    //       )}
    //     </div>

    //     <div>
    //       {showNewCustomer && (
    //         <div className="shadow-2xl w-[900px] h-[700px] absolute mt-[-33%] ml-[10%] bg-white ">
    //           <div className="flex justify-between ml-7 mr-10 mt-10">
    //             <div className="text-xl font-semibold">Add New Customer</div>
    //           </div>
    //           <hr className="mt-2" />
    //           <form className="mt-2">
    //             <label className="ml-8 text-xl">First name</label>
    //             <br />
    //             <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
    //           </form>
    //           <hr className="mt-2" />

    //           <form className="mt-2">
    //             <label className="ml-8 text-xl">Last name</label>
    //             <br />
    //             <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
    //           </form>
    //           <hr className="mt-2" />

    //           <form className="mt-2">
    //             <label className="ml-8 text-xl">Phone Number</label>
    //             <br />
    //             <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
    //           </form>
    //           <hr className="mt-2" />
    //           <form className="mt-2">
    //             <label className="ml-8 text-xl">Email</label>
    //             <br />
    //             <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
    //           </form>
    //           <hr className="mt-2" />
    //           <form className="mt-2">
    //             <label className="ml-8 text-xl">Address</label>
    //             <br />
    //             <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
    //           </form>
    //           <hr className="mt-2" />
    //           <form className="mt-2">
    //             <label className="ml-8 text-xl">Delivery boy</label>
    //             <br />
    //             <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
    //           </form>
    //           <div className="flex justify-between mr-8">
    //             <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
    //               submit
    //             </button>
    //             <button
    //               className="bg-[#047DCE] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5"
    //               onClick={toggleNewcustomerModel}
    //             >
    //               Back
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-20">
      <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Name
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              State
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Role
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900">
              Team
            </th>
            <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100 border-t border-gray-100">
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="relative h-10 w-10">
                <img
                  class="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Product
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                  Develop
                </span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex justify-end gap-4">
                <a x-data="{ tooltip: 'Delete' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </a>
                <a x-data="{ tooltip: 'Edite' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="relative h-10 w-10">
                <img
                  class="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Product
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                  Develop
                </span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex justify-end gap-4">
                <a x-data="{ tooltip: 'Delete' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </a>
                <a x-data="{ tooltip: 'Edite' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="relative h-10 w-10">
                <img
                  class="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Product
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                  Develop
                </span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex justify-end gap-4">
                <a x-data="{ tooltip: 'Delete' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </a>
                <a x-data="{ tooltip: 'Edite' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="relative h-10 w-10">
                <img
                  class="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Product
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                  Develop
                </span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex justify-end gap-4">
                <a x-data="{ tooltip: 'Delete' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </a>
                <a x-data="{ tooltip: 'Edite' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
          <tr class="hover:bg-gray-50">
            <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
              <div class="relative h-10 w-10">
                <img
                  class="h-full w-full rounded-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
              </div>
              <div class="text-sm">
                <div class="font-medium text-gray-700">Steven Jobs</div>
                <div class="text-gray-400">jobs@sailboatui.com</div>
              </div>
            </th>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                Active
              </span>
            </td>
            <td class="px-6 py-4">Product Designer</td>
            <td class="px-6 py-4">
              <div class="flex gap-2">
                <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Design
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Product
                </span>
                <span class="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                  Develop
                </span>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex justify-end gap-4">
                <a x-data="{ tooltip: 'Delete' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </a>
                <a x-data="{ tooltip: 'Edite' }" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                    x-tooltip="tooltip"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Userlistpage;
