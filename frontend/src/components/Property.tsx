import { typeProperties } from '@/@types/@types'
import React from 'react'

interface Props{
    property: typeProperties;
}
const Property = ({property}:Props) => {
  return (
    <div>
        <div className="property-card">
            <img src={property.imageUrls[0]} height={250} width={250} alt="property-image"    className="property-image"/>
        </div>
        <p className="property-name">{property.title}</p>
        <p className="property-price">{property.price}</p>
    </div>
  )
}

export default Property