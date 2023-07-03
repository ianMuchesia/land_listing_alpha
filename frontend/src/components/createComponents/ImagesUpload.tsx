import React from 'react'
import ImageContainer from './ImageContainer'

const ImagesUpload = () => {
  return (
    <div className="create_image-upload-container">
       
    <div className="create__image-container_1">
      <h4>Main Image</h4>
   <ImageContainer/>

    </div>
    <div className="create__image-container_2">
      <h4>Other Images</h4>
      <div className="image-container-2">
    <input type="file" name={`shop-image`} />
    <input type="file" name={`shop-image`} />
    <input type="file" name={`shop-image`} />
    <input type="file" name={`shop-image`} />
    </div>
    </div>
</div>
  )
}

export default ImagesUpload