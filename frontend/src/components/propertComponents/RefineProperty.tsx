import { typeProperties } from "@/@types/@types";
import React, {useReducer, useState} from "react";
import { Icon } from "@iconify/react";
import properties from "@/pages/properties";

import { DeleteModal, EditModal, Email, Phone, Whatsapp } from "../modals";
interface Props {
  property: typeProperties;
}



const RefineProperty = ({ property }: Props) => {

  const [modalState, setModalState] = useState({
    isModalOpen1: false,
    isModalOpen2: false,
    isModalOpen3: false,
    isModalOpen4: false,
    isModalOpen5: false,
  });

  const openModal = (modalName: string) => {
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: true,
    }));
  };

  const closeModal = (modalName: string) => {
    console.log("here")
    setModalState((prevState) => ({
      ...prevState,
      [modalName]: false,
    }));
  };

  console.log(property)
  return (
    <div className="properties__page-card">
      <div className="properties__page-image-container">
        <img src={property.mainImage.url} alt="property-image" className="properties__page-main-image" />
        <span className="properties__page-absolute-span"><Icon icon="ic:baseline-favorite"  className="properties__page-icon"/></span>
      </div>
      <div className="properties__page-other-images">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="properties__page-card-contents">
        <h5>{property.area}m<sup>2</sup> Land at {property.location.name}</h5>
        <p>Ksh. {property.price.toLocaleString()}</p>
        <p>
          <span>{property.title}</span>
          
        </p>
        <p><span><Icon icon="ion:location" />{property.location.name}</span></p>
        <p className="property__page-description">
          {property.description}
        </p>
        <div className="properties__page-card-icons">
        <Icon icon="material-symbols:call" className="properties__page-icon" onClick={()=>{openModal("isModalOpen1")}}/>
        <Icon icon="uiw:message" className="properties__page-icon" onClick={()=>{openModal("isModalOpen2")}}/>
        <Icon icon="ic:baseline-whatsapp" className="properties__page-icon" onClick={()=>{openModal("isModalOpen3")}}/>
        {/* <Icon icon="material-symbols:edit-outline" className="properties__page-icon admini-icon" onClick={()=>{openModal("isModalOpen4")}}/>
        <Icon icon="material-symbols:delete-outline" className="properties__page-icon admini-icon" onClick={()=>{openModal("isModalOpen5")}}/> */}
       
        </div>
       
      
        
        <div className="">
          {modalState.isModalOpen1 && <Phone property={property} closeModal={closeModal}/>}
          {modalState.isModalOpen2 && <Email  property={property} closeModal={closeModal}/>}
          {modalState.isModalOpen3 && <Whatsapp  property={property} closeModal={closeModal}/>}
          {/* {modalState.isModalOpen4 && <EditModal property={property} closeModal={closeModal}/>}
          {modalState.isModalOpen5 && <DeleteModal property={property} closeModal={closeModal}/>} */}
        </div>
       

      </div>
    </div>
  );
};

export default RefineProperty;
