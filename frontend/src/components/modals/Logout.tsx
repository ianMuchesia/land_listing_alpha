import { setisNotAuthenticated } from "@/pages/redux/Features/authSlice";
import { useAppDispatch, useAppSelector } from "@/pages/redux/Hooks";
import axios from "axios";
import {useRouter}  from "next/router";
import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { ToastContainer, toast } from "react-toastify";

interface Props {
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Logout = ({ setLogoutModal }: Props) => {
    const router = useRouter();
    const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
       
      const { data } = await axios.get(
        `http://localhost:4000/api/v1/auth/logout`, {withCredentials:true}
      );

      if(data.success){
      setTimeout(() => {
       
        // toast.success("Logout successful!");
        dispatch(setisNotAuthenticated())
        
        router.push("/");
        setLogoutModal(false);
      }, 1000);
    }
    } catch (error:any) {
       
        if (error.response?.data?.msg) {
            // toast.error(error.response.data.msg);
            return;
          }
        //   toast.error("Something wrong happened try again later");
    }
  };
  return (
    <aside className="modal-overlay">
        {/* <ToastContainer/> */}
      
      <div className="modal-container">
        <span className="modal-close">
          {/* <AiOutlineClose
            className="properties__page-icon"
            onClick={() => {
              setLogoutModal(false);
            }}
          /> */}
        </span>
        <div className="modal-content modal-content-logout">
          <h4>Logout</h4>
          <p>Are you sure you want to logout?</p>
          <div className="logout-btn-container">
            <button className="btn btn-confirm" onClick={handleLogout}>
              Yes
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => {
                setLogoutModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Logout;
