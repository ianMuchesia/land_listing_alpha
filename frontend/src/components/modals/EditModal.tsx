import { typeProperties } from '@/@types/@types';
import React from 'react'
import { Icon } from '@iconify/react';
interface Props{
    closeModal: (modalName: string) => void;
    property:typeProperties;
}
const EditModal = ({closeModal, property}:Props) => {
  return (
    <aside className='modal-overlay'>
    <div className='modal-container'>
      <span className='modal-close' onClick={()=>{closeModal("isModalOpen4")}}><Icon icon="material-symbols:close" className='properties__page-icon'/></span>
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

export default EditModal