import { typeProperties } from '@/@types/@types';
import { Icon } from '@iconify/react';
import React from 'react'
interface Props{
    closeModal: (modalName: string) => void;
    property: typeProperties;
}
const Phone = ({closeModal, property}:Props) => {
  return (
    <aside className='modal-overlay'>
    <div className='modal-container'>
      <span className='modal-close' onClick={()=>{closeModal("isModalOpen1")}}><Icon icon="material-symbols:close" className='properties__page-icon'/></span>
      <div className='modal-content'>
      <h4>{property.title}</h4>
          <span className='modal-action-icon' ><Icon icon="ic:baseline-phone" className='properties__page-icon' /></span>
          <h5>Make A phone Call</h5>
         
         <form>
            <div className="modal__input-container">
                <label htmlFor="modal_name">
                    Full Name
                </label>
                <input type="text" name="" id="" placeholder='Enter Full Name' />
            </div>
            <div className="modal__input-container">
                <label htmlFor="modal_number">
                    Phone Number
                </label>
                <input type="Number" name="" id="" placeholder='Enter Phone Number' />
            </div>
            <button className='btn modal-btn'>Contact Agent</button>
         </form>
        
      </div>

     </div>
   </aside> 
  )
}

export default Phone