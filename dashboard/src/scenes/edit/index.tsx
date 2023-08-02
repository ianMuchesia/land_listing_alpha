import { ToastContainer, toast } from "react-toastify"
import { AddImage, AddProperty, BreadCrumb, Loader } from "../../components"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { baseURL } from "../../baseURL";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import { setCloseLoader, setFormLoader } from "../../redux/Features/loadSlice";

const Edit = () => {
  const { propertyID } = useParams<{ propertyID?: string }>();
  
  const navigate = useNavigate();

  const dispatch = useAppDispatch();


  const loading = useAppSelector(state=>state.load.formLoader)
  const [createForm, setCreateForm] = useState({
    title: "",
    area: 0,
    price: 0,
    description: "",
    location: "",
    mainImage: {url:""},
    images: [{url:""}],
  });
 
  

useEffect(()=>{
const fetchData = async()=>{
  try{
    dispatch(setFormLoader())
    const {data} =await axios.get(`${baseURL}/properties/${propertyID}`)
    
    setCreateForm(data)
  
    dispatch(setCloseLoader())
  }catch(error){
    console.log(error)

  }
}
fetchData()
}, [])


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
    <BreadCrumb title="Edit Properties" link="/properties" />
    <ToastContainer/>
    {loading && <Loader/>} 
      <form action="" className="settings-container" onSubmit={handleSubmit} >
        <div className="settings-header">
        
        </div>
        <AddProperty setCreateForm={setCreateForm} createForm={createForm} />
        <AddImage
          mainImage={createForm.mainImage}
          images={createForm.images}
          setCreateForm={setCreateForm}
        />
       
       
        <button className="btn btn-right ">EDIT PROPERTY</button>
      </form>
   </section>
  )
}

export default Edit