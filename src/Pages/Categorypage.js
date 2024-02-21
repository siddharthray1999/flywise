import { useState, useEffect } from "react";
import milk from "../Svg/milk.png";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Categorypage = () => {
  const [addnewcategory, setAddnewcategory] = useState(false);
  const [editCategory, setEditcategory] = useState(false);

  const [category, setCategory] = useState();
  const [name, namechange] = useState();
  const [image, imagechange] = useState("");

  const Navigate = useNavigate();

  const toggleEditCategory = () => {
    setEditcategory(!editCategory);
  };
  const toggleModal = () => {
    setAddnewcategory(!addnewcategory);
  };

  useEffect(() => {
    fetch("https://chetan-project-backend.vercel.app/api/v1/catg/")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setCategory(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    // const data = { name, image };
    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);

    fetch("https://chetan-project-backend.vercel.app/api/v1/catg/create", {
      method: "POST",
      // headers: { "content-type": "multipart/form-data" },
      body: formData,
    })
      .then((res) => {
        alert("Created Successfully");
        window.location.reload();
        Navigate("/Category");
      })

      .catch((err) => {
        console.log(err.message);
      });
  };
  const removecategory = (_id) => {
    if (window.confirm("do you want to Delete?")) {
      fetch(
        "https://chetan-project-backend.vercel.app/api/v1/catg/delete/category/" +
          _id,
        {
          method: "Delete",
        }
      )
        .then((res) => {
          alert("Delete Successfully");
          window.location.reload();
        })

        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const editcategory = (_id, name, image) => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("image", image);
    fetch(
      "https://chetan-project-backend.vercel.app/api/v1/catg/update/" + _id,
      {
        method: "PUT",
        body: formData,
      }
    )
      .then((res) => {
        namechange(res.name);
        // window.location.reload();
      })

      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="bg-[#FFFFFF] w-[95%] mt-10  shadow-2xl h-full ml-7">
        <div className="flex justify-between items-center ml-10">
          <div className="text-xl font-bold ">All Category’s (Total : 06)</div>

          <button
            className="bg-[#047DCE] m-10 text-white w-[180px] h-[40px] font-semibold"
            onClick={toggleModal}
          >
            Add Category
          </button>
        </div>
        <hr className="ml-8 mr-8" />

        <table>
          <thead>
            <tr className="flex gap-[14rem] ml-[49px] mr-[49px]">
              <th className="text-left">S.NO</th>
              <th className="text-left">Image</th>
              <th className="text-left">Name</th>
              <th></th>
            </tr>
          </thead>
          <hr className="ml-8 mr-8" />

          <tbody>
            {category?.categories?.map((item) => (
              <>
                <tr
                  className="flex gap-[14rem] ml-[49px] mr-[49px] mt-5 mb-5"
                  key={item.id}
                >
                  <td>#1</td>
                  <td className="w-[100px] ">
                    <img src={item.image} alt="image" />
                  </td>
                  <td className="text-left w-[100px]">{item.name}</td>
                  <td className="flex cursor-pointer gap-9 w-[100px] ">
                    <MdOutlineDeleteForever
                      size={30}
                      style={{ color: "red" }}
                      onClick={() => removecategory(item._id)}
                    />
                    <span onClick={toggleEditCategory}>
                      <FiEdit3
                        size={30}
                        style={{ color: "#047DCE" }}
                        onClick={() => {
                          editcategory(item._id);
                        }}
                      />
                    </span>
                  </td>
                </tr>
                <hr className="ml-8 mr-8" />
              </>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid place-items-center">
        {addnewcategory && (
          <form
            className="shadow-2xl w-[500px] h-[350px] absolute bg-white "
            onSubmit={handlesubmit}
          >
            <div className="flex justify-between ml-7 mr-10 mt-10">
              <div className="text-xl font-semibold">Create New Category</div>
              <IoIosCloseCircle
                onClick={toggleModal}
                size={40}
                className="cursor-pointer"
              />
            </div>
            <label className="ml-7 text-xl">Name</label>
            <br />
            <input
              className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300"
              value={name}
              onChange={(e) => namechange(e.target.value)}
            ></input>
            <label className="ml-7 text-xl">Image</label>
            <br />
            <input
              className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300"
              type="file"
              // value={image}
              onChange={(e) => imagechange(e.target.files[0])}
            ></input>
            <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
              submit
            </button>
          </form>
        )}
      </div>

      <div className="flex justify-center items-center translate-x-{-50%} translate-y-{-50%}">
        {editCategory && (
          <form
            className="shadow-2xl w-[500px] h-[350px] absolute bg-white "
            onSubmit={editcategory}
          >
            <div className="flex justify-between ml-7 mr-10 mt-10">
              <div className="text-xl font-semibold">Edit Category</div>
              <IoIosCloseCircle
                onClick={toggleEditCategory}
                size={40}
                className="cursor-pointer"
              />
            </div>
            <label className="ml-7 text-xl">Name</label>
            <br />
            <input
              value={name}
              onChange={(e) => namechange(e.target.value)}
              className="w-[450px] h-[50px] ml-7 mr-10  bg-white border border-slate-300 "
              placeholder="undefined"
            ></input>
            <label className="ml-7 text-xl">Image</label>
            <br />
            <input
              // value={image}
              onChange={(e) => imagechange(e.target.files[0])}
              className="w-[450px] h-[50px] ml-7 mr-10  bg-white border border-slate-300"
              type="file"
            ></input>
            <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
              submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Categorypage;
