import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import axios from 'axios';
import { typeProperties } from '@/@types/@types';
import { useRouter } from 'next/router';

interface Props{
    closeModal: (modalName: string) => void;
    property:typeProperties;
}
const Whatsapp = ({closeModal, property}:Props) => {

  const router = useRouter()

  const [ form , setForm] = useState({
    name:"",
    phone:"",
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
            window.open(data.link)
        }
    } catch (error) {
        console.log(error)
    }


}
  return (
    <aside className='modal-overlay'>
    <div className='modal-container'>
      <span className='modal-close' onClick={()=>{closeModal("isModalOpen3")}}><Icon icon="material-symbols:close" className='properties__page-icon'/></span>
      <div className='modal-content'>
      <h5>{property.title}</h5>
          <span className='modal-action-icon' ><Icon icon="ic:baseline-whatsapp" width="30" height="30" /></span>
          <h5>Whatsapp</h5>
      <form onSubmit={handleSubmit}>
            <div className="modal__input-container">
                <label htmlFor="modal_name">
                    Full Name
                </label>
                <input type="text" name="name" id="modal_name" placeholder='Enter Full Name'  onChange={handleChange} value={form.name} />
            </div>
            <div className="modal__input-container">
                <label htmlFor="modal_number">
                    Phone Number
                </label>
                <input type="Number" name="phone" id="modal_number" placeholder='Enter Phone Number' value={form.phone} onChange={handleChange} />
            </div>
            <button className='btn modal-btn'>Message Agent</button>
         </form>
        
        
      </div>

     </div>
   </aside> 
  )
}

export default Whatsapp