import { typeProperties } from '@/@types/@types';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
interface Props{
    closeModal: (modalName: string) => void;
    property: typeProperties;
}
const Phone = ({closeModal, property}:Props) => {
    const router = useRouter();
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
            const {data } = await axios.post('http://localhost:4000/api/v1/communication/phone', {name:form.name , phone:form.phone ,propertyID:property._id})

            console.log(data)
            if(data.success){
                setForm({
                    name:"",
                    phone:"",
                })
                router.push(data.link)
            }
        } catch (error) {
            console.log(error)
        }


    }
  return (
    <aside className='modal-overlay'>
    <div className='modal-container'>
      <span className='modal-close' onClick={()=>{closeModal("isModalOpen1")}}><Icon icon="material-symbols:close" className='properties__page-icon'/></span>
      <div className='modal-content'>
      <h4>{property.title}</h4>
          <span className='modal-action-icon' ><Icon icon="ic:baseline-phone" className='properties__page-icon' /></span>
          <h5>Make A phone Call</h5>
         
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
            <button className='btn modal-btn'>Contact Agent</button>
         </form>
        
      </div>

     </div>
   </aside> 
  )
}

export default Phone