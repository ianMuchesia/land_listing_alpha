import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { AddImage, AddProperty, BreadCrumb, Loader } from "../../components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { baseURL } from "../../baseURL";
import { setCloseLoader, setFormLoader } from "../../redux/Features/loadSlice";
import { useNavigate } from "react-router-dom";


const Settings = () => {

  const dispatch = useAppDispatch()
const navigate = useNavigate()

  const loader = useAppSelector((state) => state.load.formLoader);


  const [createForm, setCreateForm] = useState({
    title: "",
    area: 0,
    price: 0,
    description: "",
    location: "",
    mainImage: {
      url:""
    },
    images: [{url:""}],
  });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
  const { title, area , price , description, location, mainImage, images} = createForm

  if(!title || !area || !price ||!description||!location||!mainImage||images.length < 3 ){
    toast.warning("please fill all the inputs")
    return
  }
 


dispatch(setFormLoader())
  try {
   const {data}= await axios.post(`${baseURL}/properties`,  {
      title,
      area, price, description, location, mainImage, images,
    },  { withCredentials: true, timeout: 60000 })
    dispatch(setCloseLoader());
    toast.success("Created successful!");
console.log(data)
    setTimeout(() => {
     navigate("/properties")
     setCreateForm({
      title: "",
      area: 0,
      price: 0,
      description: "",
      location: "",
      mainImage: {url:""},
      images: [{url:""}],
     })
     
   
    }, 2000);
  } catch (error:any) {
    dispatch(setCloseLoader());
    console.log(error);
    console.log(error);
    if (error.code === "ECONNABORTED") {
      // handle timeout error
      toast.error("Request timed out. Please check your connection.");
      return;
    }
    if (error.response?.data?.msg) {
      toast.error(error.response.data.msg);
      return;
    }
    toast.error("Something wrong happened try again later");
  }
  
    
  };

  return (
    <section>
      <BreadCrumb title="Settings" link="/setings" />
<ToastContainer/>
      <form action="" className="settings-container" onSubmit={handleSubmit}>
        <div className="settings-header">
          <button className="btn">Edit A Property</button>
          <button className="btn">Delete A Property</button>
        </div>

        <AddProperty setCreateForm={setCreateForm} createForm={createForm} />
        <AddImage
          mainImage={createForm.mainImage}
          images={createForm.images}
          setCreateForm={setCreateForm}
        />
        {loader && <Loader />}
        <button className="btn btn-right ">ADD PROPERTY</button>
      </form>
    </section>
  );
};

export default Settings;
