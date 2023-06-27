import React from 'react'
import { Icon } from '@iconify/react';

interface Props{
    closeModal: (modalName: string) => void;
}
const Whatsapp = ({closeModal}:Props) => {
  return (
    <aside className='modal-overlay'>
    <div className='modal-container'>
      <span className='modal-close' onClick={()=>{closeModal("isModalOpen3")}}><Icon icon="material-symbols:close" className='properties__page-icon'/></span>
      <div className='modal-content'>
      
         <h3>Whatsapp APi connection</h3>
        
      </div>

     </div>
   </aside> 
  )
}

export default Whatsapp