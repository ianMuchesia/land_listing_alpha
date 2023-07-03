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


const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setForm(prevForm=>({
        ...prevForm,
        [e.target.name]: e.target.value
    }))
}

console.log(property._id)


const handleSubmit = async(e:React.FormEvent)=>{
    e.preventDefault();
   

    try {
        const {data } = await axios.post('http://localhost:4000/api/v1/communication/whatsapp', {name:form.name , phone:form.phone ,propertyID:property._id})

        console.log(data)
        if(data.success){
            setForm({
                name:"",
                phone:"",
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
          <h5>Email</h5>
         
         <form>
            <div className="modal__input-container">
                <label htmlFor="modal_name">
                    Full Name
                </label>
                <input type="text" name="" id="" placeholder='Enter Full Name' />
            </div>
            <div className="modal__input-container">
                <label htmlFor="modal_number">
                    Email
                </label>
                <input type="email" name="" id="" placeholder='Enter Your Email' />
            </div>
            <div className="modal__input-container">
                <label htmlFor="modal_number">
                    Phone Number
                </label>
                <input type="Number" name="" id="" placeholder='Enter Phone Number' />
            </div>
            <div className="modal__input-container">
                <label htmlFor="modal_number">
                    Please enter your message
                </label>
                <textarea name="" id="" placeholder='' cols={10} rows={10}/>
            </div>
            <button className='btn modal-btn'>Send Message</button>
         </form>
        
      </div>

     </div>
   </aside> 
  )
}

export default Email