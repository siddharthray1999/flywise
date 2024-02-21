import { useState, useEffect } from "react";
import milk from "../Svg/milk.png";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
const Subcategorypage = () => {
  const [addnewsubcategory, setAddnewsubcategory] = useState(false);
  const [editsubCategory, setEditsubcategory] = useState(false);
  const [subProduct, setSubproduct] = useState();

  const toggleEditsubCategory = () => {
    setEditsubcategory(!editsubCategory);
  };
  const toggleaddnewsub = () => {
    setAddnewsubcategory(!addnewsubcategory);
  };

  useEffect(() => {
    fetch(
      "https://chetan-project-backend.vercel.app/api/v1/catg/subcategory/get"
    )
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setSubproduct(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="bg-[#FFFFFF] w-[95%] mt-10  shadow-2xl h-full ml-7">
        <div className="flex justify-between items-center ml-10">
          <div className="text-xl font-bold ">
            All Sub-Category’s (Total : 06)
          </div>

          <button
            className="bg-[#047DCE] m-10 text-white w-[180px] h-[40px] font-semibold"
         onClick={toggleaddnewsub}
     
          >
            Add Sub-Category
          </button>
        </div>
        <hr className="ml-8 mr-8" />

        <table>
          <tr className="flex gap-[10rem] ml-[49px] mr-[49px]">
            <th>S.NO</th>
            <th>Image</th>
            <th>Name</th>
            <th>Parent Category</th>
            <th></th>
          </tr>
          <hr className="ml-8 mr-8" />

          {subProduct?.map((item) => (
            <>
              <tr className="flex gap-[9rem] ml-[49px] mr-[49px] mt-5 mb-5">
                <td>#1</td>
                <td className="w-[100px]">
                  <img src={item.image} alt="image" />
                </td>
                <td className="w-[100px]">{item.subCategory}</td>
                <td className="w-[100px]">{item.parentCategor}</td>
                <td className="flex cursor-pointer gap-9 w-[100px]">
                  <MdOutlineDeleteForever size={30} style={{ color: "red" }} />{" "}
                  <FiEdit3
                    size={30}
                    style={{ color: "#047DCE" }}
                    onClick={toggleEditsubCategory}
                  />
                </td>
              </tr>
              <hr className="ml-8 mr-8" />
            </>
          ))}
        </table>
      </div>
      <div>
        {addnewsubcategory && (
          <div className="shadow-2xl w-[500px] h-[400px] absolute mt-[-33%] ml-[27%] bg-white ">
            <div className="flex justify-between ml-7 mr-10 mt-10">
              <div className="text-xl font-semibold">
                Create New Sub-Category
              </div>
              <IoIosCloseCircle
                onClick={toggleaddnewsub}
                size={40}
                className="cursor-pointer"
              />
            </div>
            <label className="ml-7 text-xl">Name</label>
            <br />
            <input className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300  "></input>
            <label className="ml-7 text-xl">Image</label>
            <br />
            <input
              className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300  "
              type="file"
            ></input>
            <label className="ml-7 text-xl">Parent Category</label>
            <input className="w-[450px] h-[50px] ml-7 mr-10  bg-white border border-slate-300  "></input>

            <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
              submit
            </button>
          </div>
        )}
      </div>

      <div>
        {editsubCategory && (
          <div className="shadow-2xl w-[500px] h-[400px] absolute mt-[-33%] ml-[27%] bg-white ">
            <div className="flex justify-between ml-7 mr-10 mt-10">
              <div className="text-xl font-semibold">Edit New Sub-Category</div>
              <IoIosCloseCircle
                onClick={toggleEditsubCategory}
                size={40}
                className="cursor-pointer"
              />
            </div>
            <label className="ml-7 text-xl">Name</label>
            <br />
            <input
              className="w-[450px] h-[50px] ml-7 mr-10 border-red bg-white border border-slate-300  "
              placeholder="undefined"
            ></input>
            <label className="ml-7 text-xl">Image</label>
            <br />
            <input
              className="w-[450px] h-[50px] ml-7 mr-10 border-red bg-white border border-slate-300  "
              type="file"
            ></input>
            <label className="ml-7 text-xl">Parent Category</label>
            <input className="w-[450px] h-[50px] ml-7 mr-10 border-red bg-white border border-slate-300  " />
            <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
              submit
            </button>
          </div>
        )}
      </div>

      
    </>
  );
};

export default Subcategorypage;
