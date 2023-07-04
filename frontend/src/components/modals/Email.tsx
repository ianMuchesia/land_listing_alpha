import { typeProperties } from '@/@types/@types';
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios';
interface Props{
    closeModal: (modalName: string) => void;
    property:typeProperties;
}
const Email = ({closeModal, property}:Props) => {




  const [ form , setForm] = useState({
    name:"",
    phone:"",
    message: "",
})


const handleChange = (e:React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>)=>{
    setForm(prevForm=>({
        ...prevForm,
        [e.target.name]: e.target.value
    }))
}

console.log(property._id)


const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
   

    try {
        const {data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/communication/whatsapp`, {name:form.name , phone:form.phone ,propertyID:property._id})

        console.log(data)
        if(data.success){
            setForm({
                name:"",
                phone:"",
                message:""
            })
        }
    } catch (error) {
        console.log(error)
    }


}
  return (
    <aside className='modal-overlay'>
    <div className='modal-container'>
      <span className='modal-close' onClick={()=>{closeModal("isModalOpen2")}}><Icon icon="material-symbols:close" className='properties__page-icon'/></span>
      <div className='modal-content'>
      <h4>{property.title}</h4>
          <span className='modal-action-icon' ><Icon icon="ic:outline-email" width="30" height="30" /></span>
          <h5>SMS</h5>
         
         <form>
            <div className="modal__input-container">
                <label htmlFor="modal_name">
                    Full Name
                </label>
                <input type="text" name="name" id="" placeholder='Enter Full Name' value={form.name} onChange={handleChange}/>
            </div>
            {/* <div className="modal__input-container">
                <label htmlFor="modal_number">
                    Email
                </label>
                <input type="email" name="email" id="" placeholder='Enter Your Email' />
            </div> */}
            <div className="modal__input-container">
                <label htmlFor="modal_number">
                    Phone Number
                </label>
                <input type="Number" name="phone" id="" placeholder='Enter Phone Number' value={form.phone} onChange={handleChange}/>
            </div>
            <div className="modal__input-container">
                <label htmlFor="modal_number">
                    Please enter your message
                </label>
                <textarea name="message" id="" placeholder='' cols={10} rows={10} value={form.message} onChange={handleChange}/>
            </div>
            <button className='btn modal-btn'>Send Message</button>
         </form>
        
      </div>

     </div>
   </aside> 
  )
}

export default Email