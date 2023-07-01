import { typeProperties } from "@/@types/@types";
import React from "react";
import { Icon } from "@iconify/react";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
  closeModal: (modalName: string) => void;
  property: typeProperties;
}
const DeleteModal = ({ closeModal, property }: Props) => {
  return (
    <aside className="modal-overlay">
      {/* <ToastContainer/> */}

      <div className="modal-container">
        <span className="modal-close">
          <AiOutlineClose
            className="properties__page-icon"
            onClick={() => closeModal("isModalOpen5")}
          />
        </span>
        <div className="modal-content modal-content-logout">
          <h4>Delete?</h4>
          <p>You are about to delete this property. Do you wish to continue?</p>
          <div className="logout-btn-container">
            <button
              className="btn btn-confirm"
              onClick={() => closeModal("isModalOpen5")}
            >
              Yes
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => closeModal("isModalOpen5")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DeleteModal;
