import { typeProperties } from "@/@types/@types";
import React from "react";
import { Icon } from '@iconify/react';
interface Props {
  property: typeProperties;
}
const Property = ({ property }: Props) => {
  return (
    <div>
      <div className="property-card">
        <img
          src={property.imageUrls[0]}
          height={250}
          width={350}
          alt="property-image"
          className="property-image"
        />
    
      <div className="property-contents">
      <p className="property-name">{property.title}</p>
     <p className="property-area"><span><Icon icon="bx:area" />Area:</span>{property.area}m<sup>2</sup></p>
     <p className="property-location"><span><Icon icon="carbon:location" /></span>{property.location}</p>
      <p className="property-price">Ksh.{property.price.toLocaleString()}</p>
      </div>
      </div>
    </div>
  );
};

export default Property;
