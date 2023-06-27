import { typeProperties } from "@/@types/@types";
import React from "react";
import { Icon } from "@iconify/react";
import properties from "@/pages/properties";
interface Props {
  property: typeProperties;
}
const RefineProperty = ({ property }: Props) => {
  return (
    <div className="properties__page-card">
      <div className="properties__page-image-container">
        <img src={property.imageUrls[0]} alt="property-image" className="properties__page-main-image" />
        <span className="properties__page-absolute-span"><Icon icon="ic:baseline-favorite"  className="properties__page-icon"/></span>
      </div>
      <div className="properties__page-other-images">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <div className="properties__page-card-contents">
        <h5>{property.area}m<sup>2</sup> Land at {property.location}</h5>
        <p>Ksh. {property.price.toLocaleString()}</p>
        <p>
          <span>{property.title}</span>
          
        </p>
        <p><span><Icon icon="ion:location" />{property.location}</span></p>
        <p className="property__page-description">
          {property.description}
        </p>
        <div className="properties__page-card-icons">
        <Icon icon="material-symbols:call" className="properties__page-icon"/>
        <Icon icon="uiw:message" className="properties__page-icon"/>
        <Icon icon="ic:baseline-whatsapp" className="properties__page-icon"/>
        </div>
      </div>
    </div>
  );
};

export default RefineProperty;
