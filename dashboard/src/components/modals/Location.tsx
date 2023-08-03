import React, { useState } from "react";
import { Icon } from "@iconify/react";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { baseURL } from "../../baseURL";
interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Location = ({ setOpenModal }: Props) => {
  const [location, setLocation] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location) {
      toast.error("Please enter value first");
      return;
    }
    try {
      await axios.post(`${baseURL}/location`, { name: location });
      setOpenModal(false);
      toast.success("location added");
    } catch (error: any) {
      console.log(error);
      if (error.response?.data?.msg) {
        toast.error(error.response.data.msg);
        return;
      }
      toast.error("Something wrong happened try again later");
    }
  };
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <ToastContainer />
        <span className="modal-close" onClick={() => setOpenModal(false)}>
          <Icon icon="material-symbols:close" />
        </span>

        <div className="modal-content">
          <form className="form" onSubmit={handleSubmit}>
            <h4 className="title">Add Location</h4>
            <div className="input-container">
              <label htmlFor="property-title" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-input"
                name="title"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
            </div>

            <div className="logout-btn-container">
              <button className="btn btn-right ">ADD PROPERTY</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Location;
