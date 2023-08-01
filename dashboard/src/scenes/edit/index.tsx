import { ToastContainer } from "react-toastify"
import { AddImage, AddProperty, BreadCrumb, Loader } from "../../components"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useSWR from 'swr';
import { baseURL } from "../../baseURL";
import axios from "axios";

const Edit = () => {
  const { propertyID } = useParams<{ propertyID?: string }>();

  const [createForm, setCreateForm] = useState({
    title: "",
    area: 0,
    price: 0,
    description: "",
    location: "",
    mainImage: "",
    images: [""],
  });
  

useEffect(()=>{
const fetchData = async()=>{
  try{
    const {data} =await axios.get(`${baseURL}/properties/${propertyID}`)
    console.log(data) 
    setCreateForm(data)
  }catch(error){
    console.log(error)

  }
}
fetchData()
}, [])



  
  return (
   <section>
    <BreadCrumb title="Edit Properties" link="/properties" />
    <ToastContainer/>
    {/* {""ding && <Loader/>} */}
      <form action="" className="settings-container" >
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