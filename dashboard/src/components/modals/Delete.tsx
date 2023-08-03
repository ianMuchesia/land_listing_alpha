import axios from "axios";
import { typeProperties } from "../../@types/@types"
import {AiOutlineClose} from "react-icons/ai"
import { baseURL } from "../../baseURL";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
interface Props{
  property:typeProperties|null;
  setOpenModal:React.Dispatch<React.SetStateAction<boolean>>;
}
const Delete = ({property, setOpenModal}:Props) => {


  const navigate = useNavigate()
 
 const handleDelete = async()=>{


  try {
    if(property !== null)
    {
      await axios.delete(`${baseURL}/properties/${property?._id}`)
      toast.success("deleted succesfully")
      setOpenModal(false)
      navigate("/properties")
    }
   
  } catch (error) {
    console.log(error)
    toast.error("Request Failed")
  }
 }
 
 
  return (
    <div className="modal-overlay">
      <ToastContainer/>
         <div className="modal-container">
        <span className="modal-close">
          <AiOutlineClose
            className="properties__page-icon"
            onClick={() => setOpenModal(false)}
          />
        </span>
        <div className="modal-content modal-content-logout">
          <h4>Delete?</h4>
          <p>You are about to delete {property?.title}. Do you wish to continue?</p>
          <div className="logout-btn-container">
            <button
              className="btn btn-confirm"
              onClick={() => handleDelete()}
            >
              Yes
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
        </div>
  )
}

export default Delete