import React, { useEffect, useContext, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { TbEdit } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import {
  getUserDetails,
  postLogoutFromServer,
} from "../services/APIcalls/user";
import GlobalContext from "../context/GlobalContext";
import { useToast } from "../context/ToastContext";
import { useDispatch, useSelector } from "react-redux";
import { recieveUsrDetails } from "../slices/userSlice";


function UserDetails({ userid }) {
  const navigate = useNavigate();
  const { loggedIn, setLoggedin, userData } = useContext(GlobalContext);
  // const [userDetails, setuserDetails] = useState({});
  const userDetails = useSelector(state=>state.User.data)
  const dispatch = useDispatch()
  const [img, setImg] = useState("");
  const toast = useToast();

  useEffect(() => {
    const fetchUserDtls = async () => {
      // const UserResponse = await getUserDetails(userData.userId);
      // setuserDetails(UserResponse);
       dispatch(recieveUsrDetails(userData.userId))
    };
    fetchUserDtls();
  }, []);

  const logoutHander = async () => {
    const dat = await postLogoutFromServer();
    console.log(dat);
    setLoggedin(false);
    navigate("/auth/login");
  };

  const handlePfpChange = (e) => {
    const file = e.target.files[0];
    console.log("file target", file);
    const objectUrl = URL.createObjectURL(file);
    setImg(objectUrl);
    toast.open(
      <div className="alert alert-success">
        <span>profile picture updated.</span>
      </div>
    );
  };


  
  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="avatar relative z-10">
        <div className="w-24 rounded-full">
          {img ? (
            <img src={img} className=" w-full max-w-[10em] " />
          ) : (
            <FaUserCircle className=" w-full max-w-[10em] " fontSize={80} />
          )}
          <div className="absolute bottom-2 left-20 z-30">
            <input
              onInput={handlePfpChange}
              className=" hidden"
              type="file"
              name="file"
              accept="image/jpg"
              id="file"
            />
            <label className="bg-red-200" htmlFor="file">
              <TbEdit cursor={"pointer"} fontSize={22} />
            </label>
          </div>
        </div>
      </div>
      <p className="text-3xl font-bold">
        {" "}
        @{userDetails && userDetails.username}
      </p>

      <button
        onClick={() => logoutHander()}
        className="p-3 bg-red-400 w-24 rounded-lg text-white font-semibold text-xl px-4 py-2"
      >
        logout
      </button>
    </div>
  );
}

export default UserDetails;
