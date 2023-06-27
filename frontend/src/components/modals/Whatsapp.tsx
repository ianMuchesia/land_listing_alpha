import React from 'react'
interface Props{
    closeModal: (modalName: string) => void;
}
const Phone = ({closeModal}:Props) => {
  return (
    <aside className='modal-overlay'>
    <div className='modal-container'>
      
      <div className='modal-content'>
          <h4>Modal</h4>
          <p>cooking instructions</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum.</p>
          <a href="google.com" target='_blank'>Original Source</a>
          <button className='btn btn-hipster close-btn'
          onClick={()=>{closeModal("isModalOpen3")}}> close</button>
      </div>

     </div>
   </aside> 
  )
}

export default Phone