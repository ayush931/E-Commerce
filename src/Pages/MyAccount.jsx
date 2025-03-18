import { MdOutlineCloudUpload } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";

function MyAccount() {
  return (
    <section className="py-10 w-full">
      <div className="container flex gap-5">
        <div className="col1 w-[20%]">
          <div className="card bg-white shadow-md rounded-md">
            <div className="w-full p-5 flex items-center justify-center flex-col">
              <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                <img
                  src="/Ayush Photo 2.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                  <input
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0"
                  />
                  <MdOutlineCloudUpload className="text-[#fff] text-[25px]" />
                </div>
              </div>
              <h3>Ayush Kumar</h3>
              <h6 className="text-[13px] font-[500]">
                ayushkumar9315983@gmail.com
              </h6>
            </div>
            <ul className="list-none pb-5 myAccountTabs">
              <li className="w-full">
                <NavLink
                  to={"/myAccount"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                    <FaRegUserCircle className="text-[18px]" />
                    My Profile
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to={"/myList"} exact={true} activeClassName="isActive">
                  <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                    <FaRegHeart className="text-[18px]" />
                    My List
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to={"/myOrders"}
                  exact={true}
                  activeClassName="isActive"
                >
                  <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                    <IoBagCheckOutline className="text-[18px]" />
                    My orders
                  </Button>
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink to={"/logout"} exact={true} activeClassName="isActive">
                  <Button className="flex items-center !py-2 !px-5 !text-left !gap-4 w-full !justify-start !text-black !rounded-none !capitalize">
                    <LuLogOut className="text-[18px]" />
                    Logout
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col2 w-[50%]">
          <div className="card bg-white p-5 shadow-md rounded-md">
            <h2 className="pb-3">My Profile</h2>
            <hr />
            <form className="mt-5">
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    type="text"
                  />
                </div>
                <div className="w-[50%]">
                  <TextField
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className="w-[50%]">
                  <TextField
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    type="number"
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center gap-4">
                <Button className="btn-org btn-lg w-[100px]">Save</Button>
                <Button className="btn-org btn-lg w-[100px] btn-border">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
