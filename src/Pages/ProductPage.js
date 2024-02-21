import { useState, useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import milk from "../Svg/milk.png";
import { MdRemoveRedEye } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
const ProductPage = () => {
  const [visible, setVisible] = useState(false);

  const [showNewproduct, setShowNewproduct] = useState(false);
  const [downloadInvoice, setDownloadInvoice] = useState(false);
  const [product, setProduct] = useState();

  const toggleNewproduct = () => {
    setShowNewproduct(!showNewproduct);
  };
  const toggledownloadinvoice = () => {
    setDownloadInvoice(!downloadInvoice);
  };

  useEffect(() => {
    fetch(
      "  https://chetan-project-backend.vercel.app/api/v1/product/admin/products"
    )
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setProduct(resp);
        console.log(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="bg-[#FFFFFF] w-[95%] mt-10  shadow-2xl h-full ml-7">
        <div className="flex justify-between items-center ml-9">
          <div className="text-xl font-bold "> All Products (Total : 06)</div>
          <div>
            <button
              className="bg-[#047DCE] m-10 text-white w-[180px] h-[40px] font-semibold  "
              onClick={toggledownloadinvoice}
            >
              Download Invoices <span></span>
            </button>
            <button
              className="bg-[#047DCE] text-white mr-6  w-[180px] h-[40px] font-semibold"
              onClick={toggleNewproduct}
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
        <hr className="ml-8 mr-8 mt-5" />
        <div className="flex gap-6 mt-5 ml-8">
          <span
            className="text-xl  font-semibold cursor-pointer"
            onClick={() => setVisible(true)}
          >
            Girorganic
          </span>
          <span
            className="text-xl font-semibold cursor-pointer "
            onClick={() => setVisible(false)}
          >
            M. Poonam Natural
          </span>
        </div>
        {visible ? (
          <>
            organic
            <div className="mt-5">
              <table>
                <tr className="flex gap-[5%] ml-[49px] mr-[49px] text-left">
                  <th className="px-4 py-2">S.NO</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">MRP</th>
                  <th className="px-4 py-2">Stock</th>
                  <th className="px-4 py-2">Credited</th>
                  <th className="px-4 py-2">Invoice</th>
                  <th className="px-4 py-2"></th>
                </tr>
                <hr className="ml-8 mr-8 mt-5" />

                {product?.products?.map((item) => (
                  // <tr key={item.id}>
                  //   <td className="px-4 py-2">#1</td>
                  //   <td className="px-4 py-2 w-[100px]">
                  //     <img src={item.images[0].img} alt="image" />
                  //   </td>

                  //   <td className="px-4 py-2">{item.name}</td>
                  //   <td className="px-4 py-2">₹{item.price}/-</td>
                  //   <td className="px-4 py-2">200</td>
                  //   <td className="px-4 py-2">2023-23-12</td>
                  //   <td className="px-4 py-2">
                  //     <IoMdDownload style={{ color: "#CEA204" }} size={30} />
                  //   </td>
                  //   <td className="flex cursor-pointer px-4 py-2">
                  //     <MdOutlineDeleteForever
                  //       size={30}
                  //       style={{ color: "red" }}
                  //     />
                  //     <MdRemoveRedEye style={{ color: "#00AB7F" }} size={30} />
                  //     <FiEdit3 size={30} style={{ color: "#047DCE" }} />
                  //   </td>
                  // </tr>
                  <tr className="flex gap-[5rem] ml-[49px] mr-[49px]  items-center text-left mt-5">
                  <td>#1</td>
                  <td className="w-[100px]">
                    <img src={item.images[0].img} alt="image" />
                  </td>

                  <td className="w-3">{item.name}</td>
                  <td>₹{item.price}/-</td>
                  <td>200</td>
                  <td>2023-23-12</td>
                  <td>
                    <IoMdDownload style={{ color: "#CEA204" }} size={30} />
                  </td>
                  <td className="flex cursor-pointer gap-5">
                    <MdOutlineDeleteForever
                      size={30}
                      style={{ color: "red" }}
                    />
                    <MdRemoveRedEye style={{ color: "#00AB7F" }} size={30} />
                    <FiEdit3 size={30} style={{ color: "#047DCE" }} />
                  </td>
                </tr>
                ))}
                <hr className="ml-8 mr-8 mt-5" />
              </table>
            </div>
          </>
        ) : (
          <>
            m poonam
            <div className="mt-5">
              <table>
                <tr className="flex gap-[8%] ml-[49px] mr-[49px] text-left">
                  <th>S.NO</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>MRP</th>
                  <th>Stock</th>
                  <th>Credited</th>
                  <th>Invoice</th>
                  <th></th>
                </tr>
                <hr className="ml-8 mr-8 mt-5" />

                {product?.products?.map((item) => (
                  <tr className="flex gap-[5rem] ml-[49px] mr-[49px]  items-center text-left mt-5">
                    <td>#1</td>
                    <td className="w-[100px]">
                      <img src={item.images[0].img} alt="image" />
                    </td>

                    <td className="w-3">{item.name}</td>
                    <td>₹{item.price}/-</td>
                    <td>200</td>
                    <td>2023-23-12</td>
                    <td>
                      <IoMdDownload style={{ color: "#CEA204" }} size={30} />
                    </td>
                    <td className="flex cursor-pointer gap-5">
                      <MdOutlineDeleteForever
                        size={30}
                        style={{ color: "red" }}
                      />
                      <MdRemoveRedEye style={{ color: "#00AB7F" }} size={30} />
                      <FiEdit3 size={30} style={{ color: "#047DCE" }} />
                    </td>
                  </tr>
                ))}
                <hr className="ml-8 mr-8 mt-5" />
              </table>
            </div>
          </>
        )}
      </div>

      <div>
        {showNewproduct && (
          <div className="shadow-2xl w-[900px] h-[900px] absolute mt-[-70%] ml-[10%] bg-white ">
            <div className="flex justify-between ml-7 mr-10 mt-10">
              <div className="text-xl font-semibold">Create New Product</div>
            </div>
            <hr className="mt-2" />
            <form className="mt-2">
              <label className="ml-8 text-xl">Images</label>
              <br />
              <input
                className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300"
                type="file"
              />
            </form>

            <hr className="mt-2" />
            <form className="mt-2">
              <label className="ml-8 text-xl">Product name</label>
              <br />
              <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
            </form>
            <hr className="mt-2" />

            <form className="mt-2">
              <label className="ml-8 text-xl">Description</label>
              <br />
              <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
            </form>
            <hr className="mt-2" />

            <form className="mt-2">
              <label className="ml-8 text-xl">Size</label>
              <br />
              <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
            </form>
            <hr className="mt-2" />
            <form className="mt-2">
              <label className="ml-8 text-xl">Purchase Type</label>
              <br />
              <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
            </form>
            <hr className="mt-2" />
            <form className="mt-2">
              <label className="ml-8 text-xl">Choose Category</label>
              <br />
              <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
            </form>
            <form className="mt-2">
              <hr className="mt-2" />
              <form className="mt-2">
                <label className="ml-8 text-xl">Choose Sub Category</label>
                <br />
                <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
              </form>
              <hr className="mt-2" />
              <label className="ml-8 text-xl">Price</label>
              <br />
              <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
            </form>
            <hr className="mt-2" />
            <form className="mt-2">
              <label className="ml-8 text-xl">Stock</label>
              <br />
              <input className="w-[90%] h-[40px] ml-8 bg-white border border-slate-300" />
            </form>
            <div className="flex justify-between mr-8">
              <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
                submit
              </button>
              <button
                className="bg-[#047DCE] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5"
                onClick={toggleNewproduct}
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        {downloadInvoice && (
          <div className="shadow-2xl w-[500px] h-[320px] absolute mt-[-70%] ml-[27%] bg-white content-center">
            <div className="flex justify-between ml-7 mr-10 mt-10">
              <div className="text-xl font-semibold">Download Invoices</div>
              <IoIosCloseCircle
                onClick={toggledownloadinvoice}
                size={40}
                className="cursor-pointer"
              />
            </div>
            <label className="ml-7  mb-2 text-l font-semibold">From</label>
            <input
              className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300 p-4"
              type="date"
            ></input>
            <label className="ml-7 text-l font-semibold">To</label>
            <input
              className="w-[450px] h-[50px] ml-7 mr-10 bg-white border border-slate-300 p-4"
              type="date"
            ></input>
            <button className="bg-[#00AB7F] text-white font-semibold w-[100px] h-[40px] ml-7 mt-5">
              submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductPage;
